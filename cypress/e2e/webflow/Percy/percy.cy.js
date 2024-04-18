import '@testing-library/cypress/add-commands'

// Load URLs from the JSON file
// let urls
// if (Cypress.env('webflow_env') === 'staging') {
//   urls = require('./staging_urls.json')
// } else {
//   urls = require('./prod_urls.json')
// }
function snapshot(url) {
  cy.viewport(400, 1024)
  cy.scrollTo('bottom', { ensureScrollable: false })
  cy.wait(1000)
  cy.percySnapshot(url, { width: 400 })
  cy.viewport(1024, 1024)
  cy.scrollTo('bottom', { ensureScrollable: false })
  cy.wait(1000)
  cy.percySnapshot(url, { width: 1024 })
}


// describe('Visit URLs and Capture Percy Snapshots', () => {
//   urls.urls.forEach((url) => {
//     it(`Visits ${url} and captures Percy snapshot`, () => {
//       cy.log('WEBFLOW_ENV value:', Cypress.env('webflow_env'))
//       cy.visit(url)
//      // if (Cypress.env('webflow_env') === 'staging') {
//      //  cy.get('.contact-social_embed.is-whatsapp').should('be.visible', { timeout: 30000 })
//      // } else {
//      //   cy.c_waitForPageLoad()
//      // }
//       cy.wait(3000)
//       snapshot(url)
//     })
//   })
// })

describe('Visit URLs based on environment', () => {
  it('Visits URLs based on environment', () => {
    const environment = Cypress.env('WEBFLOW_ENV')
    const baseUrl = getBaseUrl(environment) // Function to get base URL based on environment

    cy.readFile('percy_urls.json').then((data) => {
      data.paths.forEach((path) => {
        const url = `${baseUrl}/${path}`
        cy.visit(url)
        cy.wait(3000)
        snapshot(url)
        // Add your test assertions or actions here
      })
    })
  })
})

function getBaseUrl(environment) {
  switch (environment) {
    case 'prod':
      return 'https://deriv.com'
    case 'staging-webflow':
      return 'https://deriv-staged.webflow.io'
    case 'webflow':
      return 'https://webflow.deriv.com/ '
    default:
      throw new Error(`Unsupported environment: ${environment}`)
  }
}


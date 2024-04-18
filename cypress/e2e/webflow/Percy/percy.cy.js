import '@testing-library/cypress/add-commands'

// Load URLs from the JSON file
const urls = require('./url_paths.json')
const webflowbaseUrl = Cypress.env('webflow_env')


function snapshot(fullUrl) {
  cy.viewport(400, 1024)
  cy.scrollTo('bottom', { ensureScrollable: false })
  cy.wait(1000)
  cy.percySnapshot(fullUrl, { width: 400 })
  cy.viewport(1024, 1024)
  cy.scrollTo('bottom', { ensureScrollable: false })
  cy.wait(1000)
  cy.percySnapshot(fullUrl, { width: 1024 })
}


describe('Visit URLs and Capture Percy Snapshots', () => {
  urls.urls.forEach((url) => {
    const fullUrl = `${webflowbaseUrl}${url}`
    it(`Visits ${fullUrl} and captures Percy snapshot`, () => {
      cy.log('WEBFLOW_ENV value:', Cypress.env('webflow_env'))
      cy.visit(fullUrl)
     // if (Cypress.env('webflow_env') === 'staging') {
     //  cy.get('.contact-social_embed.is-whatsapp').should('be.visible', { timeout: 30000 })
     // } else {
     //   cy.c_waitForPageLoad()
     // }
      cy.wait(3000)
      snapshot(fullUrl)
    })
})
})


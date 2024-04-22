import '@testing-library/cypress/add-commands'

// Load URLs from the JSON file
const urls = require('./redirect-paths.json')
const webflowbaseUrl = 'https://webflow.deriv.com/'

function mapUrlForSnapshot(url) {
  if (url === '/') {
    return 'home'
  } else {
    const trimmedUrl = url.replace(/^\/+/, '')
    return trimmedUrl
  }
}
function snapshot(pageName) {
  cy.viewport('iphone-xr')
  cy.scrollTo('bottom', { ensureScrollable: false })
  cy.wait(1000)
  cy.percySnapshot(pageName)
  cy.viewport('macbook-16')
  cy.scrollTo('bottom', { ensureScrollable: false })
  cy.wait(1000)
  cy.percySnapshot(pageName)
}


describe('Visit URLs and Capture Percy Snapshots', () => {
  urls.urls.forEach((url) => {
    let pageName
    const fullUrl = `${webflowbaseUrl}${url}`
    it(`Visits ${fullUrl} and captures Percy snapshot`, () => {
      cy.log('WEBFLOW_ENV value:', Cypress.env('webflow_env'))
      cy.visit(fullUrl)
      cy.wait(3000)
      pageName = mapUrlForSnapshot(url)
      snapshot(pageName)
    })
  })
})
// cypress/integration/visit_and_capture.spec.js

// Load URLs from the JSON file
let urls
if (Cypress.env('webflow_env') === 'staging') {
  //urls = require('cypress/e2e/webflow/Percy/staging_urls.json') // Load stage URLs
  //urls = require('/Users/indu/webflow-e2e-deriv-com/e2e-deriv-com/cypress/e2e/webflow/Percy/staging_urls.json')
  urls = require('./staging_urls.json')
} else {
  // Default to 'prod' URLs if 'stage' is not specified or if 'env' is not set
 // urls = require('/Users/indu/webflow-e2e-deriv-com/e2e-deriv-com/cypress/e2e/webflow/Percy/prod_urls.json') // Load prod URLs
  urls = require('./prod_urls.json')
}
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


describe('Visit URLs and Capture Percy Snapshots', () => {
  urls.urls.forEach((url) => {
    it(`Visits ${url} and captures Percy snapshot`, () => {
      cy.log('WEBFLOW_ENV value:', Cypress.env('webflow_env'))
      // Visit the URL
      cy.visit(url)
      cy.wait(2000)
      cy.get('.loader').should('not.exist') 

      // Take a Percy snapshot
      snapshot(url)
    })
  })
})

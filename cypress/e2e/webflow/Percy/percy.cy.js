import '@testing-library/cypress/add-commands'

// Load URLs from the JSON file
const urls = require('./redirect-paths.json')
const webflowbaseUrl = Cypress.env('webflow_env')

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
  cy.scrollTo('bottom', { ensureScrollable: false, duration: 2000 })
  cy.get('.new-navbar_component-wrapper')
    .eq(0)
    .scrollIntoView({ duration: 2000 })
  cy.percySnapshot(pageName)
  cy.viewport('macbook-16')
  cy.scrollTo('bottom', { ensureScrollable: false, duration: 2000 })
  cy.get('.new-navbar_component-wrapper')
    .eq(0)
    .scrollIntoView({ duration: 2000 })
  cy.percySnapshot(pageName)
}

describe('Visit URLs and Capture Percy Snapshots', () => {
  urls.urls.forEach((url) => {
    let pageName
    const fullUrl = `${webflowbaseUrl}${url}`
    it(`Visits ${fullUrl} and captures Percy snapshot`, () => {
      cy.log('WEBFLOW_ENV value:', Cypress.env('webflow_env'))
      cy.visit(fullUrl)
      pageName = mapUrlForSnapshot(url)
      snapshot(pageName)
    })
  })
})

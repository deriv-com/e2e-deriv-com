import '@testing-library/cypress/add-commands'
import homePage from '../../../support/POM/homePage'

// Load URLs from the JSON file
const urls = require('./redirect-paths.json')
const webflowbaseUrl = Cypress.env('webflow_env')
const webflow = 'webflow'

function mapUrlForSnapshot(url) {
  if (url === '/') {
    return 'home'
  } else {
    const trimmedUrl = url.replace(/^\/+/, '')
    return trimmedUrl
  }
}
function snapshot(pageName,group,fullUrl) {
  cy.viewport('iphone-xr')
  cy.scrollTo('bottom', { ensureScrollable: false, duration: 2000 })
  if (webflowbaseUrl.includes(webflow)&& !fullUrl.includes("404")) {
    cy.get('.new-navbar_component-wrapper')
      .eq(0)
      .scrollIntoView({ duration: 2000 })
      .then(() => {
        cy.wait(1000)
      })
  }
  cy.percySnapshot(pageName, {testcase: group})
  cy.viewport('macbook-16')
  cy.scrollTo('bottom', { ensureScrollable: false, duration: 2000 })
  if (webflowbaseUrl.includes(webflow) && !fullUrl.includes("404")){
    cy.get('.new-navbar_component-wrapper')
      .eq(0)
      .scrollIntoView({ duration: 2000 })
      .then(() => {
        cy.wait(1000)
      })
  }
  cy.percySnapshot(pageName, {testcase: group})
}

describe('Visit URLs and Capture Percy Snapshots', () => {
  urls.urls.forEach((urlObject) => {
    let pageName
    const group = urlObject.value
    const fullUrl = `${webflowbaseUrl}${urlObject.url}`
    it(`Visits ${fullUrl} and captures Percy snapshot`, () => {
      cy.log('WEBFLOW_ENV value:', Cypress.env('webflow_env'))
      cy.visit(fullUrl)
      pageName = mapUrlForSnapshot(urlObject.url)
      snapshot(pageName,group,fullUrl)
    })
  })
})

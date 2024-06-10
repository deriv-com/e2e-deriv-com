import '@testing-library/cypress/add-commands'

// Load URLs from the JSON file
const urls = require('./redirect-paths.json')
const webflowbaseUrl = Cypress.env('webflow_env')
//const webflowbaseUrl = 'https://webflow.deriv.com'
const webflow = 'webflow'

function mapUrlForSnapshot(url) {
  cy.log('the url is' + url)
  if (url === '/') {
    return 'home'
  } else {
    const trimmedUrl = url.replace(/^\/+/, '')
    return trimmedUrl
  }
}

function snapshot(pageName,fullUrl) {
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
  cy.percySnapshot(pageName)
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
  cy.percySnapshot(pageName)
}


describe('Visit URLs and Capture Percy Snapshots', () => {
  cy.log('webflow link is ' + webflowbaseUrl)
  urls.urls.forEach((url) => {
    let pageName
    const fullUrl = `${webflowbaseUrl}${url}`
    it(`Visits ${fullUrl} and captures Percy snapshot`, () => {
      cy.log('WEBFLOW_ENV value:', Cypress.env('webflow_env'))
      cy.visit(fullUrl)
      pageName = mapUrlForSnapshot(url)
      snapshot(pageName,fullUrl)
      cy.log('the url is '+ cy.url)
      if(url.includes('options')){
        const optionsType = Cypress.env('optionsType')
        optionsType.forEach(option => {
          cy.findByRole('tab', { name: option }).click()
          cy.log('clicked on tab' + option)
          pageName = mapUrlForSnapshot(url) + option
          snapshot(pageName,fullUrl)})}
    })
  })
})

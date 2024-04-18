import '@testing-library/cypress/add-commands'
import {
  normalizeUrl,
  verifyRequestLink,
  verifyVisitLink,
} from '../../support/validateLinks'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test on uncaught:exception
  return false
})

let visitTestComplete = false
const testRegion = 'ROW'
const rowUrl = `${normalizeUrl(Cypress.config('baseUrl'))}`
describe('QATEST-96657 - Check URL in deriv.com for ROW', () => {
  before(() => {
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    // The following is for cleaner logs in test
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  })
  it('should visit all deriv Links for region ROW', () => {
    verifyVisitLink(rowUrl, testRegion)
    visitTestComplete = true
  })
  it('should request for all  Links for region ROW', () => {
    verifyRequestLink(testRegion, { visitTestPass: visitTestComplete })
  })
})
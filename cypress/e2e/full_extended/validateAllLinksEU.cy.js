import '@testing-library/cypress/add-commands'
import {
  normalizeUrl,
  verifyVisitLink,
  verifyRequestLink,
} from '../../support/validateLinks'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test on uncaught:exception
  return false
})

let visitTestComplete = false
const testRegion = 'EU'
const euUrl = `${normalizeUrl(Cypress.env('RegionEU'))}`

describe('QATEST-96657 - Check URL in deriv.com for EU', () => {
  before(() => {
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    // The following is for cleaner logs in test
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  })
  it('should visit all deriv Links for region EU', () => {
    verifyVisitLink(euUrl, testRegion)
    visitTestComplete = true
    cy.readFile(
      `cypress/full_extended_results/failedVisitLinks/${testRegion}.json`
    ).then((result) => {
      expect(result).to.have.length(0)
    })
  })
  it('should request for all  Links for region EU', () => {
    verifyRequestLink(testRegion, { visitTestPass: visitTestComplete })
    cy.readFile(
      `cypress/full_extended_results/failedRequestLinks/${testRegion}.json`
    ).then((result) => {
      expect(result).to.have.length(0)
    })
  })
})

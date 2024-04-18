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
const testRegion = 'DIEL'
const dielUrl = `${normalizeUrl(Cypress.config('baseUrl'))}${Cypress.env('RegionDIEL')}`

describe('QATEST-96657 - Check URL in deriv.com for DIEL', () => {
  before(() => {
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    // The following is for cleaner logs in test
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  })
  it('should visit all deriv Links for region DIEL', () => {
    verifyVisitLink(dielUrl, testRegion, { appendRegion: true })
    visitTestComplete = true
  })
  it('should request for all  Links for region DIEL', () => {
    verifyRequestLink(testRegion, { visitTestPass: visitTestComplete })
  })
})

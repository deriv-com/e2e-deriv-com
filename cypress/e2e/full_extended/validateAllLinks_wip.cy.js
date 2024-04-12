import '@testing-library/cypress/add-commands'
import {
  filterLinks,
  getAllLinks,
  isLinkValid,
  normalizeUrl,
  verifyVisitLink,
} from '../../support/validateLinks'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test on uncaught:exception
  return false
})

let linkDetails = {
  toVerify: {
    requestLinks: [],
    visitLinks: [],
  },
  verified: {
    requestLinks: [],
    visitLinks: [],
  },
}

let failedLinks = {
  onVisit: [],
  onRequest: [],
}

describe('QATEST-96657 - Check URL in deriv.com for DIEL', () => {
  before(() => {
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    // The following is for cleaner logs in test
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
  })
  it('should visit all deriv Links for regieon DIEL', () => {
    const dielUrl = `${normalizeUrl(Cypress.config('baseUrl'))}${Cypress.env('RegionDIEL')}`
    linkDetails.toVerify.requestLinks.push(dielUrl)
    linkDetails.toVerify.visitLinks.push(dielUrl)
    verifyVisitLink(dielUrl, linkDetails, { appendRegion: true })

    cy.then(() => {
      cy.log('Links to visit: ', filterLinks(linkDetails.toVerify.visitLinks))
      cy.log(
        'Links to request: ',
        filterLinks(linkDetails.toVerify.requestLinks)
      )
    })
    cy.then(() => {
      cy.log('Links visited: ', filterLinks(linkDetails.verified.visitLinks))
      cy.log(
        'Links requested: ',
        filterLinks(linkDetails.verified.requestLinks)
      )
    })
    cy.then(() => {
      cy.log('Links failed on visit: ', filterLinks(failedLinks.onVisit))
      cy.log('Links failed on request: ', filterLinks(failedLinks.onRequest))
    })
  })
})

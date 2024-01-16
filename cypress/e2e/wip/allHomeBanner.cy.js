import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

describe('QATEST-1315 & 1310 - Validate Hero banner message', () => {
  it('should have correct home banner content', () => {
    const baseUrl = Cypress.config('baseUrl').toLowerCase();
    const urlToMatch = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl

    cy.c_visitResponsive(Cypress.env('RegionROW'))
    homeBanner.elements.bannerForexTxt().should('be.visible')
    homeBanner.elements.bannerCryptoTxt().should('be.visible')
    homeBanner.elements.bannerStockIndicesTxt().should('be.visible')
    homeBanner.elements.bannerDerivedIndicesTxt().should('be.visible')
    homeBanner.elements.createFreeDemoAccount().click()
    cy.url().should('eq', urlToMatch + '/signup/')

  })
})

import '@testing-library/cypress/add-commands'

describe('QATEST-1328 - Live Pricing table EU', () => {
  it('should click on all the 5 different markets and check whether the live pricing table for each is displayed.', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'))
    cy.shouldHaveCorrectMarkets('eu')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - EU desktop.', () => {
    cy.forexViewAll('eu', 'desk')
    cy.derivedIndicesViewAll('eu', 'desk')
    cy.stockIndicesViewAll('eu', 'desk')
    cy.cryptocurrenciesViewAll('eu', 'desk')
    cy.commoditiesViewAll('eu', 'desk')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - EU mobile.', () => {
    cy.forexViewAll('eu', 'mob')
    cy.derivedIndicesViewAll('eu', 'mob')
    cy.stockIndicesViewAll('eu', 'mob')
    cy.cryptocurrenciesViewAll('eu', 'mob')
    cy.commoditiesViewAll('eu', 'mob')
  })
})

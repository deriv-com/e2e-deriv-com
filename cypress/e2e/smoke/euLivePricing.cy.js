import '@testing-library/cypress/add-commands'

describe('QATEST-1328 - Live Pricing table EU', () => {
  it('should click on all the 5 different markets and check whether the live pricing table for each is displayed.', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'))
    cy.c_validateMarkets('eu')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - EU desktop.', () => {
    cy.c_forexViewall('eu', 'desk')
    cy.c_derivedindicesViewall('eu', 'desk')
    cy.c_stockindicesViewall('eu', 'desk')
    cy.c_cryptocurrenciesViewall('eu', 'desk')
    cy.c_commoditiesViewall('eu', 'desk')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - EU mobile.', () => {
    cy.c_forexViewall('eu', 'mob')
    cy.c_derivedindicesViewall('eu', 'mob')
    cy.c_stockindicesViewall('eu', 'mob')
    cy.c_cryptocurrenciesViewall('eu', 'mob')
    cy.c_commoditiesViewall('eu', 'mob')
  })
})

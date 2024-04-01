import '@testing-library/cypress/add-commands'

describe('QATEST-1320 - Live Pricing table ROW', () => {
  it('should click on all the 6 different markets and check whether the live pricing table for each is displayed.', () => {
    cy.c_visitResponsive('', 'desktop')
    cy.c_waitForPageLoad()
    cy.c_validateMarkets('row')
    cy.c_checkBuySellButton()
  })

  it('should click on View All link on all the 6 markets and check whether all instruments for the particular market is displayed - ROW desktop.', () => {
    cy.c_forexViewall('row', 'desk')
    cy.c_derivedindicesViewall('row', 'desk')
    cy.c_stockindicesViewall('row', 'desk')
    cy.c_cryptocurrenciesViewall('row', 'desk')
    cy.c_commoditiesViewall('row', 'desk')
    cy.c_etfViewall('row', 'desk')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW mobile.', () => {
    cy.c_forexViewall('row', 'mob')
    cy.c_derivedindicesViewall('row', 'mob')
    cy.c_stockindicesViewall('row', 'mob')
    cy.c_cryptocurrenciesViewall('row', 'mob')
    cy.c_commoditiesViewall('row', 'mob')
    cy.c_etfViewall('row', 'mob')
  })
})
import '@testing-library/cypress/add-commands'

describe('QATEST-1330 - Check trading spec and Trade now', () => {
  it('should click on trading spec and Trade now button under live pricing table and validate its navigation in mobile.', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
    cy.checkTradingSpecsAndTradeNowButton()
  })

  it('should click on trading spec and Trade now button under live pricing table and validate its navigation in desktop.', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    cy.checkTradingSpecsAndTradeNowButton()
  })
})

describe('QATEST-1320 - Live Pricing table ROW', () => {
  it('should click on all the 5 different markets and check whether the live pricing table for each is displayed.', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    cy.shouldHaveCorrectMarkets('row')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW desktop.', () => {
    cy.forexViewAll('row', 'desk')
    cy.derivedIndicesViewAll('row', 'desk')
    cy.stockIndicesViewAll('row', 'desk')
    cy.cryptocurrenciesViewAll('row', 'desk')
    cy.commoditiesViewAll('row', 'desk')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW mobile.', () => {
    cy.forexViewAll('row', 'mob')
    cy.derivedIndicesViewAll('row', 'mob')
    cy.stockIndicesViewAll('row', 'mob')
    cy.cryptocurrenciesViewAll('row', 'mob')
    cy.commoditiesViewAll('row', 'mob')
  })
})

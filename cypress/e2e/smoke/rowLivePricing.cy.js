import '@testing-library/cypress/add-commands'

describe('QATEST-1330 - Check trading spec and Trade now', () => {
  it('should click on trading spec and Trade now button under live pricing table and validate its navigation in mobile.', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
    cy.check_tradingspecs_and_tradenow_button()
  })

  it('should click on trading spec and Trade now button under live pricing table and validate its navigation in desktop.', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    cy.check_tradingspecs_and_tradenow_button()
  })
})

describe('QATEST-1320 - Live Pricing table ROW', () => {
  it('should click on all the 5 different markets and check whether the live pricing table for each is displayed.', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    cy.validate_markets('row')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW desktop.', () => {
    cy.forex_viewall('row', 'desk')
    cy.derivedindices_viewall('row', 'desk')
    cy.stockindices_viewall('row', 'desk')
    cy.cryptocurrencies_viewall('row', 'desk')
    cy.commodities_viewall('row', 'desk')
  })

  it('should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW mobile.', () => {
    cy.forex_viewall('row', 'mob')
    cy.derivedindices_viewall('row', 'mob')
    cy.stockindices_viewall('row', 'mob')
    cy.cryptocurrencies_viewall('row', 'mob')
    cy.commodities_viewall('row', 'mob')
  })
})

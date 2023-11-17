import '@testing-library/cypress/add-commands'

describe('QATEST-1320 - Live Pricing table ROW', () => {
  
  it('Should click on all the 5 different markets and check whether the live pricing table for each is displayed.', () => {
     cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
     cy.validate_markets('row')
  })
  
  it('Should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW desktop.', () => {
      cy.forex_viewall('row','desk')
      cy.derivedindices_viewall('row','desk')
      cy.stockindices_viewall('row','desk')
      cy.cryptocurrencies_viewall('row','desk')
      cy.commodities_viewall('row','desk')
   })

   it('Should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW mobile.', () => {
    cy.forex_viewall('row','mob')
    cy.derivedindices_viewall('row','mob')
    cy.stockindices_viewall('row','mob')
    cy.cryptocurrencies_viewall('row','mob')
    cy.commodities_viewall('row','mob')
 })
  
})
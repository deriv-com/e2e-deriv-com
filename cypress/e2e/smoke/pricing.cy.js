import '@testing-library/cypress/add-commands'

describe('QATEST-1320 - Live Pricing table ROW', () => {
  
    it('Validate 5 markets are clickable and live pricing table for each is displayed', () => {
       cy.c_visitResponsive(Cypress.env('RegionROW'))
       cy.validate_markets('row');
    })
    
    it('Validate view all for all the 5 markets', () => {
        cy.forex_viewall('row');
        cy.derivedindices_viewall('row');
        cy.stockindices_viewall('row');
        cy.cryptocurrencies_viewall('row');
        cy.commodities_viewall('row');
     })
    
  
  })
  
  describe('QATEST-1328 - Live Pricing table EU', () => {
  
    it('Validate 5 markets are clickable and live pricing table for each is displayed', () => {
       cy.c_visitResponsive(Cypress.env('RegionEU'))
       cy.validate_markets('eu');
    })
    
    it('Validate view all for all the 5 markets', () => {
        cy.forex_viewall('eu');
        cy.derivedindices_viewall('eu');
        cy.stockindices_viewall('eu');
        cy.cryptocurrencies_viewall('eu');
        cy.commodities_viewall('eu');
     })
    
  
  })
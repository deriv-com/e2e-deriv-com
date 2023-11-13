import '@testing-library/cypress/add-commands'


describe('Validate Hero banner message', () => {
  
  it('QATEST-1310 - ROW', () => {
    if (Cypress.env('skipROWTests') == false)
    {
      //TODO - Find out what should be different here otherwise, repeating the same tests seems unnecessary
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      cy.findByTestId('typewriter-wrapper').findByText('Forex').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Cryptocurrencies').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Stocks & indices').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Commodities').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Derived Indices').should('be.visible')
      cy.findByLabelText('create free demo account').click()
      cy.findByRole('heading', { name: 'Sign up' }).should('be.visible')
    }      
  })
})

describe('QATEST-1320 - Live Pricing table ROW', () => {
  
  it('Validate 5 markets are clickable and live pricing table for each is displayed', () => {
     cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
     cy.validate_markets('row');
  })
  
  it('Validate view all for all the 5 markets - ROW desktop', () => {
      cy.forex_viewall('row','desk');
      cy.derivedindices_viewall('row','desk');
      cy.stockindices_viewall('row','desk');
      cy.cryptocurrencies_viewall('row','desk');
      cy.commodities_viewall('row','desk');
   })

   it('Validate view all for all the 5 markets -ROW mobile', () => {
    cy.forex_viewall('row','mob');
    cy.derivedindices_viewall('row','mob');
    cy.stockindices_viewall('row','mob');
    cy.cryptocurrencies_viewall('row','mob');
    cy.commodities_viewall('row','mob');
 })
  
})

describe('QATEST-1328 - Live Pricing table EU', () => {


  it('Validate 5 markets are clickable and live pricing table for each is displayed', () => {
     cy.c_visitResponsive(Cypress.env('RegionEU'))
     cy.validate_markets('eu');
  })
  
  it('Validate view all for all the 5 markets - EU desktop ', () => {
      cy.forex_viewall('eu','desk');
      cy.derivedindices_viewall('eu','desk');
      cy.stockindices_viewall('eu','desk');
      cy.cryptocurrencies_viewall('eu','desk');
      cy.commodities_viewall('eu','desk');
   })

   it('Validate view all for all the 5 markets - EU mobile ', () => {
    cy.forex_viewall('eu','mob');
    cy.derivedindices_viewall('eu','mob');
    cy.stockindices_viewall('eu','mob');
    cy.cryptocurrencies_viewall('eu','mob');
    cy.commodities_viewall('eu','mob');
 })
})
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

describe('QATEST-1328 - Live Pricing table EU', () => {


  it('Should click on all the 5 different markets and check whether the live pricing table for each is displayed.', () => {
     cy.c_visitResponsive(Cypress.env('RegionEU'))
     cy.validate_markets('eu')
  })
  
  it('Should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - EU desktop.', () => {
      cy.forex_viewall('eu','desk')
      cy.derivedindices_viewall('eu','desk')
      cy.stockindices_viewall('eu','desk')
      cy.cryptocurrencies_viewall('eu','desk')
      cy.commodities_viewall('eu','desk')
   })

   it('Should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - EU mobile.', () => {
    cy.forex_viewall('eu','mob')
    cy.derivedindices_viewall('eu','mob')
    cy.stockindices_viewall('eu','mob')
    cy.cryptocurrencies_viewall('eu','mob')
    cy.commodities_viewall('eu','mob')
 })
})
import '@testing-library/cypress/add-commands'


describe('Validate Hero banner message', () => {
  
  it('QATEST-1310 - ROW', () => {
    if (Cypress.env('skipROWTests') == false)
    {
      //TODO - Find out what should be different here otherwise, repeating the same tests seems unnecessary
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      cy.findByTestId('typewriter-wrapper').findByText('Fo').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Cr').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('St').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Co').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('De').should('be.visible')
      cy.findByLabelText('create free demo account').click()
      cy.findByRole('heading', { name: 'Sign up' }).should('be.visible')
    }      
  })
})

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
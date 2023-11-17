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

describe('QATEST-1330 - Check trading spec and Trade now', () => {
  
  it('Should click on trading spec and Trade now button under live pricing table and validate its navigation in mobile.', () => {
      
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'small');
      cy.check_tradingspecs_and_tradenow_button();  
  })

  it('Should click on trading spec and Trade now button under live pricing table and validate its navigation in desktop.', () => {
      
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop');
    cy.check_tradingspecs_and_tradenow_button();
    
  })
})

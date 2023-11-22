import '@testing-library/cypress/add-commands'

describe('QATEST-1310 - Validate Hero banner message ROW', () => {
  it('should have correct home banner content for ROW ', () => {
    if (Cypress.env('skipROWTests') == false) {
      //TODO - Find out what should be different here otherwise, repeating the same tests seems unnecessary
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      cy.findByTestId('typewriter-wrapper')
        .findByText('Forex')
        .should('be.visible')
      cy.findByTestId('typewriter-wrapper')
        .findByText('Cryptocurrencies')
        .should('be.visible')
      cy.findByTestId('typewriter-wrapper')
        .findByText('Stocks & indices')
        .should('be.visible')
      cy.findByTestId('typewriter-wrapper')
        .findByText('Commodities')
        .should('be.visible')
      cy.findByTestId('typewriter-wrapper')
        .findByText('Derived Indices')
        .should('be.visible')
      cy.findByLabelText('create free demo account').click()
      cy.findByRole('heading', { name: 'Sign up' }).should('be.visible')
    }
  })
})

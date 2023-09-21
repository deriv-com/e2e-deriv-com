import '@testing-library/cypress/add-commands'

describe('Trade page', () => {

  it('Validate How can we help search', () => {
    cy.visitResponsive('/trade-types/cfds') //See custome command for details

    if (Cypress.env('isMobile')) {
      cy.findByRole('link', { name: 'Margin calculator' }).click()
      cy.findByRole('heading', { name: 'Margin Calculator', exact: true }).should('be.visible')
    }
    else {
      //todo - NB desktop locators can be different
    }
  })

  //todo - add tests for the remaining sites under Trade.

})
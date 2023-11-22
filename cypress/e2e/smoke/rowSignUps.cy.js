import '@testing-library/cypress/add-commands'

describe('QATEST-1378 - Should validate signup page', () => {

  it('should be able to sign up on a NON-EU website', () => {
    cy.c_visitResponsive('/signup' + String(Cypress.env('RegionROW')));
    cy.validate_signup();
  })

})

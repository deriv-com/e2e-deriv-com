import '@testing-library/cypress/add-commands'

describe('QATEST-1378 - Should validate signup page', () => {

    it('should be able to sign up on a EU website', () => {
      cy.c_visitResponsive('/signup' + String(Cypress.env('RegionEU')));
      cy.validate_signup();
      // EU-specific footer
      cy.findByRole('link', {
        name: '71% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.',
      }).should('be.visible');
    })
  })
import '@testing-library/cypress/add-commands'

describe('Validate signup page', () => {
  const validateSignup = () => {
    cy.findByRole('heading', { name: 'Sign up' }).should('be.visible');
    
    cy.findByPlaceholderText('Email').should('be.visible')
    cy.findByLabelText('I agree to the terms and conditions').should('be.visible')
    cy.contains('button', 'Create demo account').should('be.visible')
    
    cy.findByRole('button', { name: 'Google' }).should('be.visible')
    cy.findByRole('button', { name: 'Facebook' }).should('be.visible')
    cy.findByRole('button', { name: 'Apple' }).should('be.visible')
    
    cy.contains('Already have an account? Log in').should('be.visible')
  };

  it('Validate user can signup non-EU Website', () => {
    cy.c_visitResponsive('/signup' + String(Cypress.env('RegionROW')));
    validateSignup ();
  });

  it('Validate user can signup at EU Website', () => {
    cy.c_visitResponsive('/signup' + String(Cypress.env('RegionEU')));
    validateSignup ();
    // EU-specific footer
    cy.findByRole('link', { name: '71% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.' }).should('be.visible')
  });


  
})

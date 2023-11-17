import '@testing-library/cypress/add-commands'

describe('QATEST-1378 - Should validate signup page', () => {
  const validateSignup = () => {
    cy.findByRole('heading', { name: 'Sign up' }).should('be.visible');
    
    cy.findByPlaceholderText('Email').should('be.visible');
    cy.findByLabelText('I agree to the terms and conditions').should('be.visible');
    cy.contains('button', 'Create demo account').should('be.visible');
    
    cy.findByRole('button', { name: 'Google' }).should('be.visible');
    cy.findByRole('button', { name: 'Facebook' }).should('be.visible');
    cy.findByRole('button', { name: 'Apple' }).should('be.visible');
    
    cy.contains('Already have an account? Log in').should('be.visible');
  };

  it('Should be able to sign up on a NON-EU website', () => {
    cy.c_visitResponsive('/signup' + String(Cypress.env('RegionROW')));
    validateSignup();
  });

  it('Should be able to sign up on a EU website', () => {
    cy.c_visitResponsive('/signup' + String(Cypress.env('RegionEU')));
    validateSignup();
    // EU-specific footer
    cy.findByRole('link', { name: '71% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.' }).should('be.visible');
  });


  
})

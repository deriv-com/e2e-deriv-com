import '@testing-library/cypress/add-commands';

function c_validatePaymentSection()
{
    cy.findByRole('heading', { name: 'Fast, hassle-free deposits and withdrawals' }).should('be.visible')
    cy.findByTestId('fast-payment-container').should('be.visible')
    cy.findByTestId('fast-payment-link').click()
    cy.url().should('include', '/payment-methods/')
}

describe('Validate payment methods section in home page', () => {
    it('should check whether the payment method section is visible and learn more link is working in EU.', () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      c_validatePaymentSection()

    });

    it('should check whether the payment method section is visible and learn more link is working in ROW.', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        c_validatePaymentSection()

      });


  });


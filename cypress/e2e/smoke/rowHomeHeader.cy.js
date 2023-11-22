import '@testing-library/cypress/add-commands'


describe('QATEST-1298 - Home page header menu ROW', () => {

    it('Should be able validate hompage header', () => {
        cy.c_visitResponsive('/' + String(Cypress.env('RegionROW')));
        cy.findByRole('link', { name: 'deriv-logo' }).should('be.visible');
        cy.findByLabelText('EN').should('be.visible');
        
      });

})
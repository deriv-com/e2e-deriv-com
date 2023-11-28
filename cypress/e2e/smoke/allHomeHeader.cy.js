import '@testing-library/cypress/add-commands'


function check_homepage_header (){
    cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible')
    cy.findByRole('link', { name: 'deriv-logo' })
      .should('be.visible').click()
    cy.url().should('include', '/')
    cy.findByText('EN', { exact: true }).should('be.visible')
}

function check_hamburger_menu () {
    cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible').click()
    cy.findByRole('button', { name: 'Trade chevron' }).should('be.visible')
    cy.findByRole('button', { name: 'Markets chevron' }).should('be.visible')
    cy.findByRole('button', { name: 'About us chevron' }).should('be.visible')
    cy.findByRole('button', { name: 'Resources chevron' }).should('be.visible')
    cy.findByRole('button', { name: 'Legal chevron' }).should('be.visible')
    cy.findByRole('button', { name: 'Partners chevron' }).should('be.visible')
    cy.findByRole('img', { name: 'close menu' }).click()
}



describe('QATEST-1298 - should validate home page header menu', () => {
    const regions = ['ROW', 'EU'];

    regions.forEach((region) => {
        it(`should be able validate homepage header for ${region} website`, () => {
            cy.c_visitResponsive(`/${Cypress.env('Region' + region)}`);
            check_homepage_header()
            check_hamburger_menu()
            cy.findByRole('button', { name: 'Log in' }).should('be.visible')
        });
    });
});
import '@testing-library/cypress/add-commands'


describe('QATEST-1304 - Home page header menu EU', () => {

    it('should be able validate hompage header', () => {
        cy.c_visitResponsive('/' + String(Cypress.env('RegionEU')))
        cy.check_homepage_header()
        cy.check_hamburger_menu()
        cy.findByRole('button', { name: 'Log in' }).should('be.visible').click()
        cy.url().should('include', 'signup')
        cy.go('back')
        cy.url().should('include', '/')
      })

})
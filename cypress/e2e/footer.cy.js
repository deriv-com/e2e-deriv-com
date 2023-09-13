describe('Footer', () => {
    it('footer exists for staging.deriv.com', () => {
        let url = Cypress.env('base_url') || 'https://staging.deriv.com'
        cy.visit(url)
        cy.get('footer').should('exist')
    })
})

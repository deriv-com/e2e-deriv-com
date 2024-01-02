class responsiblePage {
    elements = {
        headerTxt: () =>
        cy.findByRole('heading', { name: 'Secure and responsible trading' }),
    }
}

module.exports = new responsiblePage();
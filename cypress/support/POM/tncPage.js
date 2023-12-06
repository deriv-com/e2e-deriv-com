class tncPage {
    elements = {
        headerTxt: () =>
            cy.findByRole('heading', { name: 'Terms and conditions' }),
    }
}

module.exports = new tncPage();
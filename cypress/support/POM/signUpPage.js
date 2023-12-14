class signUpPage {
    elements = {
        headerTxt: () =>
            cy.findByRole('heading', { name: 'Join over 2.5 million traders' }),
        googleButton: () => cy.findByRole('button', { name: 'Google' }),
        facebookButton: () => cy.findByRole('button', { name: 'Facebook' }),
        appleButton: () => cy.findByRole('button', { name: 'Apple' }),
        emailPlaceHolderTxt: () => cy.findByPlaceholderText('Email'),
        tncLink: () => cy.findByRole('link', { name: 'terms and conditions' }),
        createDemoAccountButton: () => cy.findByRole('button', { name: 'Create demo account' }),
        logInTxt: () => cy.findByText('Log in'),
        alreadyHaveAccountTxt: () => cy.contains('Already have an account?')
    }
}

module.exports = new signUpPage();
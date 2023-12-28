class homeBanner {
    elements = {
        forexTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Forex'),
        cryptoTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Cryptocurrencies'),
        stockIndicesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Stocks & indices'),
        commoditiesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Commodities'),
        derivedIndicesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Derived Indices'),
        createFreeDemoAccount: () => cy.findByLabelText('create free demo account'),
        hamBurgerMenu: () => cy.get('[data-cy="hamburger-menu"]').eq(1),
        derivLogo: () => cy.findByRole('navigation'),
        langEnglish: () => cy.findByText('English'),
        tradeMenu: () => cy.findByRole('list').contains('Trade'),
        marketsMenu: () => cy.findByRole('list').contains('Markets'),
        aboutUsMenu: () => cy.findByRole('list').contains('About us'),
        resourcesMenu: () => cy.findByRole('list').contains('Resources'),
        legalMenu: () => cy.findByRole('list').contains('Legal'),
        partnersMenu: () => cy.findByRole('list').contains('Partners'),
        crossIcon: () => cy.get('[class="cursor-pointer"]'),    

    }

}

module.exports = new homeBanner();
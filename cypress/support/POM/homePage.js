class homeBanner {
    elements = {
        forexTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Forex'),
        cryptoTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Cryptocurrencies'),
        stockIndicesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Stocks & indices'),
        commoditiesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Commodities'),
        derivedIndicesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Derived Indices'),
        createFreeDemoAccount: () => cy.findByLabelText('create free demo account'),
        hamBurgerMenu: () => cy.get('[data-cy="mobile-header"]').find('[data-cy="hamburger-menu"]'),
        derivLogo: () =>   cy.get('[data-cy="mobile-header"]').find('[data-cy="deriv-logo"]'),
        langEnglish: () => cy.findByText('English'),
        tradeMenu: () => cy.findByRole('navigation').contains('Trade'),
        marketsMenu: () => cy.findByRole('navigation').contains('Markets'),
        aboutUsMenu: () => cy.findByRole('navigation').contains('About us'),
        resourcesMenu: () => cy.findByRole('navigation').contains('Resources'),
        legalMenu: () => cy.findByRole('navigation').contains('Legal'),
        partnersMenu: () => cy.findByRole('navigation').contains('Partners'),
        crossIcon: () => cy.get('[data-cy="nav-cross-icon"]'),
        cfdMenu: () => cy.findAllByRole('link', { name: 'CFDs' }),
        cfdHeading: () => cy.findAllByRole('heading', { name: 'CFD trading' }),
        optionsMenu: () => cy.findAllByRole('link', { name: 'Options' }),
        multiplierMenu: () => cy.findAllByRole('link', { name: 'Multipliers' }),
        mt5Link: () => cy.findAllByRole('link', { name: 'Deriv MT5' }),
        derivxLink: () => cy.findAllByRole('link', { name: 'Deriv X' }),
        smartTraderLink: () => cy.findAllByRole('link', { name: 'SmartTrader' }),
        BinaryBotLink: () => cy.findAllByRole('link', { name: 'Binary Bot' }),
        cTraderLink: () => cy.findAllByRole('link', { name: 'Deriv cTrader' }),
        derivGo: () => cy.findAllByRole('link', { name: 'Deriv GO' }),
        derivBot: () => cy.findAllByRole('link', { name: 'Deriv Bot' }),
        etfLink: () => cy.findAllByRole('link', { name: 'Exchange-traded funds (ETFs)' }),
        derivPrime: () => cy.findAllByRole('link', { name: 'Deriv Prime' }),
        affiliatesIbs: () => cy.findAllByRole('link', { name: 'Affiliates and IBs' }),
        paymentAgent: () => cy.findAllByRole('link', { name: 'Payment agents' }),
        apiLink: () => cy.findAllByRole('link', { name: 'API' }),
    }

}

module.exports = new homeBanner();
class homeBanner {
    elements = {
        forexTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Forex'),
        cryptoTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Cryptocurrencies'),
        stockIndicesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Stocks & indices'),
        commoditiesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Commodities'),
        derivedIndicesTxt: () => cy.findByTestId('typewriter-wrapper').findByText('Derived Indices'),
        createFreeDemoAccount: () => cy.findByLabelText('create free demo account'),

    }
}

module.exports = new homeBanner();
class footerEuPage {
    elements = {
        footerLogo: () => cy.findByRole('img', { name: "deriv logo image" }),
        footerFaceBookLogo: () => cy.findByRole('img', { name: "_t_Facebook_t_" }),
        footerInstagramLogo: () => cy.findByRole('img', { name: '_t_Instagram_t_' }),
        footerTwitterLogo: () => cy.findByRole('img', { name: '_t_Twitter_t_' }),
        footerYoutubeLogo: () => cy.findByRole('img', { name: '_t_Youtube_t_' }),
        footerLinkedInLogo: () => cy.findByRole('img', { name: '_t_Linkedin_t_' }),
        hamburgerMenu: () => cy.findByRole('img', { name: 'hamburger menu' }),
        aboutUsMenu: () => cy.findByRole('button', { name: 'About us chevron' }),
        whoWeAreLink: () => cy.findByRole('link', { name: 'Who we are' }),
        whyChooseUsLink: () => cy.findByRole('link', { name: 'Why choose us' }),
        partnershipProgrammesLink: () => cy.findByRole('link', { name: 'Partnership programmes' }),
        contactUsLink: () => cy.findByRole('link', { name: 'Contact us' }),
        careersLink: () => cy.findByRole('link', { name: 'Careers' }),
        derivLifeLink: () => cy.findByRole('link', { name: 'Deriv life' }),
        whoWeArePageText: () => cy.findByRole('heading', { name: 'Who we are' }),
        whyChooseUsPageText: () => cy.findByRole('heading', { name: 'Why choose us' }),
        partnershipProgrammesPageText: () => cy.findByRole('heading', { name: 'Deriv partnership programmes' }),
        contactUsPageText: () => cy.findByRole('heading', { name: 'Contact us' }),
        careersPageText: () => cy.findByRole('heading', { name: 'Join and grow with us.' }),
        derivLifePageText: () => cy.findByRole('heading', { name: 'Global reach, local touch' }),
        // derivLifePageText: () => cy.get('.title-content-homepage'),
        tradeMenu: () => cy.findByRole('button', { name: 'Trade chevron' }),
        cFDLink: () => cy.findByRole('link', { name: 'CFDs trade type CFDs Trade with leverage and tight spreads for better returns on successful trades.' }),
        cFDPageText: () => cy.findByRole('heading', { name: 'CFD trading' }),
        multipliersLink: () => cy.findByRole('img', { name: 'Multipliers trade type' }),
        multipliersPageText: () => cy.findByRole('heading', { name: 'Multipliers', exact: true }),
        marketsMenu: () => cy.findByRole('heading', { name: 'Markets chevron' }),
        forexLink: () => cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }),
        forexPageText: () => cy.findByRole('heading', { name: 'Forex', exact: true }),
        derivedIndicesLink: () => cy.findByRole('link', { name: 'Synthetic indices Derived indices Enjoy trading asset prices derived from simulated markets.' }),
        derivedIndicesPageText: () => cy.findByRole('heading', { name: 'Derived indices' }),
        stocksAndIndicesLink: () => cy.findByRole('link', { name: 'Stocks & indices Stocks & indices Predict broader market trends and diversify your risk with stocks & indices.' }),
        stockAndIndicesPageText: () => cy.findByRole('heading', { name: 'Stocks & indices', exact: true }),
        commoditiesLink: () => cy.findByRole('link', { name: 'Commodities Commodities Trade natural resources that are central to the world\'s economy.' }),
        commoditiesPageLink: () => cy.findByRole('heading', { name: 'Commodities', exact: true }),
        cryptoCurrenciesLink: () => cy.findByRole('link', { name: 'Cryptocurrencies Cryptocurrencies Trade with leverage on the price movement of popular crypto-fiat pairs.' }),
        cryptoCurrenciesPageText: () => cy.findByRole('heading', { name: 'Cryptocurrencies', exact: true }),
        eTFsLink: () => cy.findByRole('link', { name: 'Exchange-traded funds (ETFs) Exchange-traded funds (ETFs) Diversify your portfolio and enjoy low-cost intraday trading with ETFs.' }),
        eTFsPageText: () => cy.findByRole('heading', { name: 'Exchange-traded funds' }),
    }
    externalEUURls = {
        facebookEU: 'https://www.facebook.com/derivEU/',
        instagramEU: 'https://www.instagram.com/deriv_eu/',
        twitterEU: 'https://www.twitter.com/deriv_eu/',
        youtubeEU: 'https://www.youtube.com/@deriv',
        linkedInEU: 'https://www.linkedin.com/company/derivdotcom/',
        derivlifeExpected: 'https://derivlife.com/',
    }
    areSocialLinksVisible() {
        this.elements.footerFaceBookLogo().should('be.visible');
        this.elements.footerInstagramLogo().should('be.visible');
        this.elements.footerTwitterLogo().should('be.visible');
        this.elements.footerYoutubeLogo().should('be.visible');
        this.elements.footerLinkedInLogo().should('be.visible');
    }
    areAboutUsLinksVisible() {
        this.elements.aboutUsMenu().should('be.visible');
        this.elements.whoWeAreLink().should('be.visible');
        this.elements.whyChooseUsLink().should('be.visible');
        this.elements.partnershipProgrammesLink().should('be.visible');
        this.elements.contactUsLink().should('be.visible');
        this.elements.derivLifeLink().should('be.visible');
    }
    areTradeMenuLinkVisible() {
        this.elements.tradeMenu().should('be.visible');
        this.elements.cFDLink().should('be.visible');
        this.elements.multipliersLink().should('be.visible');
    }
    areMarketLinksVisible() {
        this.elements.marketsMenu().should('be.visible');
        this.elements.forexLink().should('be.visible');
        this.elements.derivedIndicesLink().should('be.visible');
        this.elements.stocksAndIndicesLink().should('be.visible');
        this.elements.commoditiesLink().should('be.visible');
        this.elements.cryptoCurrenciesLink().should('be.visible');
        this.elements.eTFsLink().should('be.visible');
    }
    areSocialLinksCorrect(socialLink, socialWebsiteUrl) {
        socialLink().click()
        cy.findByRole('alertdialog', { name: 'Redirect notice' })
            .should('be.visible');
        cy.findByRole('alertdialog')
            .findByText('You are being redirected to an external website.')
            .should('be.visible');
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.findByRole('button', { name: 'Proceed' }).click();
        cy.reload();
        cy.get('@windowOpen').should('be.calledWith', socialWebsiteUrl);
    }
}
module.exports = new footerEuPage();
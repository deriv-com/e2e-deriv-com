class footerEuPage {
    elements = {
        footerLogo: () => cy.findByRole('img', { name: "deriv logo image" }),
        proceedButton: () => cy.findByRole('button', { name: 'Proceed' }),
        alertDialog: () => cy.findByRole('alertdialog', { name: 'Redirect notice' }),
        alertRedirectMessage: () => cy.findByRole('alertdialog')
            .findByText('You are being redirected to an external website.'),
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
        tradeMenu: () => cy.findByRole('button', { name: 'Trade chevron' }),
        cFDLink: () => cy.findByRole('link', { name: 'CFDs trade type CFDs Trade with leverage and tight spreads for better returns on successful trades.' }),
        cFDPageText: () => cy.findByRole('heading', { name: 'CFD trading' }),
        multipliersLink: () => cy.findByRole('img', { name: 'Multipliers trade type' }),
        multipliersPageText: () => cy.findByRole('heading', { name: 'Multipliers', exact: true }),
        marketsMenu: () => cy.findByRole('button', { name: 'Markets chevron' }),
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
        derivMT5Link: () => cy.findByRole('link', { name: 'Deriv MT5 trading platform Deriv MT5 Trade on Deriv MT5, the all-in-one CFD trading platform.' }),
        derivMT5PageText: () => cy.findByRole('heading', { name: 'The all-in-one CFD trading platform' }),
        derivTraderLink: () => cy.findByRole('link', { name: 'Deriv trader trading platform Deriv Trader A whole new trading experience on a powerful yet easy to use platform.' }),
        dTraderlogo: () => cy.findByRole('img', { name: 'Deriv Trader' }),
        legalMenu: () => cy.findByRole('button', { name: 'Legal chevron' }),
        regulatoryInformationLink: () => cy.findByRole('link', { name: 'Regulatory information' }),
        regulatoryInformationPageText: () => cy.findByRole('heading', { name: 'Regulatory information' }),
        termsAndConditionsLink: () => cy.findByLabelText('Legal').findByRole('link', { name: 'Terms and conditions' }),
        footerTermsAndConditionLink: () => cy.findByRole('link', {name: 'Terms and conditions'}),
        termsAndConditionsPageText: () => cy.findByRole('heading', { name: 'Terms and conditions' }),
        secureAndResponsibleTradingLink: () => cy.findByLabelText('Legal').findByRole('link', { name: 'Secure and responsible trading' }),
        secureAndResponsibleTradingPageText: () => cy.findByRole('heading', { name: 'Secure and responsible trading' }),
        footerSecureAndRespTradingLink: () => cy.findByRole('link' , {name: 'Secure and responsible trading'}),
        partnersMenu: () => cy.findByRole('button', { name: 'Partners chevron' }),
        derivPrimeLink: () => cy.findByRole('link', { name: 'Deriv Prime' }),
        derivPrimePageText: () => cy.findByRole('heading', { name: 'Global liquidity for all' }),
        affiliatesLink: () => cy.findByRole('link', { name: 'Affiliates' }),
        affiliatesPageText: () => cy.findByRole('heading', { name: 'Partner with a trusted online trading provider' }),
        aPILink: () => cy.findByRole('link', { name: 'API', exact: true }),
        aPIPageText: () => cy.findByRole('heading', { name: 'Deriv API' }),
        resourcesMenu: () => cy.findByRole('button', { name: 'Resources chevron' }),
        helpCenterLink: () => cy.findByRole('link', { name: 'Help centre' }),
        helpCenterPage: () => cy.findByRole('heading', { name: 'How can we help?' }),
        communityLink: () => cy.findByRole('link', { name: 'Community' }),
        communityPapageText: () => cy.findByRole('heading', { name: 'Welcome to our community' }),
        tradersToolLink: () => cy.findByRole('link', { name: 'Traders’ tools' }),
        paymentMethodLink: () => cy.findByRole('link', { name: 'Payment methods' }),
        derivMT5SignalLink: () => cy.findByRole('link', { name: 'Deriv MT5 Signals' }),
        statusPagelLink: () => cy.findByRole('link', { name: 'Status page' }),
        derivBlogLink: () => cy.findByRole('link', { name: 'Deriv Blog' }),
        footerEUlicence: () => cy.findByRole('link', { name: '(licence)' }),
        footerRiskDisclosureLink: () => cy.findByRole('link', { name: 'Risk disclosure' }),
        cookiesEUAcceptButton: () => cy.findByRole('button', {name: 'Accept'}),
        cFDFloatingBannerLink: () => cy.findByRole('link' , {name: '71% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.'}),
    }
    socialMediaLinks = {
        footerFaceBookLogo: () => cy.findByRole('img', { name: "_t_Facebook_t_" }),
        footerInstagramLogo: () => cy.findByRole('img', { name: '_t_Instagram_t_' }),
        footerTwitterLogo: () => cy.findByRole('img', { name: '_t_Twitter_t_' }),
        footerYoutubeLogo: () => cy.findByRole('img', { name: '_t_Youtube_t_' }),
        footerLinkedInLogo: () => cy.findByRole('img', { name: '_t_Linkedin_t_' }),
    }
    eUPDFs = {
        EUlicencePDF: '/regulatory/Deriv_Investments_(Europe)_Limited.pdf',
        EURiskDiscPDF: '/tnc/eu/risk-disclosure.pdf',
    }
    areSocialLinksVisible() {
        this.socialMediaLinks.footerFaceBookLogo().should('be.visible');
        this.socialMediaLinks.footerInstagramLogo().should('be.visible');
        this.socialMediaLinks.footerTwitterLogo().should('be.visible');
        this.socialMediaLinks.footerYoutubeLogo().should('be.visible');
        this.socialMediaLinks.footerLinkedInLogo().should('be.visible');
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
    arePlatformLinksVisible() {
        this.elements.derivMT5Link().should('be.visible');
        this.elements.derivTraderLink().should('be.visible');
    }
    areLegalLinksVisible() {
        this.elements.regulatoryInformationLink().should('be.visible');
        this.elements.termsAndConditionsLink().should('be.visible');
        this.elements.secureAndResponsibleTradingLink().should('be.visible');
    }
    arePartnersLinkVisible() {
        this.elements.derivPrimeLink().should('be.visible');
        this.elements.affiliatesLink().should('be.visible');
        this.elements.aPILink().should('be.visible');
    }
    areSocialLinksCorrect(socialLink, socialWebsiteUrl) {
        socialLink().click()
        this.elements.alertDialog().should('be.visible');
        this.elements.alertRedirectMessage().should('be.visible');
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
        this.elements.proceedButton().click();
        cy.reload();
        cy.get('@windowOpen').should('be.calledWith', socialWebsiteUrl);
    }
    clickHamburgerMenu() {
        this.elements.hamburgerMenu().click({ force: true });
    }
}
module.exports = new footerEuPage();
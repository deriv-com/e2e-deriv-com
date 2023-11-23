import '@testing-library/cypress/add-commands'
import footerEuPage, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonPage';
describe('QATEST- Footer ROW Responsive', () => {
    beforeEach(() => {
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
    });

    it('should verify deriv logo and social media icons.', () => {
        footerEuPage.elements.footerLogo().should('be.visible');
        footerEuPage.areSocialLinksVisible();
    });
    const externalURLs = Cypress.config('externalUrls');
    const externalSocialURLs = Cypress.config('externalSocialUrls');

    it.only('should open and verify all footer social media links.', () => {

        const socialMediaLinks = [
            { name: 'Facebook', func: footerEuPage.socialMediaLinks.footerFaceBookLogo, expectedUrl: externalSocialURLs.facebookRow },
            { name: 'Twitter', func: footerEuPage.socialMediaLinks.footerTwitterLogo, expectedUrl: externalSocialURLs.twitterRow },
            { name: 'Instagram', func: footerEuPage.socialMediaLinks.footerInstagramLogo, expectedUrl: externalSocialURLs.instagramRow },
            { name: 'LinkedIn', func: footerEuPage.socialMediaLinks.footerLinkedInLogo, expectedUrl: externalSocialURLs.linkedInDeriv },
            { name: 'Youtube', func: footerEuPage.socialMediaLinks.footerYoutubeLogo, expectedUrl: externalSocialURLs.youtubeDeriv },
             ];
        socialMediaLinks.forEach((socialMedia) => {
            socialMedia.func().then(($el) => {
                socialMedia.func().invoke('removeAttr', 'target').click();
                const linkHref = $el.attr('href');
                cy.wrap(linkHref).should('eq', socialMedia.expectedUrl);
            });
            cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
        });
    });

    it('should open about us menu and verify whoWeAre and WhyChooseUs.', () => {
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.aboutUsMenu().click();
        footerEuPage.areAboutUsLinksVisible();
        footerEuPage.elements.whoWeAreLink().click();
        footerEuPage.elements.whoWeArePageText().should('be.visible');
        footerEuPage.elements.whyChooseUsLink().click();
        footerEuPage.elements.whyChooseUsPageText().should('be.visible');
    });

    it('should open about us menu and verify partnershipProgrammes.', () => {
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.aboutUsMenu().click();
        footerEuPage.elements.partnershipProgrammesLink().click({ force: true });
        footerEuPage.elements.partnershipProgrammesPageText().should('be.visible');
    });

    it('should open about us menu and verify contact us and careers links. ', () => {
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.aboutUsMenu().click();
        footerEuPage.elements.contactUsLink().click();
        footerEuPage.elements.contactUsPageText().should('be.visible');
        //principle link code needs to be there after fix
        footerEuPage.elements.careersLink().click();
        footerEuPage.elements.careersPageText().should('be.visible');
    });

    it('should open about us menu and verify derivlife.', () => {
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.aboutUsMenu().click();
        footerEuPage.elements.derivLifeLink()
            .then(($el) => {
                footerEuPage.elements.derivLifeLink().invoke('removeAttr', 'target').click();
                const derivLife = $el.attr('href');
                cy.wrap(derivLife).should('eq', externalURLs.derivlifeURL);
            })
    });

    it('should open trade type menu and verify all links.', () => {
        footerEuPage.elements.hamburgerMenu().click();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.areTradeMenuLinkVisible();
        footerEuPage.elements.cfdLink().click();
        footerEuPage.elements.cfdPageText().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.optionsLink().click();
        footerEuPage.elements.optionsPageText().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.multipliersLink().click();
        footerEuPage.elements.multipliersPageText().should('be.visible');
    });

    it('should open market menu and verify links.', () => {
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.marketsMenu().click();
        footerEuPage.areMarketLinksVisible();
        footerEuPage.elements.forexLink().click();
        footerEuPage.elements.forexPageText().should('be.visible');
        footerEuPage.elements.derivedIndicesLink().click();
        footerEuPage.elements.derivedIndicesPageText().should('be.visible');
        footerEuPage.elements.stocksAndIndicesLink().click();
        footerEuPage.elements.stockAndIndicesPageText().should('be.visible');
    }),

    it('should open market menu and verify all of the links.', () => {
        footerEuPage.elements.hamburgerMenu().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.marketsMenu().click({ force: true });
        footerEuPage.elements.commoditiesLink().should('be.visible');
        footerEuPage.elements.commoditiesLink().click({ force: true });
        footerEuPage.elements.commoditiesPageLink().should('be.visible');
        footerEuPage.elements.hamburgerMenu().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.marketsMenu().click();
        footerEuPage.elements.cryptoCurrenciesLink().click();
        footerEuPage.elements.cryptoCurrenciesPageText().should('be.visible');
        footerEuPage.elements.hamburgerMenu().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.marketsMenu().click();
        footerEuPage.elements.etfsLink().click();
        footerEuPage.elements.etfsPageText().should('be.visible');    
        });

    it('should open platform menu and verify derivMT5, derivX, derivTrader and smartTrader links.', () => {
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.derivMT5Link().click();
        footerEuPage.elements.derivMT5PageText().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.derivXLink().click();
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.derivTraderLink().click();
        footerEuPage.elements.dTraderlogo().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.smartTraderLink()
            .then(($el) => {
                footerEuPage.elements.smartTraderLink().invoke('removeAttr', 'target').click();
                const smartTrader = $el.attr('href');
                cy.wrap(smartTrader).should('eq', externalURLs.smartTraderURL);
        });
    });
    it('should open platform and verify all links.', () => {
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.derivcTraderLink().click(); 
        footerEuPage.elements.derivcTraderPgaeText().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.derivBotLink().click();
        footerEuPage.elements.derivBotPageText().should('be.visible');
        footerEuPage.clickHamburgerMenu();
        footerEuPage.elements.tradeMenu().click();
        footerEuPage.elements.derivBinaryBotLink()
            .then(($el) => {
                footerEuPage.elements.derivBinaryBotLink().invoke('removeAttr', 'target').click();
                const derivBinaryBot = $el.attr('href');
                cy.wrap(derivBinaryBot).should('eq', externalURLs.binaryBotURL)
        });

    

});
});
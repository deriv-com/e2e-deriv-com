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

    it('should open and verify all footer social media links.', () => {

        const socialMediaLinks = [
            { name: 'Facebook', func: footerEuPage.socialMediaLinks.footerFaceBookLogo, expectedUrl: externalSocialURLs.facebookRow },
            { name: 'Instagram', func: footerEuPage.socialMediaLinks.footerInstagramLogo, expectedUrl: externalSocialURLs.instagramRow },
            { name: 'Twitter', func: footerEuPage.socialMediaLinks.footerTwitterLogo, expectedUrl: externalSocialURLs.twitterRow },
            // { name: 'Youtube', func: footerEuPage.socialMediaLinks.footerYoutubeLogo, expectedUrl: externalSocialURLs.youtubeDeriv },
            { name: 'LinkedIn', func: footerEuPage.socialMediaLinks.footerLinkedInLogo, expectedUrl: externalSocialURLs.linkedInDeriv },
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
});
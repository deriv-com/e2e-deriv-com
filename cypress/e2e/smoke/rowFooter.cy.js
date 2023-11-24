import '@testing-library/cypress/add-commands'
import commonPage, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonPage';
describe('QATEST- Footer ROW Responsive', () => {
    beforeEach(() => {
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
    });

    it('should verify deriv logo and social media icons.', () => {
        commonPage.elements.footerLogo().should('be.visible');
        commonPage.areSocialLinksVisible();
    });
    const externalURLs = Cypress.config('externalUrls');
    const externalSocialURLs = Cypress.config('externalSocialUrls');

    it('should open and verify all footer social media links.', () => {
        const socialMediaLinks = [
            {
                name: 'Facebook', func: commonPage.socialMediaLinks.footerFaceBookLogo, expectedUrl: externalSocialURLs.facebookRow
            },
            {
                name: 'Twitter', func: commonPage.socialMediaLinks.footerTwitterLogo, expectedUrl: externalSocialURLs.twitterRow
            },
            {
                name: 'Instagram', func: commonPage.socialMediaLinks.footerInstagramLogo, expectedUrl: externalSocialURLs.instagramRow
            },
            {
                name: 'LinkedIn', func: commonPage.socialMediaLinks.footerLinkedInLogo, expectedUrl: externalSocialURLs.linkedInDeriv
            },
            {
                name: 'Youtube', func: commonPage.socialMediaLinks.footerYoutubeLogo, expectedUrl: externalSocialURLs.youtubeDeriv
            },
        ];
        socialMediaLinks.forEach((socialMedia) => {
            socialMedia.func().then(($el) => {
                socialMedia.func().invoke('removeAttr', 'target').then(() => {
                    const linkHref = $el.attr('href');
                    if (socialMedia.name === 'Youtube') {
                        if (linkHref.includes('youtube.com')) {
                            $el.click();
                        }
                    } else {
                        socialMedia.func().invoke('removeAttr', 'target').click();
                    }
                    cy.wrap(linkHref).should('eq', socialMedia.expectedUrl);
                });
            });
            cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
        });
    });

    it('should open about us menu and verify whoWeAre and WhyChooseUs.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.aboutUsMenu().click();
        commonPage.areAboutUsLinksVisible();
        commonPage.elements.whoWeAreLink().click();
        commonPage.elements.whoWeArePageText().should('be.visible');
        commonPage.elements.whyChooseUsLink().click();
        commonPage.elements.whyChooseUsPageText().should('be.visible');
    });

    it('should open about us menu and verify partnershipProgrammes.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.aboutUsMenu().click();
        commonPage.elements.partnershipProgrammesLink().click({ force: true });
        commonPage.elements.partnershipProgrammesPageText().should('be.visible');
    });

    it('should open about us menu and verify contact us and careers links. ', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.aboutUsMenu().click();
        commonPage.elements.contactUsLink().click();
        commonPage.elements.contactUsPageText().should('be.visible');
        //principle link code needs to be there after fix
        commonPage.elements.careersLink().click();
        commonPage.elements.careersPageText().should('be.visible');
    });

    it('should open about us menu and verify derivlife.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.aboutUsMenu().click();
        commonPage.elements.derivLifeLink()
            .then(($el) => {
                commonPage.elements.derivLifeLink().invoke('removeAttr', 'target').click();
                const derivLife = $el.attr('href');
                cy.wrap(derivLife).should('eq', externalURLs.derivlifeURL);
            })
    });

    it('should open trade type menu and verify all links.', () => {
        commonPage.elements.hamburgerMenu().click();
        commonPage.elements.tradeMenu().click();
        commonPage.areTradeMenuLinkVisible();
        commonPage.elements.cfdLink().click();
        commonPage.elements.cfdPageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.optionsLink().click();
        commonPage.elements.optionsPageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.multipliersLink().click();
        commonPage.elements.multipliersPageText().should('be.visible');
    });

    it('should open market menu and verify links.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.marketsMenu().click();
        commonPage.areMarketLinksVisible();
        commonPage.elements.forexLink().click();
        commonPage.elements.forexPageText().should('be.visible');
        commonPage.elements.derivedIndicesRowLink().click();
        commonPage.elements.derivedIndicesPageText().should('be.visible');
        commonPage.elements.stocksAndIndicesLink().click();
        commonPage.elements.stockAndIndicesPageText().should('be.visible');
    }),

        it('should open market menu and verify all of the links.', () => {
            commonPage.elements.hamburgerMenu().should('be.visible');
            commonPage.clickHamburgerMenu();
            commonPage.elements.marketsMenu().click({ force: true });
            commonPage.elements.commoditiesLink().should('be.visible');
            commonPage.elements.commoditiesLink().click({ force: true });
            commonPage.elements.commoditiesPageLink().should('be.visible');
            commonPage.elements.hamburgerMenu().should('be.visible');
            commonPage.clickHamburgerMenu();
            commonPage.elements.marketsMenu().click();
            commonPage.elements.cryptoCurrenciesLink().click();
            commonPage.elements.cryptoCurrenciesPageText().should('be.visible');
            commonPage.elements.hamburgerMenu().should('be.visible');
            commonPage.clickHamburgerMenu();
            commonPage.elements.marketsMenu().click();
            commonPage.elements.etfsLink().click();
            commonPage.elements.etfsPageText().should('be.visible');
        });

    it('should open platform menu and verify derivMT5, derivX, derivTrader and smartTrader links.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.derivMT5Link().click();
        commonPage.elements.derivMT5PageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.derivXLink().click();
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.derivTraderLink().click();
        commonPage.elements.dTraderlogo().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.smartTraderLink()
            .then(($el) => {
                commonPage.elements.smartTraderLink().invoke('removeAttr', 'target').click();
                const smartTrader = $el.attr('href');
                cy.wrap(smartTrader).should('eq', externalURLs.smartTraderURL);
            });
    });

    it('should open platform and verify all links.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.derivcTraderLink().click();
        commonPage.elements.derivcTraderPgaeText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.derivBotLink().click();
        commonPage.elements.derivBotPageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.tradeMenu().click();
        commonPage.elements.derivBinaryBotLink()
            .then(($el) => {
                commonPage.elements.derivBinaryBotLink().invoke('removeAttr', 'target').click();
                const derivBinaryBot = $el.attr('href');
                cy.wrap(derivBinaryBot).should('eq', externalURLs.binaryBotURL)
            });
    });

    it('should open resources/support menu and verify help center and community links.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.resourcesMenu().click();
        commonPage.elements.helpCenterLink().click();
        commonPage.elements.helpCenterPage().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.resourcesMenu().click();
        commonPage.elements.tradersToolLink().click();
        commonPage.elements.tradersToolPageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.resourcesMenu().click();
        commonPage.elements.communityLink().invoke('removeAttr', 'target').click();
    });

    it('should open resource/support menu and verify status page.', () => {
        commonPage.elements.hamburgerMenu().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.resourcesMenu().click();
        commonPage.elements.statusPagelLink().click();
    });

    it('should open resources/support menu and derivMT5 signal and deriv blog links.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.resourcesMenu().click();
        commonPage.elements.derivMT5SignalLink().click();
        commonPage.elements.hamburgerMenu().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.resourcesMenu().click();
        commonPage.elements.derivBlogLink()
            .then(($el) => {
                commonPage.elements.derivBlogLink().invoke('removeAttr', 'target').click();
                const derivBlog = $el.attr('href');
                cy.wrap(derivBlog).should('eq', externalURLs.derivBlogURL);
            })
    });

    it('should open legal menu and verify all links.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.legalMenu().click();
        commonPage.elements.regulatoryInformationLink().click();
        commonPage.elements.regulatoryInformationPageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.legalMenu().click();
        commonPage.elements.secureAndResponsibleTradingLink().click();
        commonPage.elements.secureAndResponsibleTradingPageText().should('be.visible');
        commonPage.elements.termsAndConditionsLink().click();
        commonPage.elements.termsAndConditionsPageText().should('be.visible');
    });

    it('should open partners menu and verify all links.', () => {
        commonPage.clickHamburgerMenu();
        commonPage.elements.partnersMenu().click();
        commonPage.elements.derivPrimeLink().click();
        commonPage.elements.derivPrimePageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.paymentAgentLink().click();
        commonPage.elements.paymentAgentPageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.affiliatesIBLink().click();
        commonPage.elements.affiliatesPageText().should('be.visible');
        commonPage.clickHamburgerMenu();
        commonPage.elements.aPILink()
            .then(($ele) => {
                commonPage.elements.aPILink().invoke('removeAttr', 'target').click();
                const aPILink = $ele.attr('href');
                cy.request(aPILink).its('status').should('eq', 200);
            });
    });

    it('should verify all ROW footer Licences.', () => {
        const licences = [
            commonPage.elements.derivFxLicence(),
            commonPage.elements.derivVLicence(),
            commonPage.elements.derivBVILicence()
        ];
        licences.forEach(element => {
            element.invoke('attr', 'href').then(href => {
                cy.request(href).then(pdf => {
                    cy.request(href).its('status').should('eq', 200);
                });
            });
        });
    });

    it('should open and verify below footer links.', () => {
        commonPage.elements.footerTermsAndConditionLink().click();
        commonPage.elements.termsAndConditionsPageText().should('be.visible');
        commonPage.elements.footerSecureAndRespTradingLink().click();
        commonPage.elements.secureAndResponsibleTradingPageText().should('be.visible');
        commonPage.elements.footerRiskDisclosureLink().should('be.visible');
        commonPage.elements.footerRiskDisclosureLink().invoke('attr', 'href').and('include', commonPage.rowPdfs.rowRiskDiscPdf)
            .then(href => {
                cy.request(href).then(pdf => {
                    cy.request(href).its('status').should('eq', 200);
                });
            });
    });
});

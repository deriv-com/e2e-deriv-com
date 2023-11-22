import '@testing-library/cypress/add-commands'
import footerEuPage, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonEuPage';
describe('QATEST- Footer ROW Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')

  });

  it('Should verify deriv logo and social media icons.', () => {
    footerEuPage.elements.footerLogo().should('be.visible');
    footerEuPage.areSocialLinksVisible();
  });
  const externalURLs = Cypress.config('externalUrls');
  const externalSocialURLs = Cypress.config('externalSocialUrls');

  it.only('Should open and verify all footer social media links.', () => {

    const socialMediaLinks = [
      { name: 'Facebook', func: footerEuPage.socialMediaLinks.footerFaceBookLogo, expectedUrl: externalSocialURLs.facebookROW },
     { name: 'Instagram', func: footerEuPage.socialMediaLinks.footerInstagramLogo, expectedUrl: externalSocialURLs.instagramROW},
      { name: 'Twitter', func: footerEuPage.socialMediaLinks.footerTwitterLogo, expectedUrl: externalSocialURLs.twitterROW },
     // { name: 'Youtube', func: footerEuPage.socialMediaLinks.footerYoutubeLogo, expectedUrl: externalSocialURLs.youtubeROW },
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

  it.only('Should open about us menu and verify whoWeAre and WhyChooseUs.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.areAboutUsLinksVisible();
    footerEuPage.elements.whoWeAreLink().click();
    footerEuPage.elements.whoWeArePageText().should('be.visible');
    footerEuPage.elements.whyChooseUsLink().click();
    footerEuPage.elements.whyChooseUsPageText().should('be.visible');
  });

  it.only('Should open about us menu and verify partnershipProgrammes.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.elements.partnershipProgrammesLink().click({ force: true });
    footerEuPage.elements.partnershipProgrammesPageText().should('be.visible');
  });

  it.only('Should open about us menu and verify contact us and careers links. ', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.elements.contactUsLink().click();
    footerEuPage.elements.contactUsPageText().should('be.visible');
    // footerEuPage.elements.principlesLink().click();
    //footerEuPage.elements.principlesPageText().should('be.visible');
    footerEuPage.elements.careersLink().click();
    footerEuPage.elements.careersPageText().should('be.visible');
  });

  it('Should open about us menu and verify derivlife.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.elements.derivLifeLink()
      .then(($el) => {
        footerEuPage.elements.derivLifeLink().invoke('removeAttr', 'target').click();
        const derivLife = $el.attr('href');
        cy.wrap(derivLife).should('eq', externalURLs.derivlifeURL);
      })
  });

  it('Should open trade type menu and verify all links.', () => {
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

  it('Should open market menu and verify links.', () => {
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

    it('Should open market menu and verify all of the links.', () => {
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

  it('Should open platform menu and verify all links.', () => {
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

      })

  });

  // Cypress.on('window:before:load', (win) => {
  //   cy.spy(win.console, 'error');
  //   cy.spy(win.console, 'warn');
  // });

  // afterEach(() => {
  //   cy.window().then((win) => {
  //     expect(win.console.error).to.have.callCount(0);
  //     expect(win.console.warn).to.have.callCount(0);
  //   });
  // });

  it('Should open legal menu and verify all links.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.legalMenu().click();
    footerEuPage.areLegalLinksVisible();
    footerEuPage.elements.regulatoryInformationLink().click();
    footerEuPage.elements.regulatoryInformationPageText().should('be.visible');
    footerEuPage.elements.termsAndConditionsLink().click();
    footerEuPage.elements.termsAndConditionsPageText().should('be.visible');

    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.legalMenu().click();
    footerEuPage.elements.secureAndResponsibleTradingLink().click();
    footerEuPage.elements.secureAndResponsibleTradingPageText().should('be.visible');
  });

  it('Should open partners menu and verify all links.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.partnersMenu().click();
    footerEuPage.arePartnersLinkVisible();
    footerEuPage.elements.derivPrimeLink().click();
    footerEuPage.elements.derivPrimePageText().should('be.visible');
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.paymentAgentLink().click();
    footerEuPage.elements.paymentAgentPageText().should('be.visible');
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.affiliatesIBLink().click();
    footerEuPage.elements.affiliatesPageText().should('be.visible');
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.aPILink()
      .then(($ele) => {
        footerEuPage.elements.aPILink().invoke('removeAttr', 'target').click();
        const aPILink = $ele.attr('href');
        cy.request(aPILink).its('status').should('eq', 200);
      })
  });

  it('Should open resources/support menu and verify all links.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.resourcesMenu().click();
    footerEuPage.elements.helpCenterLink().click();
    footerEuPage.elements.helpCenterPage().should('be.visible');

    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.resourcesMenu().click();
    footerEuPage.elements.communityLink().invoke('removeAttr', 'target').click();
  });

  it('Should open resource/support menu and verify status page.', () => {
    footerEuPage.elements.hamburgerMenu().should('be.visible');
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.resourcesMenu().click();
    footerEuPage.elements.statusPagelLink().click();
    footerEuPage.elements.proceedButton().click();
  });

  it('Should open resources/support menu and verify links.', () => {

    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.resourcesMenu().click();
    footerEuPage.elements.derivMT5SignalLink().click();
    footerEuPage.elements.hamburgerMenu().should('be.visible');
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.resourcesMenu().click();
    footerEuPage.elements.derivBlogLink()
      .then(($el) => {
        footerEuPage.elements.derivBlogLink().invoke('removeAttr', 'target').click();
        const derivBlog = $el.attr('href');
        cy.wrap(derivBlog).should('eq', externalURLs.derivBlogURL);
      })
  });

  it('Should open and verify footer (licence) PDF.', () => {
    footerEuPage.elements.footerEUlicence().should('be.visible');
    footerEuPage.elements.footerEUlicence()
      .invoke('attr', 'href').and('include', footerEuPage.eUPDFs.EUlicencePDF)
      .then(href => {
        cy.request(href).then(pdf => {
        })
        cy.request(href).its('status').should('eq', 200);
      })
  });

  it('Should open below footer links.', () => {

    footerEuPage.elements.footerTermsAndConditionLink().click();
    footerEuPage.elements.termsAndConditionsPageText().should('be.visible');
    footerEuPage.elements.footerSecureAndRespTradingLink().click();
    footerEuPage.elements.secureAndResponsibleTradingPageText().should('be.visible');
    footerEuPage.elements.footerRiskDisclosureLink().should('be.visible');
    footerEuPage.elements.footerRiskDisclosureLink().invoke('attr', 'href').and('include', footerEuPage.eUPDFs.EURiskDiscPDF)
      .then(href => {
        cy.request(href).then(pdf => {
        })
        cy.request(href).its('status').should('eq', 200);
      })
  });



});
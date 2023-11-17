import '@testing-library/cypress/add-commands'
import footerEUPage, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonEUPage';
describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  });
  it('Should verify deriv logo and social media icons.', () => {
    footerEUPage.elements.footerLogo().should('be.visible')
    footerEUPage.areSocialLinksVisible();
  });import '@testing-library/cypress/add-commands'
  import footerEuPage, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonEuPage';
  describe('QATEST-1422 Footer EU Responsive', () => {
    beforeEach(() => {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
    });
    it('Should verify deriv logo and social media icons.', () => {
      footerEuPage.elements.footerLogo().should('be.visible');
      footerEuPage.areSocialLinksVisible();
    });
    const externalEUUrls = Cypress.config('externalEUUrls');
    it('Should open and verify all footer social media links.', () => {
      const socialLinks = [
        {
          element: footerEuPage.socialMediaLinks.footerFaceBookLogo,
          url: externalEUUrls.facebookEU
        },
        {
          element: footerEuPage.socialMediaLinks.footerInstagramLogo,
          url: externalEUUrls.instagramEU
        },
        {
          element: footerEuPage.socialMediaLinks.footerTwitterLogo,
          url: externalEUUrls.twitterEU
        },
        {
          element: footerEuPage.socialMediaLinks.footerYoutubeLogo,
          url: externalEUUrls.youtubeEU
        },
  
        {
          element: footerEuPage.socialMediaLinks.footerLinkedInLogo,
          url: externalEUUrls.linkedInEU
        }
      ];
      socialLinks.forEach((link) => { footerEuPage.areSocialLinksCorrect(link.element, link.url); });
    });
    it('Should open about us menu and verify links.', () => {
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.aboutUsMenu().click();
      footerEuPage.areAboutUsLinksVisible();
      footerEuPage.elements.whoWeAreLink().click();
      footerEuPage.elements.whoWeArePageText().should('be.visible');
      footerEuPage.elements.whyChooseUsLink().click();
      footerEuPage.elements.whyChooseUsPageText().should('be.visible');
    });
    it('Should open about us menu and verify all of the links.', () =>{
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.aboutUsMenu().click();
      footerEuPage.elements.partnershipProgrammesLink().click({ force: true });
      footerEuPage.elements.partnershipProgrammesPageText().should('be.visible');
      cy.go(-1);
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.aboutUsMenu().click();
      footerEuPage.elements.contactUsLink().click();
      footerEuPage.elements.contactUsPageText().should('be.visible');
      footerEuPage.elements.careersLink().click();
      footerEuPage.elements.careersPageText().should('be.visible');
      cy.go(-1);
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.aboutUsMenu().click();
      footerEuPage.elements.derivLifeLink()
        .then(($el) => {
          footerEuPage.elements.derivLifeLink().invoke('removeAttr', 'target').click();
          const derivLife = $el.attr('href');
          cy.wrap(derivLife).should('eq', externalEUUrls.derivlifeURL);
        })
    });
    it('Should open trade type menu and verify all links.', () => {
      footerEuPage.elements.hamburgerMenu().click();
      footerEuPage.elements.tradeMenu().click();
      footerEuPage.areTradeMenuLinkVisible();
      footerEuPage.elements.cFDLink().click();
      footerEuPage.elements.cFDPageText().should('be.visible');
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
    it('Should open market menu and verify all of the links.' ,() => {
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
      footerEuPage.elements.eTFsLink().click();
      footerEuPage.elements.eTFsPageText().should('be.visible');
    });
    it('Should open platform menu and verify all links.', () => {
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.tradeMenu().click();
      footerEuPage.arePlatformLinksVisible();
      footerEuPage.elements.derivMT5Link().click();
      footerEuPage.elements.derivMT5PageText().should('be.visible');
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.tradeMenu().click();
      footerEuPage.elements.derivTraderLink().click();
      footerEuPage.elements.dTraderlogo().should('be.visible');
    });
    it('Should open legal menu and verify all links.', () => {
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.legalMenu().click();
      footerEuPage.areLegalLinksVisible();
      footerEuPage.elements.regulatoryInformationLink().click();
      footerEuPage.elements.regulatoryInformationPageText().should('be.visible');
      footerEuPage.elements.termsAndConditionsLink().click();
      footerEuPage.elements.termsAndConditionsPageText().should('be.visible');
      footerEuPage.elements.cookiesEUAcceptButton().click();
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
      footerEuPage.elements.affiliatesLink().click();
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
      footerEuPage.elements.cookiesEUAcceptButton().click();
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.resourcesMenu().click();
      footerEuPage.elements.communityLink().invoke('removeAttr', 'target').click();
      cy.go(-1);
      footerEuPage.elements.hamburgerMenu().should('be.visible');
      footerEuPage.clickHamburgerMenu();
      footerEuPage.elements.resourcesMenu().click();
      footerEuPage.elements.statusPagelLink().click();
      footerEuPage.elements.proceedButton().click();
    });
    it('Should open resources/support menu and verify all of the links.',() => {
      footerEuPage.elements.cookiesEUAcceptButton().click();
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
          cy.wrap(derivBlog).should('eq', externalEUUrls.derivBlog);
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
      footerEuPage.elements.cookiesEUAcceptButton().click();
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
    })
    it('Should open CFD banner link.', () => {
      footerEuPage.elements.cookiesEUAcceptButton().click();
      footerEuPage.elements.cFDFloatingBannerLink().should('be.visible');
      footerEuPage.elements.cFDFloatingBannerLink().invoke('attr', 'href').and('include', footerEuPage.eUPDFs.EURiskDiscPDF)
        .then(href => {
          cy.request(href).then(pdf => {
          })
          cy.request(href).its('status').should('eq', 200);
        })
    });
  })
  const externalEUUrls = Cypress.config('externalEUUrls');
  it('Should open and verify all footer social media links.', () => {
    const socialLinks = [
      {
        element: footerEUPage.socialMediaLinks.footerFaceBookLogo,
        url: externalEUUrls.facebookEU
      },
      {
        element: footerEUPage.socialMediaLinks.footerInstagramLogo,
        url: externalEUUrls.instagramEU
      },
      {
        element: footerEUPage.socialMediaLinks.footerTwitterLogo,
        url: externalEUUrls.twitterEU
      },
      {
        element: footerEUPage.socialMediaLinks.footerYoutubeLogo,
        url: externalEUUrls.youtubeEU
      },

      {
        element: footerEUPage.socialMediaLinks.footerLinkedInLogo,
        url: externalEUUrls.linkedInEU
      }
    ];
    socialLinks.forEach((link) => { footerEUPage.areSocialLinksCorrect(link.element, link.url); });
  });
  it('Should open about us menu and verify for all links.', () => {
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.aboutUsMenu().click();
    footerEUPage.areAboutUsLinksVisible();
    footerEUPage.elements.whoWeAreLink().click();
    footerEUPage.elements.whoWeArePageText().should('be.visible');
    footerEUPage.elements.whyChooseUsLink().click();
    footerEUPage.elements.whyChooseUsPageText().should('be.visible');
    footerEUPage.elements.partnershipProgrammesLink().click({ force: true });
    footerEUPage.elements.partnershipProgrammesPageText().should('be.visible');
    cy.go(-1);
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.aboutUsMenu().click();
    footerEUPage.elements.contactUsLink().click();
    footerEUPage.elements.contactUsPageText().should('be.visible');
    footerEUPage.elements.careersLink().click();
    footerEUPage.elements.careersPageText().should('be.visible');
    cy.go(-1);
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.aboutUsMenu().click();
    footerEUPage.elements.derivLifeLink()
      .then(($el) => {
        footerEUPage.elements.derivLifeLink().invoke('removeAttr', 'target').click();
        const derivLife = $el.attr('href');
        cy.wrap(derivLife).should('eq', externalEUUrls.derivlifeURL);
      })
  });
  it('Should open trade type menu and verify all links.', () => {
    footerEUPage.elements.hamburgerMenu().click();
    footerEUPage.elements.tradeMenu().click();
    footerEUPage.areTradeMenuLinkVisible();
    footerEUPage.elements.cFDLink().click();
    footerEUPage.elements.cFDPageText().should('be.visible');
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.tradeMenu().click();
    footerEUPage.elements.multipliersLink().click();
    footerEUPage.elements.multipliersPageText().should('be.visible');
  });
  it('Should open market menu and verify all links.', () => {
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.marketsMenu().click();
    footerEUPage.areMarketLinksVisible();
    footerEUPage.elements.forexLink().click();
    footerEUPage.elements.forexPageText().should('be.visible');
    footerEUPage.elements.derivedIndicesLink().click();
    footerEUPage.elements.derivedIndicesPageText().should('be.visible');
    footerEUPage.elements.stocksAndIndicesLink().click();
    footerEUPage.elements.stockAndIndicesPageText().should('be.visible');
    footerEUPage.elements.hamburgerMenu().should('be.visible');
    footerEUPage.clickHamburgerMenu();ß
    footerEUPage.elements.marketsMenu().click({ force: true });
    footerEUPage.elements.commoditiesLink().should('be.visible');
    footerEUPage.elements.commoditiesLink().click({ force: true });
    footerEUPage.elements.commoditiesPageLink().should('be.visible');
    footerEUPage.elements.hamburgerMenu().should('be.visible');
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.marketsMenu().click();
    footerEUPage.elements.cryptoCurrenciesLink().click();
    footerEUPage.elements.cryptoCurrenciesPageText().should('be.visible');
    footerEUPage.elements.hamburgerMenu().should('be.visible');
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.marketsMenu().click();
    footerEUPage.elements.eTFsLink().click();
    footerEUPage.elements.eTFsPageText().should('be.visible');
  });
  it('Should open platform menu and verify all links.', () => {
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.tradeMenu().click();
    footerEUPage.arePlatformLinksVisible();
    footerEUPage.elements.derivMT5Link().click();
    footerEUPage.elements.derivMT5PageText().should('be.visible');
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.tradeMenu().click();
    footerEUPage.elements.derivTraderLink().click();
    footerEUPage.elements.dTraderlogo().should('be.visible');
  });
  it('Should open legal menu and verify all links.', () => {
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.legalMenu().click();
    footerEUPage.areLegalLinksVisible();
    footerEUPage.elements.regulatoryInformationLink().click();
    footerEUPage.elements.regulatoryInformationPageText().should('be.visible');
    footerEUPage.elements.termsAndConditionsLink().click();
    footerEUPage.elements.termsAndConditionsPageText().should('be.visible');
    footerEUPage.elements.secureAndResponsibleTradingLink().click();
    footerEUPage.elements.secureAndResponsibleTradingPageText().should('be.visible');
  });
  it('Should open partners menu and verify all links.', () => {
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.partnersMenu().click();
    footerEUPage.arePartnersLinkVisible();
    footerEUPage.elements.derivPrimeLink().click();
    footerEUPage.elements.derivPrimePageText().should('be.visible');
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.affiliatesLink().click();
    footerEUPage.elements.affiliatesPageText().should('be.visible');
    footerEUPage.clickHamburgerMenu();
    footerEUPage.elements.aPILink().click();
  });
})
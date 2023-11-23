import '@testing-library/cypress/add-commands'
import footerEuPage, {
  areLegalLinksVisible,
  socialMediaLinks,
} from '../../support/POM/commonPage'

describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  });
  it('should verify deriv logo and social media icons.', () => {
    footerEuPage.elements.footerLogo().should('be.visible');
    footerEuPage.areSocialLinksVisible();
  });

  const externalURLs = Cypress.config('externalUrls');
  const externalSocialURLs = Cypress.config('externalSocialUrls');

  it('should open and verify all footer social media links.', () => {
    const socialLinks = [
      {
        element: footerEuPage.socialMediaLinks.footerFaceBookLogo,
        url: externalSocialURLs.facebookEu
      },
      {
        element: footerEuPage.socialMediaLinks.footerInstagramLogo,
        url: externalSocialURLs.instagramEu
      },
      {
        element: footerEuPage.socialMediaLinks.footerTwitterLogo,
        url: externalSocialURLs.twitterEu
      },
      {
        element: footerEuPage.socialMediaLinks.footerYoutubeLogo,
        url: externalSocialURLs.youtubeDeriv
      },
      {
        element: footerEuPage.socialMediaLinks.footerLinkedInLogo,
        url: externalSocialURLs.linkedInDeriv
      }
    ];
    socialLinks.forEach((link) => { footerEuPage.areSocialLinksCorrect(link.element, link.url); });
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
  });

  it('should open market menu and verify all of the links.', () => {
    footerEuPage.elements.hamburgerMenu().should('be.visible')
    footerEuPage.clickHamburgerMenu()
    footerEuPage.elements.marketsMenu().click({ force: true })
    footerEuPage.elements.commoditiesLink().should('be.visible')
    footerEuPage.elements.commoditiesLink().click({ force: true })
    footerEuPage.elements.commoditiesPageLink().should('be.visible')
    footerEuPage.elements.hamburgerMenu().should('be.visible')
    footerEuPage.clickHamburgerMenu()
    footerEuPage.elements.marketsMenu().click()
    footerEuPage.elements.cryptoCurrenciesLink().click()
    footerEuPage.elements.cryptoCurrenciesPageText().should('be.visible')
    footerEuPage.elements.hamburgerMenu().should('be.visible')
    footerEuPage.clickHamburgerMenu()
    footerEuPage.elements.marketsMenu().click()
    footerEuPage.elements.etfsLink().click()
    footerEuPage.elements.etfsPageText().should('be.visible')
  })

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

  it('should open platform menu and verify all links.', () => {
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

  it('should open legal menu and verify all links.', () => {
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

  it('should open partners menu and verify all links.', () => {
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

  it('should open resources/support menu and verify all links.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.resourcesMenu().click();
    footerEuPage.elements.helpCenterLink().click();
    footerEuPage.elements.helpCenterPage().should('be.visible');
    footerEuPage.elements.cookiesEUAcceptButton().click();
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.resourcesMenu().click();
    footerEuPage.elements.communityLink().invoke('removeAttr', 'target').click();
  });

  it('should open resource/support menu and verify status page.', () => {
    footerEuPage.elements.hamburgerMenu().should('be.visible');
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.resourcesMenu().click();
    footerEuPage.elements.statusPagelLink().click();
    footerEuPage.elements.proceedButton().click();
  });

  it('should open resources/support menu and verify links.', () => {
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
        cy.wrap(derivBlog).should('eq', externalURLs.derivBlogURL);
      })
  });

  it('should open and verify footer (licence) PDF.', () => {
    footerEuPage.elements.footerEUlicence().should('be.visible');
    footerEuPage.elements.footerEUlicence()
      .invoke('attr', 'href').and('include', footerEuPage.eUPDFs.EUlicencePDF)
      .then(href => {
        cy.request(href).then(pdf => {
        })
        cy.request(href).its('status').should('eq', 200);
      })
  });

  it('should open below footer links.', () => {
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
  });

  it('should open CFD banner link.', () => {
    footerEuPage.elements.cookiesEUAcceptButton().click();
    footerEuPage.elements.cfdFloatingBannerLink().should('be.visible');
    footerEuPage.elements.cfdFloatingBannerLink().invoke('attr', 'href').and('include', footerEuPage.eUPDFs.EURiskDiscPDF)
      .then(href => {
        cy.request(href).then(pdf => {
        })
        cy.request(href).its('status').should('eq', 200);
      })
  })

  it('should open CFD banner link.', () => {
    footerEuPage.elements.cookiesEUAcceptButton().click()
    footerEuPage.elements.cfdFloatingBannerLink().should('be.visible')
    footerEuPage.elements
      .cfdFloatingBannerLink()
      .invoke('attr', 'href')
      .and('include', footerEuPage.eUPDFs.EURiskDiscPDF)
      .then((href) => {
        cy.request(href).then((pdf) => { })
        cy.request(href).its('status').should('eq', 200)
      })
  })
})

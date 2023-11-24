import '@testing-library/cypress/add-commands'
import commonPage, {
  areLegalLinksVisible,
  socialMediaLinks,
} from '../../support/POM/commonPage'

describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  });
  it('should verify deriv logo and social media icons.', () => {
    commonPage.elements.footerLogo().should('be.visible');
    commonPage.areSocialLinksVisible();
  });

  const externalURLs = Cypress.config('externalUrls');
  const externalSocialURLs = Cypress.config('externalSocialUrls');

  it('should open and verify all footer social media links.', () => {
    const socialLinks = [
      {
        element: commonPage.socialMediaLinks.footerFaceBookLogo,
        url: externalSocialURLs.facebookEu
      },
      {
        element: commonPage.socialMediaLinks.footerInstagramLogo,
        url: externalSocialURLs.instagramEu
      },
      {
        element: commonPage.socialMediaLinks.footerTwitterLogo,
        url: externalSocialURLs.twitterEu
      },
      {
        element: commonPage.socialMediaLinks.footerYoutubeLogo,
        url: externalSocialURLs.youtubeDeriv
      },
      {
        element: commonPage.socialMediaLinks.footerLinkedInLogo,
        url: externalSocialURLs.linkedInDeriv
      }
    ];
    socialLinks.forEach((link) => { commonPage.areSocialLinksCorrect(link.element, link.url); });
  });

  it('should open market menu and verify links.', () => {
    commonPage.clickHamburgerMenu();
    commonPage.elements.marketsMenu().click();
    commonPage.areMarketLinksVisible();
    commonPage.elements.derivedIndicesLink().click();
    commonPage.elements.derivedIndicesPageText().should('be.visible');
    commonPage.elements.stocksAndIndicesLink().click();
    commonPage.elements.stockAndIndicesPageText().should('be.visible');
  });

  it('should open platform menu and verify all links.', () => {
    commonPage.clickHamburgerMenu();
    commonPage.elements.tradeMenu().click();
    commonPage.arePlatformLinksVisible();
    commonPage.elements.derivMT5Link().click();
    commonPage.elements.derivMT5PageText().should('be.visible');
    commonPage.clickHamburgerMenu();
    commonPage.elements.tradeMenu().click();
    commonPage.elements.derivTraderLink().click();
    commonPage.elements.dTraderlogo().should('be.visible');
  });

  it('should open legal menu and verify all links.', () => {
    commonPage.clickHamburgerMenu();
    commonPage.elements.legalMenu().click();
    commonPage.areLegalLinksVisible();
    commonPage.elements.regulatoryInformationLink().click();
    commonPage.elements.regulatoryInformationPageText().should('be.visible');
    commonPage.elements.termsAndConditionsLink().click();
    commonPage.elements.termsAndConditionsPageText().should('be.visible');
    commonPage.elements.cookiesEUAcceptButton().click();
    commonPage.clickHamburgerMenu();
    commonPage.elements.legalMenu().click();
    commonPage.elements.secureAndResponsibleTradingLink().click();
    commonPage.elements.secureAndResponsibleTradingPageText().should('be.visible');
  });

  it('should open partners menu and verify all links.', () => {
    commonPage.clickHamburgerMenu();
    commonPage.elements.partnersMenu().click();
    commonPage.arePartnersLinkVisible();
    commonPage.elements.derivPrimeLink().click();
    commonPage.elements.derivPrimePageText().should('be.visible');
    commonPage.clickHamburgerMenu();
    commonPage.elements.affiliatesLink().click();
    commonPage.elements.affiliatesPageText().should('be.visible');
    commonPage.clickHamburgerMenu();
    commonPage.elements.aPILink()
      .then(($ele) => {
        commonPage.elements.aPILink().invoke('removeAttr', 'target').click();
        const aPILink = $ele.attr('href');
        cy.request(aPILink).its('status').should('eq', 200);
      })
  });

  it('should open resources/support menu and verify all links.', () => {
    commonPage.clickHamburgerMenu();
    commonPage.elements.resourcesMenu().click();
    commonPage.elements.helpCenterLink().click();
    commonPage.elements.helpCenterPage().should('be.visible');
    commonPage.elements.cookiesEUAcceptButton().click();
    commonPage.clickHamburgerMenu();
    commonPage.elements.resourcesMenu().click();
    commonPage.elements.communityLink().invoke('removeAttr', 'target').click();
  });

  it('should open resource/support menu and verify status page.', () => {
    commonPage.elements.hamburgerMenu().should('be.visible');
    commonPage.clickHamburgerMenu();
    commonPage.elements.resourcesMenu().click();
    commonPage.elements.statusPagelLink().click();
    commonPage.elements.proceedButton().click();
  });

  it('should open resources/support menu and verify links.', () => {
    commonPage.elements.cookiesEUAcceptButton().click();
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

  it('should open and verify footer (licence) PDF.', () => {
    commonPage.elements.footerEulicence().should('be.visible');
    commonPage.elements.footerEulicence()
      .invoke('attr', 'href').and('include', commonPage.euPdfs.eulicencePdf)
      .then(href => {
        cy.request(href).then(pdf => {
        })
        cy.request(href).its('status').should('eq', 200);
      })
  });

  it('should open below footer links.', () => {
    commonPage.elements.cookiesEUAcceptButton().click();
    commonPage.elements.footerTermsAndConditionLink().click();
    commonPage.elements.termsAndConditionsPageText().should('be.visible');
    commonPage.elements.footerSecureAndRespTradingLink().click();
    commonPage.elements.secureAndResponsibleTradingPageText().should('be.visible');
    commonPage.elements.footerRiskDisclosureLink().should('be.visible');
    commonPage.elements.footerRiskDisclosureLink().invoke('attr', 'href').and('include', commonPage.euPdfs.euRiskDiscPdf)
      .then(href => {
        cy.request(href).then(pdf => {
        })
        cy.request(href).its('status').should('eq', 200);
      })
  });

  it('should open CFD banner link.', () => {
    commonPage.elements.cookiesEUAcceptButton().click();
    commonPage.elements.cfdFloatingBannerLink().should('be.visible');
    commonPage.elements.cfdFloatingBannerLink().invoke('attr', 'href').and('include', commonPage.euPdfs.euRiskDiscPdf)
      .then(href => {
        cy.request(href).then(pdf => {
        })
        cy.request(href).its('status').should('eq', 200);
      })
  })

  it('should open CFD banner link.', () => {
    commonPage.elements.cookiesEUAcceptButton().click()
    commonPage.elements.cfdFloatingBannerLink().should('be.visible')
    commonPage.elements
      .cfdFloatingBannerLink()
      .invoke('attr', 'href')
      .and('include', commonPage.euPdfs.euRiskDiscPdf)
      .then((href) => {
        cy.request(href).then((pdf) => { })
        cy.request(href).its('status').should('eq', 200)
      })
  })
})

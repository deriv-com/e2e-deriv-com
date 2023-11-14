import '@testing-library/cypress/add-commands'
import footerEuPage, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonEuPage';
describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  });
  it('Should verify deriv logo and social media icons.', () => {
    footerEuPage.elements.footerLogo().should('be.visible')
    footerEuPage.areSocialLinksVisible();
  });
  const externalEUUrls = Cypress.config('externalEUUrls');
  it('should open and verify all footer social media links.', () => {
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
  it('Should open about us menu and check for all links.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.areAboutUsLinksVisible();
    footerEuPage.elements.whoWeAreLink().click();
    footerEuPage.elements.whoWeArePageText().should('be.visible');
    footerEuPage.elements.whyChooseUsLink().click();
    footerEuPage.elements.whyChooseUsPageText().should('be.visible');
    footerEuPage.elements.partnershipProgrammesLink().click({force:true});
    footerEuPage.elements.partnershipProgrammesPageText().should('be.visible');
    cy.go(-1);
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.elements.contactUsLink().click();
    footerEuPage.elements.contactUsPageText().should('be.visible');
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.aboutUsMenu().click();
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
  it('Should open trade type menu and check all links.', () => {
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
  it('Should open market menu and check all links.', () => {
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.marketsMenu().click();
    footerEuPage.areMarketLinksVisible();
    footerEuPage.elements.forexLink().click();
    footerEuPage.elements.forexPageText().should('be.visible');
    footerEuPage.elements.derivedIndicesLink().click();
    footerEuPage.elements.derivedIndicesPageText().should('be.visible');
    footerEuPage.elements.stocksAndIndicesLink().click();
    footerEuPage.elements.stockAndIndicesPageText().should('be.visible');
    footerEuPage.elements.hamburgerMenu().should('be.visible');
    footerEuPage.clickHamburgerMenu();
    footerEuPage.elements.marketsMenu().click();
    footerEuPage.elements.commoditiesLink().should('be.visible');
    footerEuPage.elements.commoditiesLink().click({force:true});
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
  it('Should open platform links.', () => {
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
    footerEuPage.elements.aPILink().click();
  });
})
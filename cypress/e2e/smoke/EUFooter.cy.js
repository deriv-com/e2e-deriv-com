import '@testing-library/cypress/add-commands'
import footerEUPage, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonEUPage';
describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  });
  it('Should verify deriv logo and social media icons.', () => {
    footerEUPage.elements.footerLogo().should('be.visible')
    footerEUPage.areSocialLinksVisible();
  });
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
import '@testing-library/cypress/add-commands'
import footerEuPage from '../../support/POM/commonEuPage';
describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  });
  it('Footer logo and Social media icons verification for EU', () => {
    footerEuPage.elements.footerLogo().should('be.visible')
    footerEuPage.areSocialLinksVisible();
  });
  it('Footer Social Media Links Verification for EU', () => {
    footerEuPage.areSocialLinksCorrect(footerEuPage.elements.footerFaceBookLogo, footerEuPage.externalEUURls.facebookEU);
    footerEuPage.areSocialLinksCorrect(footerEuPage.elements.footerInstagramLogo, footerEuPage.externalEUURls.instagramEU);
    footerEuPage.areSocialLinksCorrect(footerEuPage.elements.footerTwitterLogo, footerEuPage.externalEUURls.twitterEU);
    footerEuPage.areSocialLinksCorrect(footerEuPage.elements.footerYoutubeLogo, footerEuPage.externalEUURls.youtubeEU);
    footerEuPage.areSocialLinksCorrect(footerEuPage.elements.footerLinkedInLogo, footerEuPage.externalEUURls.linkedInEU);
  });
  it('Footer Menu About Us Pages verification for EU', () => {
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.areAboutUsLinksVisible();
    footerEuPage.elements.whoWeAreLink().click();
    footerEuPage.elements.whoWeArePageText().should('be.visible');
    footerEuPage.elements.whyChooseUsLink().click();
    footerEuPage.elements.whyChooseUsPageText().should('be.visible');
    footerEuPage.elements.partnershipProgrammesLink().click();
    footerEuPage.elements.partnershipProgrammesPageText().should('be.visible');
    cy.go(-1);
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.elements.contactUsLink().click();
    footerEuPage.elements.contactUsPageText().should('be.visible');
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.elements.careersLink().click();
    footerEuPage.elements.careersPageText().should('be.visible');
    cy.go(-1);
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.aboutUsMenu().click();
    footerEuPage.elements.derivLifeLink()
      .then(($el) => {
        footerEuPage.elements.derivLifeLink().invoke('removeAttr', 'target').click();
        const derivLife = $el.attr('href');
        cy.wrap(derivLife).should('eq', footerEuPage.externalEUURls.derivlifeExpected);
      })
  });
  it('Trade type for EU', () => {
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.tradeMenu().click();
    footerEuPage.areTradeMenuLinkVisible();
    footerEuPage.elements.cFDLink().click();
    footerEuPage.elements.cFDPageText().should('be.visible');
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.tradeMenu().click();
    footerEuPage.elements.multipliersLink().click();
    footerEuPage.elements.multipliersPageText().should('be.visible')
  });
  it('Market Menu for EU', () => {
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.marketsMenu().click();
    footerEuPage.areMarketLinksVisible();
    footerEuPage.elements.forexLink().click();
    footerEuPage.elements.forexPageText().should('be.visible');
    footerEuPage.elements.derivedIndicesLink().click();
    footerEuPage.elements.derivedIndicesPageText().should('be.visible');
    footerEuPage.elements.stocksAndIndicesLink().click();
    footerEuPage.elements.stockAndIndicesPageText().should('be.visible');
    footerEuPage.elements.hamburgerMenu().should('be.visible');
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.marketsMenu().should('be.visible');
    footerEuPage.elements.marketsMenu().click();
    footerEuPage.elements.commoditiesLink().should('be.visible');
    footerEuPage.elements.commoditiesLink().click();
    footerEuPage.elements.commoditiesPageLink().should('be.visible');
    footerEuPage.elements.hamburgerMenu().should('be.visible');
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.marketsMenu().click();
    footerEuPage.elements.cryptoCurrenciesLink().click();
    footerEuPage.elements.cryptoCurrenciesPageText().should('be.visible');
    footerEuPage.elements.hamburgerMenu().should('be.visible');
    footerEuPage.elements.hamburgerMenu().click();
    footerEuPage.elements.marketsMenu().click();
    footerEuPage.elements.eTFsLink().click();
    footerEuPage.elements.eTFsPageText().should('be.visible');
  });
})
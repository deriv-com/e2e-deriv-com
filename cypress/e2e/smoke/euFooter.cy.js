import '@testing-library/cypress/add-commands'
import footerEuPage, {
  areLegalLinksVisible,
  socialMediaLinks,
} from '../../support/POM/commonPage'

describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  })

  const externalURLs = Cypress.config('externalUrls')
  const externalSocialURLs = Cypress.config('externalSocialUrls')

  it('should open and verify all footer social media links.', () => {
    const socialLinks = [
      {
        element: footerEuPage.socialMediaLinks.footerFaceBookLogo,
        url: externalSocialURLs.facebookEu,
      },
      {
        element: footerEuPage.socialMediaLinks.footerInstagramLogo,
        url: externalSocialURLs.instagramEu,
      },
      {
        element: footerEuPage.socialMediaLinks.footerTwitterLogo,
        url: externalSocialURLs.twitterEu,
      },
      {
        element: footerEuPage.socialMediaLinks.footerYoutubeLogo,
        url: externalSocialURLs.youtubeDeriv,
      },
      {
        element: footerEuPage.socialMediaLinks.footerLinkedInLogo,
        url: externalSocialURLs.linkedInDeriv,
      },
    ]
    socialLinks.forEach((link) => {
      footerEuPage.areSocialLinksCorrect(link.element, link.url)
    })
  })

  it('should display EU footer and contain valid links.', () => {
    footerEuPage.elements.cookiesEUAcceptButton().click()

    footerEuPage.elements.footerEuLicence().should('be.visible')
    footerEuPage.elements
      .footerEuLicence()
      .invoke('attr', 'href')
      .and('include', footerEuPage.euPdf.euLicencePdf)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })
    footerEuPage.elements.footerTermsAndConditionLink().click()
    footerEuPage.elements.termsAndConditionsPageText().should('be.visible')

    footerEuPage.elements.footerSecureAndRespTradingLink().click()
    footerEuPage.elements
      .secureAndResponsibleTradingPageText()
      .should('be.visible')

    footerEuPage.elements.footerRiskDisclosureLink().should('be.visible')
    footerEuPage.elements
      .footerRiskDisclosureLink()
      .invoke('attr', 'href')
      .and('include', footerEuPage.euPdf.euRiskDiscPdf)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })

    footerEuPage.elements.cfdFloatingBannerLink().should('be.visible')
    footerEuPage.elements
      .cfdFloatingBannerLink()
      .invoke('attr', 'href')
      .and('include', footerEuPage.euPdf.euRiskDiscPdf)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })
  })
})

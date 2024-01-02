import '@testing-library/cypress/add-commands'
import footer, { socialMediaLinks } from '../../support/POM/commonPage'
import tncPage from '../../support/POM/tncPage'
import responsiblePage from '../../support/POM/responsiblePage'

describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  })

  const externalSocialUrls = Cypress.config('externalSocialUrls')

  it('should open and verify all footer social media links.', () => {
    const socialLinks = [
      {
        element: footer.socialMediaLinks.facebookLogo,
        url: externalSocialUrls.facebookEu,
      },
      {
        element: footer.socialMediaLinks.instagramLogo,
        url: externalSocialUrls.instagramEu,
      },
      {
        element: footer.socialMediaLinks.twitterLogo,
        url: externalSocialUrls.twitterEu,
      },
      {
        element: footer.socialMediaLinks.youtubeLogo,
        url: externalSocialUrls.youtubeDeriv,
      },
      {
        element: footer.socialMediaLinks.linkedInLogo,
        url: externalSocialUrls.linkedInDeriv,
      },
    ]
    socialLinks.forEach((link) => {
      footer.areSocialLinksCorrect(link.element, link.url)
    })
  })

  it('should display EU footer and contain valid links.', () => {
    footer.elements.cookiesAcceptButton().click()

    footer.elements.dielLicenceLink().should('be.visible')
    footer.elements
      .dielLicenceLink()
      .invoke('attr', 'href')
      .and('include', footer.licencePdf.diel)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })

    footer.elements.riskDisclosureLink().should('be.visible')
    footer.elements
      .riskDisclosureLink()
      .invoke('attr', 'href')
      .and('include', footer.riskDisclosurePdf.eu)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })

    footer.elements.cfdFloatingBannerLink().should('be.visible')
    footer.elements
      .cfdFloatingBannerLink()
      .invoke('attr', 'href')
      .and('include', footer.riskDisclosurePdf.eu)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })

    footer.elements.termsAndConditionLink().click()
    tncPage.elements.headerTxt().should('be.visible')

    footer.elements.secureAndRespTradingLink().click()
    responsiblePage.elements.headerTxt().should('be.visible')

    


  })
})

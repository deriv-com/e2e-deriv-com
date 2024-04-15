import '@testing-library/cypress/add-commands'
import footer, { socialMediaLinks } from '../../support/POM/commonPage'
import tncPage from '../../support/POM/tncPage'
import responsiblePage from '../../support/POM/responsiblePage'

describe('QATEST-1422 Footer EU Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'))
  })

  const externalSocialUrls = Cypress.config('externalSocialUrls')
  const { googlePlay, appStore, appGallery } = Cypress.config().appMarketUrl

  it(
    'should open and verify all footer social media links.',
    { tags: ['@smoke-tests', '@eu-tests'] },
    () => {
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
    }
  )

  it(
    'should display EU footer and contain valid links.',
    { tags: ['@smoke-tests', '@eu-tests'] },
    () => {
      footer.elements.cookiesAcceptButton().click()
      footer.elements.dielLicenceText().should('be.visible')
      footer.elements.dfxLicenceText().should('not.exist')
      footer.elements.bviLicenceText().should('not.exist')
      footer.elements.vanuatuLicenceText().should('not.exist')
      footer.elements.svgLicenceText().should('not.exist')
      footer.elements.derivLimitedLicenceText().should('not.exist')

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

      footer.elements.termsAndConditionLink().click()
      tncPage.elements.headerTxt().should('be.visible')

      footer.elements.secureAndRespTradingLink().click()
      responsiblePage.elements.headerTxt().should('be.visible')
    }
  )

  it(
    'should verify deriv go mobile app download link is not present',
    { tags: ['@smoke-tests', '@eu-tests'] },
    () => {
      cy.get(`a[href="${googlePlay}"]`).should('not.exist')
      cy.get(`a[href*="${appStore}"]`).should('not.exist')
      cy.get(`a[href*="${appGallery}"]`).should('not.exist')
    }
  )
})

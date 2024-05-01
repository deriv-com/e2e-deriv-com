import '@testing-library/cypress/add-commands'
import footer, { socialMediaLinks } from '../../../support/POM/commonPage'
import tncPage from '../../../support/POM/tncPage'
import responsiblePage from '../../../support/POM/responsiblePage'

describe('QATEST-71237 Footer DIEL Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionDIEL'))
  })

  const externalSocialUrls = Cypress.config('externalSocialUrls')
  const { googlePlay, appStore, appGallery } = Cypress.config().appMarketUrl

  it(
    'should have correct footer social media links.',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      const socialMediaLinks = [
        {
          name: 'Facebook',
          func: footer.socialMediaLinks.facebookLogo,
          expectedUrl: externalSocialUrls.facebookRow,
        },
        {
          name: 'Twitter',
          func: footer.socialMediaLinks.twitterLogo,
          expectedUrl: externalSocialUrls.twitterRow,
        },
        {
          name: 'Instagram',
          func: footer.socialMediaLinks.instagramLogo,
          expectedUrl: externalSocialUrls.instagramRow,
        },
        {
          name: 'LinkedIn',
          func: footer.socialMediaLinks.linkedInLogo,
          expectedUrl: externalSocialUrls.linkedInDeriv,
        },
        {
          name: 'Youtube',
          func: footer.socialMediaLinks.youtubeLogo,
          expectedUrl: externalSocialUrls.youtubeDeriv,
        },
      ]
      socialMediaLinks.forEach((socialMedia) => {
        socialMedia.func().then(($el) => {
          const href = $el.attr('href')
          const target = $el.attr('target')
          cy.wrap(target).should('eq', '_blank') // it should have _blank to open a new tab
          cy.wrap(href).should('eq', socialMedia.expectedUrl)
        })
      })
    }
  )

  it(
    'has each licence information',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      footer.elements.dfxLicenceText().should('be.visible')
      footer.elements.bviLicenceText().should('be.visible')
      footer.elements.vanuatuLicenceText().should('be.visible')
      footer.elements.svgLicenceText().should('be.visible')
      footer.elements.derivLimitedLicenceText().should('be.visible')
      footer.elements.dielLicenceText().should('be.visible')
    }
  )

  it(
    'has valid tnc, risk disclosure and secure and responsibility links.',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      // tnc
      footer.elements.termsAndConditionLink().click()
      tncPage.elements.headerTxt().should('be.visible')

      cy.go('back')

      // risk disclosure
      footer.elements.riskDisclosureLink().should('be.visible')
      footer.elements
        .riskDisclosureLink()
        .invoke('attr', 'href')
        .and('include', footer.riskDisclosurePdf.row)
        .then((href) => {
          cy.request(href).then((pdf) => {})
          cy.request(href).its('status').should('eq', 200)
        })

      //secure and responsibility
      footer.elements.secureAndRespTradingLink().click()
      responsiblePage.elements.headerTxt().should('be.visible')
    }
  )

  it(
    'should verify deriv go mobile app download link',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      cy.findAllByText('Trade multipliers on our mobile app.').should(
        'be.visible'
      )
      cy.get(`a[href="${googlePlay}"]`)
        .should('be.visible')
        .find('img[alt="get it on google play"]')
        .should('exist')
      cy.get(`a[href*="${appStore}"]`)
        .should('be.visible')
        .find('img[alt="download on the app store"]')
        .should('exist')
      cy.get(`a[href*="${appGallery}"]`)
        .should('be.visible')
        .find('img[alt="explore it on appgallery"]')
        .should('exist')
    }
  )
})

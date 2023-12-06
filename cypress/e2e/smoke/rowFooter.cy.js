import '@testing-library/cypress/add-commands'
// import footer, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonPage'
// import rowFooter from '../../support/POM/commonPage'
import footer, {
  areLegalLinksVisible,
  socialMediaLinks,
} from '../../support/POM/commonPage'
import tncPage from '../../support/POM/tncPage'
import responsiblePage from '../../support/POM/responsiblePage'

describe('QATEST-1399 - Footer ROW Responsive', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
  })

  const externalSocialUrls = Cypress.config('externalSocialUrls')

  it('should have correct footer social media links.', () => {
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
      // {
      //   name: 'Youtube',
      //   func: footer.socialMediaLinks.youtubeLogo,
      //   expectedUrl: externalSocialUrls.youtubeDeriv,
      // },
    ]
    socialMediaLinks.forEach((socialMedia) => {
      socialMedia.func().then(($el) => {
        const href = $el.attr('href')
        const target = $el.attr('target')
        cy.wrap(target).should('eq', '_blank') // it should have _blank to open a new tab
        cy.wrap(href).should('eq', socialMedia.expectedUrl)
      })
    })
  })

  it('has valid licence links.', () => {
    footer.elements.dfxLicenceLink().should('be.visible')
    footer.elements.bviLicenceLink().should('be.visible')
    footer.elements.vanuatuLicenceLink().should('be.visible')

    footer.elements
      .dfxLicenceLink()
      .invoke('attr', 'href')
      .and('include', footer.licencePdf.dfx)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })

    footer.elements
      .bviLicenceLink()
      .invoke('attr', 'href')
      .and('include', footer.licencePdf.bvi)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })

    footer.elements
      .vanuatuLicenceLink()
      .invoke('attr', 'href')
      .and('include', footer.licencePdf.vanuatu)
      .then((href) => {
        cy.request(href).then((pdf) => {})
        cy.request(href).its('status').should('eq', 200)
      })
  })

  it('has valid tnc, risk disclosure and secure and responsibility links.', () => {
    // tnc
    footer.elements.termsAndConditionLink().click()
    tncPage.elements.headerTxt().should('be.visible')

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
  })
})

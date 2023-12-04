import '@testing-library/cypress/add-commands'
import footerEuPage, { areLegalLinksVisible, socialMediaLinks } from '../../support/POM/commonPage'
import rowFooter from '../../support/POM/commonPage'
import footer from '../../support/POM/commonPage'
import tncPage from '../../support/POM/tncPage'

describe('QATEST-1399 - Footer ROW Responsive', () => {
    beforeEach(() => {
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
    });

    it('should verify deriv logo and social media icons.', () => {
        footerEuPage.elements.footerLogo().should('be.visible');
        footerEuPage.areSocialLinksVisible();
    });
    const externalURLs = Cypress.config('externalUrls');
    const externalSocialURLs = Cypress.config('externalSocialUrls');

    it('should open and verify all footer social media links.', () => {

        const socialMediaLinks = [
        { name: 'Facebook', func: footerEuPage.socialMediaLinks.footerFaceBookLogo, expectedUrl: externalSocialURLs.facebookRow },
        { name: 'Twitter', func: footerEuPage.socialMediaLinks.footerTwitterLogo, expectedUrl: externalSocialURLs.twitterRow },
        { name: 'Instagram', func: footerEuPage.socialMediaLinks.footerInstagramLogo, expectedUrl: externalSocialURLs.instagramRow },
        { name: 'LinkedIn', func: footerEuPage.socialMediaLinks.footerLinkedInLogo, expectedUrl: externalSocialURLs.linkedInDeriv },
           // { name: 'Youtube', func: footerEuPage.socialMediaLinks.footerYoutubeLogo, expectedUrl: externalSocialURLs.youtubeDeriv },
             ];
        socialMediaLinks.forEach((socialMedia) => {
            socialMedia.func().then(($el) => {
                socialMedia.func().invoke('removeAttr', 'target').click();
                const linkHref = $el.attr('href');
                cy.wrap(linkHref).should('eq', socialMedia.expectedUrl);
            });
            cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
        });
    });

    it.only('should contains valid licence links.', () => {

        footer.elements.dfxLicenceLink().should('be.visible')
        footer.elements.bviLicenceLink().should('be.visible')
        // footer.elements.vanuatuLicenceLink().should('be.visible')

        // footer.elements.dfxLicenceLink()
        //   .invoke('attr', 'href')
        //   .and('include', footer.licencePdf.dfx)
        //   .then((href) => {
        //     cy.request(href).then((pdf) => {})
        //     cy.request(href).its('status').should('eq', 200)
        //   })

        footer.elements.bviLicenceLink()
          .invoke('attr', 'href')
          .and('include', footer.licencePdf.bvi)
          .then((href) => {
            cy.request(href).then((pdf) => {})
            cy.request(href).its('status').should('eq', 200)
          })

        // footer.elements.vanuatuLicenceLink()
        //   .invoke('attr', 'href')
        //   .and('include', footer.licencePdf.vanuatu)
        //   .then((href) => {
        //     cy.request(href).then((pdf) => {})
        //     cy.request(href).its('status').should('eq', 200)
        //   })
        
        // footerEuPage.elements
        //   .footerEuLicence()
        //   .invoke('attr', 'href')
        //   .and('include', footerEuPage.euPdf.euLicencePdf)
        //   .then((href) => {
        //     cy.request(href).then((pdf) => {})
        //     cy.request(href).its('status').should('eq', 200)
        //   })
        });



    it('should contain valid footer links.', () => {
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
        tncPage.elements.headerTxt().should('be.visible')
        });

});

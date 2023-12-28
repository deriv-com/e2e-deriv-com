import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'


function check_homepage_header() {
    homeBanner.elements.hamBurgerMenu().should('be.visible')
    homeBanner.elements.derivLogo().click()
    cy.url().should('include', '/')
}

function check_hamburger_menu()
 {
    homeBanner.elements.hamBurgerMenu().should('be.visible').click()
    homeBanner.elements.tradeMenu().should('be.visible')
    homeBanner.elements.marketsMenu().should('be.visible')
    homeBanner.elements.aboutUsMenu().should('be.visible')
    homeBanner.elements.resourcesMenu().should('be.visible')
    homeBanner.elements.legalMenu().should('be.visible')
    homeBanner.elements.partnersMenu().should('be.visible')
    homeBanner.elements.crossIcon().click()
}

describe('QATEST-1298 - should validate home page header menu', () => {
    const regions = ['ROW', 'EU'];

    regions.forEach((region) => {
        it(`should be able validate homepage header for ${region} website`, () => {
            cy.c_visitResponsive(`/${Cypress.env('Region' + region)}`)
            check_homepage_header()
            check_hamburger_menu()
            cy.findByRole('button', { name: 'Log in' }).should('be.visible')
        });
    });
});
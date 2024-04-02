import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'


function check_homepage_header() {
    homeBanner.elements.hamBurgerMenu().should('be.visible')
    homeBanner.elements.derivLogo().click()
    cy.url().should('include', '/')
    cy.findByRole('button', { name: 'Log in' }).should('be.visible')

}

function check_trade_menu(region) {

    homeBanner.elements.tradeMenu().should('be.visible').click()
    homeBanner.elements.cfdMenu().should('be.visible')
        if (region === 'ROW') {
            homeBanner.elements.optionsMenu().should('be.visible')
            homeBanner.elements.multiplierMenu().should('be.visible')
            homeBanner.elements.derivxLink().should('be.visible')
            homeBanner.elements.smartTraderLink().should('be.visible')
            homeBanner.elements.cTraderLink().scrollIntoView().should('be.visible')
            homeBanner.elements.dtraderLink().should('be.visible')
            homeBanner.elements.derivGo().should('be.visible')
            homeBanner.elements.derivBot().scrollIntoView().should('be.visible')
            homeBanner.elements.BinaryBotLink().should('be.visible')
            homeBanner.elements.backIcon().should('be.visible').click()
        }
        if (region === 'EU') {
            homeBanner.elements.multiplierMenu().should('be.visible')
            homeBanner.elements.dtraderLink().should('be.visible')
            homeBanner.elements.derivxLink().should('not.exist')
            homeBanner.elements.smartTraderLink().should('not.exist')
            homeBanner.elements.cTraderLink().should('not.exist')
            homeBanner.elements.derivGo().should('not.exist')
            homeBanner.elements.derivBot().should('not.exist')
            homeBanner.elements.BinaryBotLink().should('not.exist')
            homeBanner.elements.backIcon().should('be.visible').click()

        }    
    }

function check_market_menu() {
    homeBanner.elements.marketsMenu().should('be.visible').click()
    homeBanner.elements.forexTxt().should('be.visible')
    homeBanner.elements.stockIndicesTxt().should('be.visible')
    homeBanner.elements.commoditiesTxt().should('be.visible')
    homeBanner.elements.cryptoTxt().should('be.visible')
    homeBanner.elements.etfLink().should('be.visible')
    homeBanner.elements.backIcon().should('be.visible').click()


}


function check_legal_menu () {
    homeBanner.elements.legalMenu().click()
    homeBanner.elements.regulatoryInfo().should('be.visible')
    homeBanner.elements.secureResponsible().should('be.visible')
    homeBanner.elements.termsCondition().should('be.visible')
    homeBanner.elements.backIcon().should('be.visible').click()

}

function menu_checker(menuName, items) {
    return () => {
        cy.findByRole('navigation').contains(menuName).should('be.visible').click()

        items.forEach(subMenuItem => {
            const linkText = subMenuItem.text || subMenuItem;
            cy.findByRole('navigation').contains(linkText).should('be.visible')
        });

        homeBanner.elements.backIcon().should('be.visible').click()
    };

}

const check_about_menu = menu_checker('About us', [
    'Who we are', 'Why choose us', 'Partnership programmes', 'Contact us', 'Careers','Deriv Life' ,
])

const check_resources_menu = menu_checker('Resources', [
    'Help centre', 'Community', 'Traders\' tools', 'Payment methods', 'Deriv MT5 signals', 'Status page', 'Deriv Blog',
])




function check_partner_menu(region) {
    homeBanner.elements.partnersMenu().should('be.visible').click()
    homeBanner.elements.derivPrime().should('be.visible')


    if (region === 'ROW') {
        homeBanner.elements.affiliatesIbs().should('be.visible')
        homeBanner.elements.paymentAgent().should('be.visible')
    }

    if (region === 'EU') {
        homeBanner.elements.affiliates().should('be.visible')
        homeBanner.elements.paymentAgent().should('not.exist')
    }

    homeBanner.elements.apiLink().should('be.visible')
}

function check_hamburger_menu()
 {
    homeBanner.elements.hamBurgerMenu().should('be.visible').click()
    cy.c_waitForPageLoad()
    homeBanner.elements.tradeMenu().should('be.visible')
    homeBanner.elements.marketsMenu().should('be.visible')
    homeBanner.elements.aboutUsMenu().should('be.visible')
    homeBanner.elements.resourcesMenu().should('be.visible')
    homeBanner.elements.legalMenu().should('be.visible')
    homeBanner.elements.partnersMenu().should('be.visible')
}

describe('QATEST-1298 - should validate home page header menu', () => {
    it('should be able to validate homepage header for ROW website', () => {
        cy.c_visitResponsive('')
        check_homepage_header()
        check_hamburger_menu()
        check_trade_menu('ROW')
        check_market_menu('ROW')
        check_about_menu()
        check_resources_menu()
        check_legal_menu()
        check_partner_menu('ROW')
        homeBanner.elements.crossIcon().click()
    })

    it('should be able to validate homepage header for EU website', () => {
        cy.c_visitResponsive(Cypress.env('RegionEU'))
        check_homepage_header()
        check_hamburger_menu()
        check_trade_menu('EU')
        check_market_menu('EU')
        check_about_menu()
        check_resources_menu()
        check_legal_menu()
        check_partner_menu('EU')
        homeBanner.elements.crossIcon().click()

    });

});

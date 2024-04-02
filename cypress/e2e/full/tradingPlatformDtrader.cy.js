import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

function validate_dtraderpage(region)
{   
    cy.url().should('include', '/dtrader/')
    cy.title().should('eq', 'Deriv Trader | Online trading platform | Deriv')

    cy.findByRole('img', { name: 'Deriv Trader' }).should('be.visible')
    cy.findByText('Get into the Deriv Trader experience')
    cy.findByRole('img', { name: 'dtrader logo' }).should('be.visible')

    cy.findByText('Make a trade in 3 easy steps').should('be.visible')
    cy.findAllByRole('listitem').contains('Select an asset')
    cy.findByRole('img', { name: 'Select an asset' }).scrollIntoView().should("be.visible", {timeout: 50000,})
    cy.findAllByRole('listitem').contains('Monitor the chart').click();
    cy.findByRole('img', { name: 'Monitor the chart' }).scrollIntoView().should("be.visible", {timeout: 50000,})
    cy.findAllByRole('listitem').contains('Place a trade').click();
    cy.findByRole('img', { name: 'Place a trade' }).scrollIntoView().should("be.visible", {timeout: 50000,})

    
    if (region === 'ROW') {   
        const urlDetails = [
            {
                url:'/dmt5/',
                title:'Deriv MT5 | MetaTrader 5 trading platform | Deriv',
                content:'Get trading with Deriv MT5',
            }, 
            {
                url:'/dbot/',
                title:'DBot | Trading robot | Deriv',
                content:'Get into the Deriv Bot experience',
            }, 
            {
                url:'/deriv-go/',
                title:'Trade forex, synthetics, and cryptocurrencies with our app — Deriv GO.',
                content:'Get trading with Deriv GO',
            }, 
            {
                url:'/derivx/', 
                title:'Deriv X - a multi-asset CFD trading platform available on Deriv',
                content:'Get trading with Deriv X'
            }
        ];
        cy.findByRole('heading', { name: 'Check out our other platforms' }).should('be.visible')
        cy.c_checkAllPlatformLinks(urlDetails)
    }

    for(let index= 0; index < 2; index++)
    {
        cy.findAllByRole('link', { name: 'Go to live demo' },{timeout: 10000}).eq(index).invoke('attr','target','_self').click()
        cy.c_go('back')
    }
    cy.contains('Create free demo account').eq(0).click()
}

describe('QATEST-1529 - should validate the dtrader page in desktop', () => {

    it('should be able to navigate to dtrader page from home page and validate the page content and links for EU', () => {
        cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
        homeBanner.elements.tradeMenu().should('be.visible').click()
        cy.findAllByText('Deriv Trader').eq(0).should('be.visible').click();
        validate_dtraderpage('EU')
    })

    it('should be able to navigate to dtrader page from home page and validate the page content and links for ROW', () => {
        cy.c_visitResponsive('', 'desktop')
        homeBanner.elements.tradeMenu().should('be.visible').click()
        cy.findAllByText('Deriv Trader').eq(0).should('be.visible').click();
        validate_dtraderpage('ROW')
    })

})

describe('QATEST-1536 - should validate the dtrader page in responsive', () => {
    
    it('should be able to navigate to dtrader page from home page and validate the page content and links for EU', () => {
        cy.c_visitResponsive(Cypress.env('RegionEU'))
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        cy.c_waitForPageLoad()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.dtraderLink().should('be.visible').click()
        validate_dtraderpage('EU')
    })

    it('should be able to navigate to dtrader page from home page and validate the page content and links for ROW', () => {
        cy.c_visitResponsive('')
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        cy.c_waitForPageLoad()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.dtraderLink().should('be.visible').click()
        validate_dtraderpage('ROW')
    })
})


import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

function validate_dtraderpage(region)
{   
    cy.url().should('include', '/dtrader/')
    cy.title().should('eq', 'DTrader | Online trading platform | Deriv')

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
    cy.findByRole('heading', { name: 'Check out our other platforms' }).should('be.visible')
    for (let index = 0; index < 4; index++) 
       {
         cy.findAllByText('Learn more' , {timeout: 10000}).eq(index).click()
         cy.go(-1)
       }
    }

    for(let index= 0; index < 2; index++)
    {
        cy.findAllByRole('link', { name: 'Go to live demo' }).eq(index).click()
    }
    cy.contains('Create free demo account').eq(0).click()
}

describe('QATEST-1529 - should validate the dtrader page in desktop', () => {

    it.only('should be able to navigate to dtrader page from home page and validate the page content and links for EU', () => {
        cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
        homeBanner.elements.tradeMenu().should('be.visible').click()
        cy.findByText('Flagship options, accumulators, & multipliers trading platform.').should('be.visible').click();
        validate_dtraderpage('EU')
    })

    it('should be able to navigate to dtrader page from home page and validate the page content and links for ROW', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
        homeBanner.elements.tradeMenu().should('be.visible').click()
        cy.findByText('Flagship options, accumulators, & multipliers trading platform.').should('be.visible').click();
        validate_dtraderpage('ROW')
    })

})

describe('QATEST-1536 - should validate the dtrader page in responsive', () => {
    
    it('should be able to navigate to dtrader page from home page and validate the page content and links for EU', () => {
        cy.c_visitResponsive(Cypress.env('RegionEU'))
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.dtraderLink().should('be.visible').click()
        validate_dtraderpage('EU')
    })

    it('should be able to navigate to dtrader page from home page and validate the page content and links for ROW', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.dtraderLink().should('be.visible').click()
        validate_dtraderpage('ROW')
    })
})


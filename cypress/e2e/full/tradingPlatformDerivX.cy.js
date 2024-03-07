import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

function validate_derivxpage(region)
{   
    cy.url().should('include', '/derivx/')
    cy.title().should('eq', 'Deriv X - a multi-asset CFD trading platform available on Deriv')

    cy.findByRole('img', { name: 'Deriv X' }).should('be.visible')
    cy.findByText('Get trading with Deriv X')
    cy.findByRole('img', { name: 'Deriv X logo' }).should('be.visible')
    cy.findByText('Why trade with Deriv X').should('be.visible')
    cy.findByRole('heading', { name: 'What is Deriv X' }).should('be.visible')
    cy.findByRole('heading', { name: 'Why trade with Deriv X' }).should('be.visible')
    cy.findByRole('heading', { name: 'New and promising' }).should('be.visible')
    cy.findByRole('heading', { name: 'Multiple markets on a single platform'}).should('be.visible')
    cy.findByRole('heading', { name: '24/7 trading' }).should('be.visible')
    cy.findByRole('heading', { name: 'Bespoke trading experience' }).should('be.visible')
    cy.findByRole('heading', { name: 'Intuitive tools' }).should('be.visible')
    cy.findByRole('heading', { name: 'Know your margin' }).should('be.visible')
    cy.findByRole('img', { name: 'Know the margin impact on your CFD trading' }).scrollIntoView().should('be.visible')
    cy.findByRole('img', { name: 'Multiple charts to view your online trading' }).scrollIntoView().should('be.visible')
    
    cy.findByRole('heading', { name: 'How to get started with a Deriv X account' }).scrollIntoView().should('be.visible')
    cy.findByText('1. Sign in to your Deriv account. If you don’t have one, sign up for free.').click()
    cy.findByRole('img', { name: 'Deriv X demo account signup page' }).scrollIntoView().should('be.visible')
    cy.findByText('2. Add a Deriv X demo account.').click();
    cy.findByRole('img', { name: 'Deriv X dashboard showing demo account comparison' }).scrollIntoView().should('be.visible')
    cy.findByText('3. Start trading on the mobile app or through your web browser.').click()
    cy.findByRole('img', { name: 'Deriv X trading dashboard' }).scrollIntoView().should('be.visible')
    cy.findByText('Real account').click();
    cy.findByText('1. Sign in to your Deriv account. If you don’t have one, sign up for free.').click()
    cy.findByRole('img', { name: 'Sign in' }).scrollIntoView().should('be.visible')
    cy.findByText('2. Add a Deriv real account.').click();
    cy.findByRole('img', { name: 'real account' }).scrollIntoView().should('be.visible')
    cy.findByText('3. Add a Deriv X real account.').click();
    cy.findByRole('img', { name: 'Download the app' }).scrollIntoView().should('be.visible')
    cy.findByText('4. Start trading on the mobile app or through your web browser.').click()
    cy.findByRole('img', { name: 'Trading', exact: true }).scrollIntoView().should('be.visible')
    cy.findByText('Demo account', { exact: true }).click();
   
    cy.findByRole('img', { name: 'Deriv X logo' }).scrollIntoView().should('be.visible')
    cy.findByRole('heading', { name: 'Get trading with Deriv X' }).scrollIntoView().should('be.visible')
    cy.contains('Scan to download').should('be.visible')
   
    cy.findByRole('link', { name: 'Google Play', exact: true }).click()
    cy.findByRole('link', { name: 'App Store', exact: true }).click()
    cy.findByRole('link', { name: 'Use it on your Web Browser' }).click()
      

    if (region === 'ROW') {   
        const urlDetails = [
            {
                url:'/dmt5/',
                title:'Deriv MT5 | MetaTrader 5 trading platform | Deriv',
                content:'Get trading with Deriv MT5',
            }, 
            {
                url:'/dtrader/',
                title:'Deriv Trader | Online trading platform | Deriv',
                content:'Get into the Deriv Trader experience',
            }, 
            {
                url:'/deriv-go/',
                title:'Trade forex, synthetics, and cryptocurrencies with our app — Deriv GO.',
                content:'Get trading with Deriv GO',
            }, 
            {
                url:'/dbot/',
                title:'DBot | Trading robot | Deriv',
                content:'Get into the Deriv Bot experience',
            }
        ];
        cy.findByRole('heading', { name: 'Check out our other platforms' }).should('be.visible')
        cy.c_checkAllPlatformLinks(urlDetails)
    }
    cy.contains('Create free demo account').eq(0).click()

}

describe('QATEST-1571 - validate the derivx page', () => {

    it('should be able to navigate to derivx page from home page and validate the page content and links for ROW in desktop', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
        homeBanner.elements.tradeMenu().should('be.visible').click()
        cy.findAllByText('Deriv X').eq(0).should('be.visible').click()
        validate_derivxpage('ROW')
    })
    
   
    it('should be able to navigate to derivx page from home page and validate the page content and links for ROW in mobile', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.derivxLink().should('be.visible').click()
        validate_derivxpage('ROW')
    })
})


   


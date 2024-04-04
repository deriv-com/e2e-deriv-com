import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

function Dbot_page()
{
    cy.url().should('include', '/dbot/')
    cy.title().should('eq', 'DBot | Trading robot | Deriv');
    cy.findByRole('img', { name: 'Deriv Bot' }).should('be.visible')
    cy.findByText('Get into the Deriv Bot experience').should('be.visible')
    cy.findByRole('img', { name: 'dbot logo' }).should('be.visible')

    cy.findByRole('heading', { name: 'Check out our other platforms' }).should('be.visible')
    
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
            url:'/derivx/', 
            title:'Deriv X - a multi-asset CFD trading platform available on Deriv',
            content:'Get trading with Deriv X'
        }
    ]

    cy.c_checkAllPlatformLinks(urlDetails)

    cy.findByRole('heading', { name: 'Build your strategy visually' }, { timeout: 5000 }).should('be.visible')
    cy.findByRole('img', { name: 'Build your bot using drag and drop' }).click()
    cy.findByRole('heading', { name: 'Automate your trading ideas without writing code' }, { timeout: 10000 }).should('be.visible')

    for (let index = 0; index < 2; index++) 
    {
        cy.findAllByText('Create free demo account', { timeout: 5000 }).eq(index).click();
        cy.url().should('include', '/signup/')
        cy.get('input[id="email_address"]').should('exist')
        cy.c_go('back')
    }

    for (let index = 0; index < 2; index++) 
    {
        cy.findAllByRole('link', {name: 'Go to live demo'}, { timeout: 5000 }).eq(index).invoke('attr','target','_self').click()
        cy.c_go('back')
    }

    cy.findByText('Build a trading robot in 5 easy steps').should('be.visible')
    cy.findByText('1. Select an asset').click()
    cy.findByText('2. Set the purchase conditions').click()
    cy.findByRole('img', { name: 'purchase conditions' }).click()
    cy.findByText('3. Set the restart conditions').click();
    cy.findByRole('img', { name: 'restart conditions' }).click()
    cy.findByText('4. Run the bot').click()
    cy.findByRole('img', { name: 'Run the bot' }).click()
    cy.findByText('5. Check the profit').click()
    cy.findByRole('img', { name: 'Check the profit' }).click()
}

describe('QATEST-1548 - should validate the Dbot page in responsive', () => {

    it('should be able to navigate to Dbot page from home page and validate the page content and links in Mobile', () => {
        cy.c_visitResponsive('', {waitLoad: true})
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.derivBot().should('be.visible').click()
        Dbot_page()
    })
})
    describe('QATEST-1541 - should validate the Dbot page in desktop', () => {

        it('should be able to navigate to Dbot page from home page and validate the page content and links in Desktop', () => {
            cy.c_visitResponsive('', {size:'desktop'})
            homeBanner.elements.tradeMenu().should('be.visible').click()
            cy.findAllByText('Deriv Bot').eq(0).should('be.visible').click()
            Dbot_page()


         })    
})



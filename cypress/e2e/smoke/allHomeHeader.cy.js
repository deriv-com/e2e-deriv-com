import '@testing-library/cypress/add-commands'


function check_homepage_header (){
    cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible')
    cy.findByRole('link', { name: 'deriv-logo' })
      .should('be.visible').click()
    cy.url().should('include', '/')
    cy.findByText('EN', { exact: true }).should('be.visible')
}

function check_trade_menu(region) {
    cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible').click()

    cy.findByRole('button', { name: 'Trade chevron' }).should('be.visible').click()
    cy.findByLabelText('Trade').findByText('Trade types').should('be.visible')
    cy.findByRole('link', { name: 'CFDs trade type CFDs Trade with leverage and tight spreads for better returns on successful trades.' }).should('be.visible')
    cy.findByRole('link', { name: 'Deriv MT5 trading platform Deriv MT5 Trade on Deriv MT5, the all-in-one CFD trading platform.' }).should('be.visible')
        if (region === 'ROW') {
            cy.findByRole('link', { name: 'Options trade type Options Earn a range of payouts without risking more than your initial stake.' }).should('be.visible')
            cy.findByRole('link', { name: 'Multipliers trade type Multipliers Get the upside of CFDs without the downside of losing more than your stake.' }).should('be.visible')
            cy.findByRole('link', { name: 'Deriv X trading paltform Deriv X A highly customisable and easy-to-use CFD trading platform.' }).should('be.visible')
            cy.findByRole('link', { name: 'SmartTrader trading platform SmartTrader Trade the world’s markets with our popular user-friendly platform.' }).should('be.visible')
            cy.findByRole('link', { name: 'Deriv cTrader trading platform Deriv cTrader An intuitive, multi-asset CFD trading platform with copy trading and custom indicators.' }).scrollIntoView().should('be.visible')
            cy.findByRole('link', { name: 'Dtrader trading platform Deriv Trader A whole new trading experience on a powerful yet easy to use platform.' }).should('be.visible').should('be.visible')
            cy.findByRole('link', { name: 'Deriv GO mobile trading app Deriv GO Trade multipliers on forex, cryptocurrencies, and synthetic indices with our mobile app.' }).should('be.visible')
            cy.findByRole('link', { name: 'Deriv Bot Automated trading Deriv Bot Automated trading at your fingertips. No coding needed.' }).scrollIntoView().should('be.visible')
            cy.findByRole('link', { name: 'Binary bot for creating trading bot Binary Bot Our classic "drag-and-drop" tool for creating trading bots, featuring pop-up trading charts, for advanced users.' }).should('be.visible')
        }
        if (region === 'EU') {
            cy.findByRole('link', { name: 'Multipliers trade type Multipliers Get the upside of CFDs without the downside of losing more than your stake.' }).should('be.visible')
            cy.findByRole('link', { name: 'Deriv trader trading platform Deriv Trader A whole new trading experience on a powerful yet easy to use platform.' }).should('be.visible')

        }    
    cy.findByRole('button', { name: 'Trade chevron' }).scrollIntoView().should('be.visible').click()
    }

function check_market_menu(region) {
    cy.findByRole('button', { name: 'Markets chevron' }).should('be.visible').click()
    cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }).should('be.visible')
    cy.findByRole('link', { name: 'Stocks & indices Stocks & indices Predict broader market trends and diversify your risk with stocks & indices.' }).should('be.visible')
    cy.findByRole('link', { name: 'Commodities Commodities Trade natural resources that are central to the world\'s economy.' }).should('be.visible')
    cy.findByRole('link', { name: 'Cryptocurrencies Cryptocurrencies Trade with leverage on the price movement of popular crypto-fiat pairs.' }).should('be.visible')
    cy.findByRole('link', { name: 'Exchange-traded funds (ETFs) Exchange-traded funds (ETFs) Diversify your portfolio and enjoy low-cost intraday trading with ETFs.' }).should('be.visible')

    if (region === 'ROW') {
        cy.findByRole('link', {name: 'Synthetic indices Derived indices Enjoy trading asset prices derived from real-world or simulated markets.',}).should('be.visible')

    }
    if (region === 'EU') {
        cy.findByRole('link', {name: 'Synthetic indices Derived indices Enjoy trading asset prices derived from simulated markets.',}).should('be.visible')
}
    cy.findByRole('button', { name: 'Markets chevron' }).should('be.visible').click()
}


function check_legal_menu () {
    cy.findByRole('button', { name: 'Legal chevron' }).should('be.visible').click()
    cy.findByRole('link', { name: 'Regulatory information' }).should('be.visible')
    cy.findByLabelText('Legal').findByText('Terms and conditions').should('be.visible')
    cy.findByLabelText('Legal').findByText('Secure and responsible trading').should('be.visible')
    cy.findByLabelText('Legal').findByText('Terms and conditions').should('be.visible')
    cy.findByRole('button', { name: 'Legal chevron' }).should('be.visible').click()
}

function menu_checker(menuName, items) {
    return () => {
        cy.findByRole('button', { name: `${menuName} chevron` }).should('be.visible').click()

        items.forEach(subMenuItem => {
            const linkText = subMenuItem.text || subMenuItem
            cy.findByRole('link', { name: linkText }).should('be.visible')
        });

        cy.findByRole('button', { name: `${menuName} chevron` }).should('be.visible').click()
    };
}

const check_about_menu = menu_checker('About us', [
    'Who we are', 'Why choose us', 'Partnership programmes', 'Contact us', 'Careers', 'Deriv life',
])

const check_resources_menu = menu_checker('Resources', [
    'Help centre', 'Community', 'Traders’ tools', 'Payment methods', 'Deriv MT5 Signals', 'Status page', 'Deriv Blog',
])




function check_partner_menu(region) {
    cy.findByRole('button', { name: 'Partners chevron' }).should('be.visible').click()
    cy.findByRole('link', { name: 'Deriv Prime' }).should('be.visible')


    if (region === 'ROW') {
        cy.findByRole('link', { name: 'Affiliates and IBs' }).should('be.visible')
        cy.findByRole('link', { name: 'Payment agents' }).should('be.visible')
    }

    if (region === 'EU') {
        cy.findByRole('link', { name: 'Affiliates' }).should('be.visible')
    }

    cy.findByRole('link', { name: 'API' }).should('be.visible')
}

describe('QATEST-1298 - should validate home page header menu', () => {
    it('should be able to validate homepage header for ROW website', () => {
        cy.c_visitResponsive(`/${Cypress.env('RegionROW')}`)
        check_homepage_header()
        check_trade_menu('ROW')
        check_market_menu('ROW')
        check_about_menu()
        check_resources_menu()
        check_legal_menu()
        check_partner_menu('ROW')
        cy.findByRole('button', { name: 'Log in' }).should('be.visible')
    })

    it('should be able to validate homepage header for EU website', () => {
        cy.c_visitResponsive(`/${Cypress.env('RegionEU')}`)
        check_homepage_header()
        check_trade_menu('EU')
        check_market_menu('EU')
        check_about_menu()
        check_resources_menu()
        check_legal_menu()
        check_partner_menu('EU')
        cy.findByRole('button', { name: 'Log in' }).should('be.visible')
    });
});

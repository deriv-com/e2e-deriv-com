import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

function cTrader_page() {

    cy.url().should('include', '/deriv-ctrader/')
    cy.title().should('eq', 'cTrader | CFD copy trading platform | Deriv')
    cy.findByRole('img', { name: 'Deriv ctrader online trading platform' }).should('be.visible')
    cy.findByRole('heading', { name: 'What is Deriv cTrader', exact: true }).should('be.visible')
    cy.findByRole('heading', { name: 'How to get started with a Deriv cTrader account' }).should('be.visible')
   
    const Verify = (buttonName, message) => {
        cy.findByRole('button', { name: buttonName }).click();
        cy.contains(`2. Go to the Trader’s hub and choose the ${message} option.`).should('exist')
    };
      
     Verify('Demo account', 'Demo')
     Verify('Real account', 'Real')

    cy.findByRole('heading', { name: 'Check out our other platforms' }).should('be.visible')
    for (let index = 0; index < 4; index++) 
    {
        cy.findAllByText('Learn more' , {timeout: 10000}).eq(index).click()
        const urlPath = ['/dmt5/', '/dtrader/', '/deriv-go/', '/derivx/', '/dbot/'];

        cy.url().should(url => {
        expect(urlPath.some(path => url.includes(path))).to.be.true;
        });
        cy.go('back'); 
    }

    cy.findByRole('heading', { name: 'Browse our FAQ' }).should('be.visible')
    const toggleAccordion = (buttonName) => {
        cy.findByRole('button', { name: buttonName }).click();
        cy.get('.AccordionContentText').should('be.visible');
        cy.findByRole('button', { name: buttonName }).click();
      };
      toggleAccordion('What is Deriv cTrader?');
      toggleAccordion('What markets can I trade on Deriv cTrader?');
      toggleAccordion('How do I add a Deriv cTrader account?');
      toggleAccordion('How do I log in to my Deriv cTrader account?');
      toggleAccordion('How do I make deposits into my Deriv cTrader account?');
      toggleAccordion('How do I make withdrawals from my Deriv cTrader account?');
      toggleAccordion('What’s the minimum amount to open a position on Deriv cTrader?');
      toggleAccordion('Does Deriv cTrader offer any risk-management tools?');
      toggleAccordion('How do I get started as a copier?');
    
}


describe('QATEST-23425 - should validate the cTrader page in responsive', () => {

    it('should be able to navigate to cTrader page from home page and validate the page content and links in Mobile', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.cTraderLink().should('be.visible').click()
        cTrader_page()
    })
})
describe('QATEST-23425 - should validate the cTrader page in desktop', () => {

    it('should be able to navigate to cTrader page from home page and validate the page content and links in Desktop', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
        homeBanner.elements.tradeMenu().should('be.visible').click()
        cy.findByText('Fast CFDs platform with inbuilt copy trading.').should('be.visible').click()
        cTrader_page()
    })    
})
import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

const realtradetype = {
  EU: {
    types: [
      {realtext:'Create or sign in to your demo Deriv account',realimg:'Deriv MT5 demo account'},
      {realtext:'Create a Deriv real money account',realimg:'Deriv MT5 demo account'},
      {realtext:'Create a CFDs real account.',realimg:'Deriv MT5 demo account'},
      {realtext:'Fund your account. Start trading on the mobile app, desktop app, or web browser.',realimg:'Trading'}

    ],
  },
  ROW: {
    types: [
        {realtext:'Create or sign in to your demo Deriv account',realimg:'Sign up for a free'},
        {realtext:'Create a Deriv real money account',realimg:'Deriv MT5 demo account'},
        {realtext:'Create a Deriv MT5 real money account based on your trade preference.',realimg:'Deriv MT5 demo account'},
        {realtext:'Fund your account. Start trading on the mobile app, desktop app, or web browser.',realimg:'Deriv MT5 demo account'}
      ],
  },
}



const demotradetype = {
    EU: {
      types: [ 
      {demotext:'Sign up for a free' , demoimg:'Deriv MT5 demo account'},
      {demotext:'Add a CFDs demo account.' , demoimg:'Deriv MT5 demo account'},
      {demotext:'Practise trading from the mobile app, desktop app, or through your web browser.' , demoimg:'Deriv MT5 demo account'}
    ],
    
    },
    ROW: {
      types: [
        {demotext:'Sign up for a free Deriv demo account.' , demoimg:'Sign up for a free'},
        {demotext:'Add a Deriv MT5 demo account and choose what you want to trade.' , demoimg:'Deriv MT5 demo account'},
        {demotext:'Practise trading from the mobile app, desktop app, or through your web browser.' , demoimg:'Deriv MT5 demo account'}
      ],
    },
  };

  function proceedEU(region)
    {
  
      if (region === 'RegionEU'){
  cy.findByText('Redirect notice').should('be.visible')
  cy.findByRole('link', { name: 'Proceed' }).click()
      }
    }

function validate_dmt5page(region)
{   const config = demotradetype[region]
    const configreal = realtradetype[region]
    cy.url().should('include', '/dmt5/')
    cy.title().should('eq', 'Deriv MT5 | MetaTrader 5 trading platform | Deriv')

    cy.findByRole('img', { name: 'Deriv MT5' }).should('be.visible')
    cy.findByText('Get trading with Deriv MT5').should('be.visible')
    cy.findByRole('img', { name: 'Deriv MT5 logo' }).should('be.visible')

  config.types.forEach((demoaccount,index) => {
    if(index === 0)
    {
      cy.findAllByRole('listitem').contains(`${demoaccount.demotext}`).scrollIntoView()
      cy.findByRole('img', { name: `${demoaccount.demoimg}` }).scrollIntoView().should('be.visible')
    }
    if(index > 0){
    cy.findAllByRole('listitem').contains(`${demoaccount.demotext}`).scrollIntoView().click()
    cy.findByRole('img', { name: `${demoaccount.demoimg}` }).scrollIntoView().should('be.visible')}
  });
  

    cy.findByRole('heading', { name: 'How to get started with a Deriv MT5 account' }).scrollIntoView().should("be.visible", {timeout: 50000,})
    cy.findByText('Real account').click()

  configreal.types.forEach((realaccount,index) => {
    if(index === 0)
    {
      cy.findAllByRole('listitem').contains(`${realaccount.realtext}`).scrollIntoView()
    }

    if(index > 0){
    cy.findAllByRole('listitem').contains(`${realaccount.realtext}`).click()
    cy.findByRole('img', {name: `${realaccount.realimg}`}).scrollIntoView().should('be.visible')}
  })

    cy.findByRole('link', { name: 'sign in' }).click()
    cy.findByText('Welcome!').should('be.visible')
    cy.go('back')
    cy.url().should('include', '/dmt5/')

    cy.findByText('Demo account').click()

    cy.findByRole('img', { name: 'DMT5 margin trading calculator' }).scrollIntoView().should("be.visible", {timeout: 50000})
    cy.findByRole('link', {name: 'Try our margin calculator'}).click()
    cy.url().should('include', 'margin')
    cy.go('back')
    

    cy.findByRole('img', { name: 'DMT5 margin trading calculator' }).scrollIntoView().should("be.visible", {timeout: 50000,})
    cy.get('.carousel-style__StyledChevron-sc-tq0hsb-5.carousel-style__ChevronRight-sc-tq0hsb-8.cxwUxz.idFIDL').click()
    cy.findByRole('img', {name: 'DMT5 swap trading calculator'}).should('be.visible')
    cy.findByRole('link', {name: 'Try our swap calculator'}).click()
    cy.url().should('include', 'swap')
    cy.go('back')
    cy.get('.typography__Text-sc-10mkw78-0.typography__LinkText-sc-10mkw78-2.gYcoeS.lkBhkX').click()
    cy.findByRole('link', {name: 'Trade without commission'}).click()


    cy.findByRole('link', {name: 'Google Play'}).click()
    proceedEU(region)
    cy.findByRole('link', {name: 'App Store'}).click()
    proceedEU(region)
    cy.findByRole('link', {name: 'AppGallery'}).click()
    proceedEU(region)
    cy.findByRole('link', {name: 'Use it on your Web Browser'}).click()
    proceedEU(region)
    cy.findByRole('link', {name: 'Linux'}).click()
    proceedEU(region)
    cy.contains('Create free demo account').click()
    cy.findByText('Join over 2.5 million traders').should('be.visible')
    cy.go('back')

    

    
    if (region === 'ROW') {   
    cy.findByRole('heading', { name: 'Check out our other platforms' }).should('be.visible')
    for (let index = 0; index < 4; index++) 
       {
         cy.findAllByText('Learn more' , {timeout: 10000}).eq(index).click()
         cy.wait(1000)
         cy.go(-1)
         cy.url().should('include', '/dmt5/')
       }
    }


    cy.findByRole('link', { name: 'Deriv demo account' }).click()
    cy.findByText('Join over 2.5 million traders').should('be.visible')
    cy.go('back')
    
}

describe('QATEST-1553 - should validate the dmt5 page in desktop', () => {

    it('should be able to navigate to dmt5 page from home page and validate the page content and links for EU', () => {
        cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
        homeBanner.elements.tradeMenu().click()
        cy.findByText('The most popular and comprehensive CFDs platform.').should('be.visible').click()
        validate_dmt5page('EU')
    })

    it('should be able to navigate to dmt5 page from home page and validate the page content and links for ROW', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
        homeBanner.elements.tradeMenu().click()
        cy.findByText('The most popular and comprehensive CFDs platform.').should('be.visible').click()
        validate_dmt5page('ROW')
    })

})

describe('QATEST-1563 - should validate the dmt5 page in responsive', () => {
    
    it('should be able to navigate to dmt5 page from home page and validate the page content and links for EU', () => {
        cy.c_visitResponsive(Cypress.env('RegionEU'))
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.mt5Link().should('be.visible').click()
        validate_dmt5page('EU')
    })

    it('should be able to navigate to dmt5 page from home page and validate the page content and links for ROW', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        homeBanner.elements.hamBurgerMenu().should('be.visible').click()
        homeBanner.elements.tradeMenu().should('be.visible').click()
        homeBanner.elements.mt5Link().should('be.visible').click()
        validate_dmt5page('ROW')
    })
})
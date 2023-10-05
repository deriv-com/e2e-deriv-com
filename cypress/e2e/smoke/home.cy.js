import '@testing-library/cypress/add-commands'

describe('QATEST-1279 - Navigation Responsive - Menu items - EU and ROW', () => {

    //Click through menu-items and ensure links are vaild and load the next page. 
    it('Generic menu items', () => {
      cy.visitResponsive(Cypress.env('RegionEU'), 'small') //See custom command for details

      //Trade

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).click();
      cy.findByRole('link', { name: 'CFDs trade type CFDs Trade with leverage and tight spreads for better returns on successful trades.' }).click()
      cy.findByRole('heading', { name: 'CFD trading', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Options trade type Options Earn a range of payouts without risking more than your initial stake.' }).should('not.exist')

      cy.findByRole('button', { name: 'Trade chevron' }).click();
      cy.findByRole('link', { name: 'Multipliers trade type Multipliers Get the upside of CFDs without the downside of losing more than your stake.' }).click()
      cy.findByRole('heading', { name: 'Multipliers', exact: true }).should('be.visible')

      //Markets

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }).click()
      cy.findByRole('heading', { name: 'Forex', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Synthetic indices Derived indices Enjoy trading asset prices derived from simulated markets.' }).click()
      cy.findByRole('heading', { name: 'Derived indices' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Stocks & indices Stocks & indices Predict broader market trends and diversify your risk with stocks & indices.' }).click()
      cy.findByRole('heading', { name: 'Stocks & indices', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Commodities Commodities Trade natural resources that are central to the world\'s economy.' }).click()
      cy.findByRole('heading', { name: 'Commodities', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Cryptocurrencies Cryptocurrencies Trade with leverage on the price movement of popular crypto-fiat pairs.' }).click()
      cy.findByRole('heading', { name: 'Cryptocurrencies', exact: true }).should('be.visible')

      //About us

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Who we are' }).click()
      cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Why choose us' }).click()
      cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')

          //--> TODO - Partnership programmes

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Contact us' }).click()
      cy.findByRole('heading', { name: 'Contact us' }).should('be.visible')

          //--> TODO - Careers


      //Resources

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: 'Help centre' }).click()
      cy.findByRole('heading', { name: 'How can we help?' }).should('be.visible')

          //--> TODO - Community

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: "Traders’ tools" }).click();
      cy.findByRole('heading', { name: "Traders’ tools" }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: 'Payment methods', exact: true }).click()
      cy.findByRole('heading', { name: 'Payment methods' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: 'Deriv MT5 Signals' }).click()
      cy.findByRole('heading', { name: 'Deriv MT5 signals' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Resources chevron' }).click()
      cy.findByRole('link', { name: 'Status page' }).click()
      cy.findByRole('button', { name: 'Proceed' }).should('be.visible')

      //Legal

      cy.visitResponsive(Cypress.env('RegionEU'), 'small') //See custom command for details
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Legal chevron' }).click()
      cy.findByRole('link', { name: 'Regulatory information' }).click()
      cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Legal chevron' }).click()
      cy.findByLabelText('Legal').findByRole('link', { name: 'Terms and conditions' }).click()
      cy.findByRole('heading', { name: 'Terms and conditions' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Legal chevron' }).click()
      cy.findByLabelText('Legal').findByRole('link', { name: 'Secure and responsible trading' }).click()
      cy.findByRole('heading', { name: 'Secure and responsible trading' }).should('be.visible')

      //Partners

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Partners chevron' }).click()
      cy.findByRole('link', { name: 'Deriv Prime' }).click()
      cy.findByRole('heading', { name: 'Global liquidity for all' }).should('be.visible')

                //--> TODO - Affiliates
      // cy.findByRole('img', { name: 'hamburger menu' }).click()
      // cy.findByRole('button', { name: 'Partners chevron' }).click()
      // cy.findByRole('link', { name: 'Affiliates' }).click()
      // cy.findByRole('heading', { name: 'Partner with a trusted online trading provider' }).should('be.visible')

                //--> TODO - Deriv API
      // cy.visitResponsive(Cypress.env('RegionEU'), 'small') //See custom command for details
      // cy.findByRole('img', { name: 'hamburger menu' }).click()
      // cy.findByRole('button', { name: 'Partners chevron' }).click()
      // cy.findByRole('link', { name: 'API', exact: true }).click()
      // cy.findByRole('heading', { name: 'Deriv API', exact: true }).should('be.visible')

            //--> TODO - Community


    })

    //Click through menu-items and ensure links are vaild and load the next page. 
    it('ROW menu items', () => {

      //NB. The region switch doesn't work on the EU site at the moment.
      if (Cypress.env('skipROWTests') == false)
        {
        cy.visitResponsive(Cypress.env('RegionROW'), 'small') //See custom command for details

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Trade chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Options trade type Options Earn a range of payouts without risking more than your initial stake.' }).click()
        cy.findByRole('heading', { name: 'What are digital options?' }).should('be.visible')
        }

    })
})

describe('QATEST-1274 - Navigation Responsive - Open/Close Menu', () => {
    beforeEach(() => {
      cy.visitResponsive(Cypress.env('RegionEU'), 'small') //See custom command for details
    })

    it('Validate hamburger menu operation', () => {

      //Click on the hamburger menu, click on the X to close and the sub menuitems should no longer be visible (checking for the visibity of the Trade menu item should be good enough for this)
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('img', { name: 'close menu' }).click()
      cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible')

      //Click on the hamburger menu, click on the EN link and the sub menuitems should no longer be visible
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByText('EN', { exact: true }).click()
      cy.findByText('English').click()
      cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible')

      //Click on the hamburger menu, click on the Login link and the sub menuitems should no longer be visible
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByLabelText('Login').click()
      cy.findByRole('heading', { name: 'Welcome!' }).should('be.visible')

    })
})

describe('Validate Footer and Popup Icons', () => {
    beforeEach(() => {
      cy.visitResponsive(Cypress.env('RegionEU')) //See custom command for details
    })
    it('Validate footer exists', () => {
      cy.get('footer').should('exist')
    })
  
    it('Validate WhatsApp is available', () => {
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible')
    })
  
    //TODO find out why chat isn't popping up.
    // it('Validate Chat is available', () => {
    //   cy.findByRole('button', { name: 'livechat icon' }).should('be.visible')
    // })
})

describe('QATEST-1453 - Validate Spanish Language Change', () => {
  beforeEach(() => {
    cy.visitResponsive(Cypress.env('RegionEU')) //See custom command for details
    
  })

  it('Select Spanish and check with header changed', () => {
    cy.findByText('EN', { exact: true }).click()
    cy.findByText('Español').click()
    cy.findByRole('heading', { name: 'Un bróker, innumerables oportunidades de operación' })
  })
})

describe('Validate Hero banner message', () => {
  
  it('QATEST-1310 - ROW', () => {
    if (Cypress.env('skipROWTests') == false)
    {
      //TODO - Find out what should be different here otherwise, repeating the same tests seems unnecessary
      cy.visitResponsive(Cypress.env('RegionROW')) //See custom command for details
      cy.findByTestId('typewriter-wrapper').findByText('For').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Cry').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Sto').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Com').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Der').should('be.visible')
      cy.findByLabelText('create free demo account').click()
      cy.findByRole('heading', { name: 'Sign up' }).should('be.visible')
    }      
  })

  it('QATEST-1315 - EU', () => {
    cy.visitResponsive(Cypress.env('RegionEU')) //See custom command for details

    cy.findByTestId('typewriter-wrapper').findByText('For').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Cry').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Sto').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Com').should('be.visible')
    cy.findByTestId('typewriter-wrapper').findByText('Der').should('be.visible')
    cy.findByLabelText('create free demo account').click()
    cy.findByRole('heading', { name: 'Sign up' }).should('be.visible')
  })



})

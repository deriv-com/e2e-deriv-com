Cypress.Commands.add("validate_markets", (site) =>{
       if (site == 'row')
       {
       cy.findByText('GBP/USD').should('be.visible')
       cy.findByRole('img', { name: 'Derived indices' }).click();
       cy.findByText('Jump 50 Index').should('be.visible')
       cy.findByRole('img', { name: 'Stocks & indices' }).click();
       cy.findByText('US Tech 100').should('be.visible')
       cy.findByRole('img', { name: 'Cryptocurrencies' }).click();
       cy.findByText('DSH/USD').should('be.visible')
       cy.findByRole('img', { name: 'Commodities' }).click();
       cy.findByText('Gold/USD').should('be.visible')
       }
       else
       {
       cy.findByText('GBP/USD').should('be.visible') 
       cy.findByRole('img', { name: 'Derived indices' }).click();
       cy.findByText('Crash 300 Index').should('be.visible')
       cy.findByRole('img', { name: 'Stocks & indices' }).click();
       cy.findByText('US Tech 100').should('be.visible')
       cy.findByRole('img', { name: 'Cryptocurrencies' }).click();
       cy.findByText('DOG/USD').should('be.visible')
       cy.findByRole('img', { name: 'Commodities' }).click();
       cy.findByText('Gold/USD').should('be.visible')
       }
   })

Cypress.Commands.add("forex_viewall", (site) =>{
        if (site == 'row')
        {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        cy.findByRole('link', { name: 'View all >' }).click();
  
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('Major pairs').should('be.visible')
        cy.findByText('Minor pairs').should('be.visible')
        cy.findByText('Exotic pairs').should('be.visible')
        cy.findByText('Micro pairs').should('be.visible')

        cy.findByRole('heading', { name: 'Options' }).click();
        cy.findByText('Major pairs').should('be.visible')
        cy.findByText('Minor pairs').should('be.visible')

        cy.findByRole('heading', { name: 'Multipliers' }).click();
        cy.findByText('Major pairs').should('be.visible')
        }
        else
        {
        cy.c_visitResponsive(Cypress.env('RegionEU'))
        cy.findByRole('link', { name: 'View all >' }).click();
  
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('Major pairs').should('be.visible')
        cy.findByText('Minor pairs').should('be.visible')

        cy.findByRole('heading', { name: 'Multipliers' }).click();
        cy.findByText('Major pairs').should('be.visible')
        }
   })

Cypress.Commands.add("derivedindices_viewall", (site) =>{
        if (site == 'row')
        {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        cy.findByRole('img', { name: 'Derived indices' }).click();
        cy.findByRole('link', { name: 'View all >' }).click();
        cy.findByRole('button', { name: 'Synthetics' }).should('be.visible')
        
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('Drift switch indices').should('be.visible')
        cy.findByText('DEX indices').should('be.visible')
        cy.findByText('Volatility indices').should('be.visible')
        cy.findByText('Crash/Boom').should('be.visible')
        cy.findByText('Jump indices').should('be.visible')
        cy.findByText('Step indices').should('be.visible')
        cy.findByText('Range break indices').should('be.visible')
        
        cy.findByRole('heading', { name: 'Options' }).click();
        cy.findByText('Continuous indices').should('be.visible')
        cy.findByText('Jump indices').should('be.visible')
        cy.findByText('Daily reset indices').should('be.visible')
  
        cy.findByRole('heading', { name: 'Multipliers' }).click();
        cy.findByText('Continuous indices').should('be.visible')
        cy.findByText('Crash/Boom').should('be.visible')
        cy.findByText('Jump indices').should('be.visible')
        cy.findByText('Step indices').should('be.visible')
        
        cy.findByRole('button', { name: 'Baskets' }).click();
  
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('Commodities Basket').should('be.visible')
        cy.findByText('Forex Basket').should('be.visible')
  
        cy.findByRole('heading', { name: 'Options' }).click();
        cy.findByText('Commodities Basket').should('be.visible')
        cy.findByText('Forex Basket').should('be.visible')
  
        cy.findByRole('heading', { name: 'Multipliers' }).click();
        cy.findByText('Commodities Basket').should('be.visible')
        cy.findByText('Forex Basket').should('be.visible')
  
        cy.findByRole('button', { name: 'Derived FX' }).click();
  
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('Derived FX').should('be.visible')
        }
        else 
        {
        cy.c_visitResponsive(Cypress.env('RegionEU'))
        cy.findByRole('img', { name: 'Derived indices' }).click();
        cy.findByRole('link', { name: 'View all >' }).click();
        cy.findByRole('button', { name: 'Synthetics' }).should('be.visible')

        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible') 
        cy.findByText('Volatility indices').should('be.visible')
        cy.findByText('Crash/Boom').should('be.visible')

        cy.findByRole('heading', { name: 'Multipliers' }).click();
        cy.findByText('Continuous indices').should('be.visible')
        cy.findByText('Crash/Boom').should('be.visible')
        
        }
   })

   Cypress.Commands.add("stockindices_viewall", (site) =>{
        if (site == 'row')
        {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        cy.findByRole('img', { name: 'Stocks & indices' }).click();
        cy.findByRole('link', { name: 'View all >' }).click();
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('American indices').should('be.visible')
        cy.findByText('Asian indices').should('be.visible')
        cy.findByText('European indices').should('be.visible')
        cy.findByText('Stocks').should('be.visible')
  
        cy.findByRole('heading', { name: 'Options' }).click();
        cy.findByText('American indices').should('be.visible')
        cy.findByText('Asian indices').should('be.visible')
        cy.findByText('European indices').should('be.visible')
        }
        else
        {
        cy.c_visitResponsive(Cypress.env('RegionEU'))
        cy.findByRole('img', { name: 'Stocks & indices' }).click();
        cy.findByRole('link', { name: 'View all >' }).click();
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('American indices').should('be.visible')
        cy.findByText('Asian indices').should('be.visible')
        cy.findByText('European indices').should('be.visible')
        cy.findByText('Stocks').should('be.visible')   
        }
   })

   Cypress.Commands.add("cryptocurrencies_viewall", (site) =>{
        if (site == 'row')
        {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        cy.findByRole('img', { name: 'Cryptocurrencies' }).click();
        cy.findByRole('link', { name: 'View all >' }).click();
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('Crypto pairs').should('be.visible')
  
        cy.findByRole('heading', { name: 'Multipliers' }).click();
        cy.findByText('Crypto pairs').should('be.visible')
        }
        else
        {
        cy.c_visitResponsive(Cypress.env('RegionEU'))
        cy.findByRole('img', { name: 'Cryptocurrencies' }).click();
        cy.findByRole('link', { name: 'View all >' }).click();
        cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
        cy.findByText('Crypto pairs').should('be.visible')
      
        cy.findByRole('heading', { name: 'Multipliers' }).click();
        cy.findByText('Crypto pairs').should('be.visible')   
        }
   })

   Cypress.Commands.add("commodities_viewall", (site) =>{
       if (site == 'row')
       {
       cy.c_visitResponsive(Cypress.env('RegionROW'))
       cy.findByRole('img', { name: 'Commodities' }).click();
       cy.findByRole('link', { name: 'View all >' }).click();
       cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
       cy.findByText('Metals').should('be.visible')
       cy.findByText('Energy').should('be.visible')

       cy.findByRole('heading', { name: 'Options' }).click();
       cy.findByText('Metals').should('be.visible')
       cy.findByText('Energy').should('be.visible')
       }
       else
       {
       cy.c_visitResponsive(Cypress.env('RegionEU'))
       cy.findByRole('img', { name: 'Commodities' }).click();
       cy.findByRole('link', { name: 'View all >' }).click();
       cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
       cy.findByText('Metals').should('be.visible')
       cy.findByText('Energy').should('be.visible') 
       }
   })
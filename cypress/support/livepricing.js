Cypress.Commands.add('validate_markets', (site) => {
  if (site == 'row') {
    cy.findByText('GBP/USD').should('be.visible')
    cy.findByRole('img', { name: 'Derived indices' }).click()
    cy.findByText('Jump 50 Index').should('be.visible')
    cy.findByRole('img', { name: 'Stocks & indices' }).click()
    cy.findByText('US Tech 100').should('be.visible')
    cy.findByRole('img', { name: 'Cryptocurrencies' }).click()
    cy.findByText('DSH/USD').should('be.visible')
    cy.findByRole('img', { name: 'Commodities' }).click()
    cy.findByText('Gold/USD').should('be.visible')
  } else {
    cy.findByText('GBP/USD').should('be.visible')
    cy.findByRole('img', { name: 'Derived indices' }).click()
    cy.findByText('Crash 300 Index').should('be.visible')
    cy.findByRole('img', { name: 'Stocks & indices' }).click()
    cy.findByText('US Tech 100').should('be.visible')
    cy.findByRole('img', { name: 'Cryptocurrencies' }).click()
    cy.findByText('DOG/USD').should('be.visible')
    cy.findByRole('img', { name: 'Commodities' }).click()
    cy.findByText('Gold/USD').should('be.visible')
  }
})

function forex_instruments_row() {
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Major pairs').should('be.visible')
  cy.findByText('Minor pairs').should('be.visible')
  cy.findByText('Exotic pairs').should('be.visible')
  cy.findByText('Micro pairs').should('be.visible')
  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Major pairs').should('be.visible')
  cy.findByText('Minor pairs').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Major pairs').should('be.visible')
}

function forex_instruments_eu() {
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Major pairs').should('be.visible')
  cy.findByText('Minor pairs').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Major pairs').should('be.visible')
}

function derivedindices_row() {
  cy.findByRole('img', { name: 'Derived indices' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('button', { name: 'Synthetics' }).should('be.visible')
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Drift switching indices').should('be.visible')
  cy.findByText('DEX indices').should('be.visible')
  cy.findByText('Volatility indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
  cy.findByText('Jump indices').should('be.visible')
  cy.findByText('Step indices').should('be.visible')
  cy.findByText('Range break indices').should('be.visible')
  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Continuous indices').should('be.visible')
  cy.findByText('Jump indices').should('be.visible')
  cy.findByText('Daily reset indices').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Continuous indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
  cy.findByText('Jump indices').should('be.visible')
  cy.findByText('Step indices').should('be.visible')
  cy.findByRole('button', { name: 'Baskets' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Commodities Basket').should('be.visible')
  cy.findByText('Forex Basket').should('be.visible')
  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Commodities Basket').should('be.visible')
  cy.findByText('Forex Basket').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Commodities Basket').should('be.visible')
  cy.findByText('Forex Basket').should('be.visible')
  cy.findByRole('button', { name: 'Derived FX' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Derived FX').should('be.visible')
}

function derivedindices_eu() {
  cy.findByRole('img', { name: 'Derived indices' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('button', { name: 'Synthetics' }).should('be.visible')
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Volatility indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Continuous indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
}

function stockindices_row() {
  cy.findByRole('img', { name: 'Stocks & indices' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('American indices').should('be.visible')
  cy.findByText('Asian indices').should('be.visible')
  cy.findByText('European indices').should('be.visible')
  cy.findByText('Stocks').should('be.visible')
  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('American indices').should('be.visible')
  cy.findByText('Asian indices').should('be.visible')
  cy.findByText('European indices').should('be.visible')
}

function stockindices_eu() {
  cy.findByRole('img', { name: 'Stocks & indices' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('American indices').should('be.visible')
  cy.findByText('Asian indices').should('be.visible')
  cy.findByText('European indices').should('be.visible')
  cy.findByText('Stocks').should('be.visible')
}

function cryptocurrencies_row() {
  cy.findByRole('img', { name: 'Cryptocurrencies' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Crypto pairs').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Crypto pairs').should('be.visible')
}

function cryptocurrencies_eu() {
  cy.findByRole('img', { name: 'Cryptocurrencies' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Crypto pairs').should('be.visible')

  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Crypto pairs').should('be.visible')
}

function commodities_row() {
  cy.findByRole('img', { name: 'Commodities' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')

  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')
}

function commodities_eu() {
  cy.findByRole('img', { name: 'Commodities' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')
}

Cypress.Commands.add('forex_viewall', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      forex_instruments_row()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      forex_instruments_row()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      forex_instruments_eu()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      forex_instruments_eu()
    }
  }
})

Cypress.Commands.add('derivedindices_viewall', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      derivedindices_row()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      derivedindices_row()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      derivedindices_eu()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      derivedindices_eu()
    }
  }
})

Cypress.Commands.add('stockindices_viewall', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      stockindices_row()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      stockindices_row()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      stockindices_eu()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      stockindices_eu()
    }
  }
})

Cypress.Commands.add('cryptocurrencies_viewall', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      cryptocurrencies_row()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      cryptocurrencies_row()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      cryptocurrencies_eu()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      cryptocurrencies_eu()
    }
  }
})

Cypress.Commands.add('commodities_viewall', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      commodities_row()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      commodities_row()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      commodities_eu()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      commodities_eu()
    }
  }
})

Cypress.Commands.add('check_tradingspecs_and_tradenow_button', () => {
  const externalUrls = Cypress.config('externalUrls')
  cy.findByRole('link', { name: 'Check trading specs' }).click()
  cy.url().should('include', 'trading-specification')
  cy.findByText('Trading specifications for CFDs on Deriv').should('be.visible')
  cy.go(-1)
  cy.url().then((url) => {
     if (url.includes(externalUrls.stagingderivURL) || url.includes(externalUrls.derivURL)) 
     {
       cy.findByRole('button', { name: 'Trade now' }).click()
       cy.get('.title-text').contains('Welcome!').should('be.visible');
     } 
     else 
     {
       cy.findByRole('button', { name: 'Trade now' }).click()
       cy.origin(externalUrls.loginURL, () => {
       cy.get('.title-text').contains('Welcome!').should('be.visible');
       })
     }
   })
 })

 Cypress.Commands.add('check_homepage_header', () => {

  cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible');
  cy.findByRole('link', { name: 'deriv-logo' })
    .should('be.visible').click()
  cy.url().should('include', '/')
  cy.findByText('EN', { exact: true }).should('be.visible');

 })

 Cypress.Commands.add('check_hamburger_menu', () => {
  cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible').click()
  cy.findByRole('button', { name: 'Trade chevron' }).should('be.visible')
  cy.findByRole('button', { name: 'Markets chevron' }).should('be.visible')
  cy.findByRole('button', { name: 'About us chevron' }).should('be.visible')
  cy.findByRole('button', { name: 'Resources chevron' }).should('be.visible')
  cy.findByRole('button', { name: 'Legal chevron' }).should('be.visible')
  cy.findByRole('button', { name: 'Partners chevron' }).should('be.visible')
  cy.findByRole('img', { name: 'close menu' }).click()

 })




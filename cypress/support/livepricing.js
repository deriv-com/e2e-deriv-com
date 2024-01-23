Cypress.Commands.add('validate_markets', (site) => {
  if (site == 'row') {
    cy.findByText('AUD/USD').should('be.visible')
    cy.findByRole('tab', { name: 'Derived indices' }).click()
    cy.findByText('Crash 1000 Index').should('be.visible')
    cy.findByRole('tab', { name: 'ETFs' }).click()
    cy.findByText('Gold Miners (GDX)').should('be.visible')
    cy.findByRole('tab', { name: 'Stocks & indices' }).click()
    cy.findByText('Apple (APPL)').should('be.visible')
    cy.findByRole('tab', { name: 'Cryptocurrencies' }).click()
    cy.findByText('BTC/USD').should('be.visible')
    cy.findByRole('tab', { name: 'Commodities' }).click()
    cy.findByText('Silver/USD').should('be.visible')
  } 
  else{
    cy.findByText('AUD/USD').should('be.visible')
    cy.findByRole('tab', { name: 'Derived indices' }).click()
    cy.findByText('Crash 300 Index').should('be.visible')
    cy.findByRole('tab', { name: 'ETFs' }).click()
    cy.findByText('Gold Miners (GDX)').should('be.visible')
    cy.findByRole('tab', { name: 'Stocks & indices' }).click()
    cy.findByText('Apple (APPL)').should('be.visible')
    cy.findByRole('tab', { name: 'Cryptocurrencies' }).click()
    cy.findByText('BTC/USD').should('be.visible')
    cy.findByRole('tab', { name: 'Commodities' }).click()
    cy.findByText('Silver/USD').should('be.visible')

  }
  
})


  
function forex_instruments_row() {
  cy.findByRole('link', { name: 'See all forex pairs' }).click()
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
  cy.findByRole('link', { name: 'See all forex pairs' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Major pairs').should('be.visible')
  cy.findByText('Minor pairs').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Major pairs').should('be.visible')
}

function derivedindices_row() {
  cy.findByRole('tab', { name: 'Derived indices' }).click()
  cy.findByRole('link', { name: 'See all derived indices pairs' }).click()
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
  cy.findByRole('tab', { name: 'Derived indices' }).click()
  cy.findByRole('link', { name: 'See all derived indices pairs' }).click()
  cy.findByRole('button', { name: 'Synthetics' }).should('be.visible')
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Volatility indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Continuous indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
}

function stockindices_row() {
  cy.findByRole('tab', { name: 'Stocks & indices' }).click()
  cy.findByRole('link', { name: 'See all stocks & indices pairs' }).click()
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
  cy.findByRole('tab', { name: 'Stocks & indices' }).click()
  cy.findByRole('link', { name: 'See all stocks & indices pairs' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('American indices').should('be.visible')
  cy.findByText('Asian indices').should('be.visible')
  cy.findByText('European indices').should('be.visible')
  cy.findByText('Stocks').should('be.visible')
}

function cryptocurrencies_row() {
  cy.findByRole('tab', { name: 'Cryptocurrencies' }).click()
  cy.findByRole('link', { name: 'See all cryptocurrencies'}).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Crypto pairs').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Crypto pairs').should('be.visible')
}

function cryptocurrencies_eu() {
  cy.findByRole('tab', { name: 'Cryptocurrencies' }).click()
  cy.findByRole('link', { name: 'See all cryptocurrencies' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Crypto pairs').should('be.visible')

  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Crypto pairs').should('be.visible')
}

function commodities_row() {
  cy.findByRole('tab', { name: 'Commodities' }).click()
  cy.findByRole('link', { name: 'See all commodities' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')

  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')
}

function commodities_eu() {
  cy.findByRole('tab', { name: 'Commodities' }).click()
  cy.findByRole('link', { name: 'See all commodities' }).click()
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

Cypress.Commands.add('check_buy_sell_button', () => {
      cy.findAllByRole('button', { name: 'Buy' }).first().click()
      cy.url().should('include', '/signup/')
      cy.go('back');
      cy.findAllByRole('button', { name: 'Sell' }).first().click()
      cy.go(-1);
})





Cypress.Commands.add('shouldHaveCorrectMarkets', (site) => {
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

function shouldHaveRowForexInstruments() {
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

function shouldHaveEuForexInstruments() {
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Major pairs').should('be.visible')
  cy.findByText('Minor pairs').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Major pairs').should('be.visible')
}

function shouldHaveRowDerivedIndices() {
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

function shouldHaveEuDerivedIndices() {
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

function shouldHaveRowStockIndices() {
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

function shouldHaveEuStockIndices() {
  cy.findByRole('img', { name: 'Stocks & indices' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('American indices').should('be.visible')
  cy.findByText('Asian indices').should('be.visible')
  cy.findByText('European indices').should('be.visible')
  cy.findByText('Stocks').should('be.visible')
}

function shouldHaveRowCryptocurrencies() {
  cy.findByRole('img', { name: 'Cryptocurrencies' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Crypto pairs').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Crypto pairs').should('be.visible')
}

function shouldHaveEuCryptocurrencies() {
  cy.findByRole('img', { name: 'Cryptocurrencies' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Crypto pairs').should('be.visible')

  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Crypto pairs').should('be.visible')
}

function shouldHaveRowCommodities() {
  cy.findByRole('img', { name: 'Commodities' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')

  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')
}

function shouldHaveEuCommodities() {
  cy.findByRole('img', { name: 'Commodities' }).click()
  cy.findByRole('link', { name: 'View all >' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')
}

Cypress.Commands.add('forexViewAll', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      shouldHaveRowForexInstruments()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      shouldHaveRowForexInstruments()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      shouldHaveEuForexInstruments()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      shouldHaveEuForexInstruments()
    }
  }
})

Cypress.Commands.add('derivedIndicesViewAll', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      shouldHaveRowDerivedIndices()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      shouldHaveRowDerivedIndices()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      shouldHaveEuDerivedIndices()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      shouldHaveEuDerivedIndices()
    }
  }
})

Cypress.Commands.add('stockIndicesViewAll', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      shouldHaveRowStockIndices()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      shouldHaveRowStockIndices()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      shouldHaveEuStockIndices()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      shouldHaveEuStockIndices()
    }
  }
})

Cypress.Commands.add('cryptocurrenciesViewAll', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      shouldHaveRowCryptocurrencies()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      shouldHaveRowCryptocurrencies()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      shouldHaveEuCryptocurrencies()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      shouldHaveEuCryptocurrencies()
    }
  }
})

Cypress.Commands.add('commoditiesViewAll', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      shouldHaveRowCommodities()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      shouldHaveRowCommodities()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      shouldHaveEuCommodities()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      shouldHaveEuCommodities()
    }
  }
})


Cypress.Commands.add('checkTradingSpecsAndTradeNowButton', () => {
  const externalEUUrls = Cypress.config('externalEUUrls')
  cy.findByRole('link', { name: 'Check trading specs' }).click()
  cy.url().should('include', 'trading-specification')
  cy.findByText('Trading specifications for CFDs on Deriv').should('be.visible')
  cy.go(-1)
  cy.url().then((url) => {
     if (url.includes(externalEUUrls.stagingDerivUrl) || url.includes(externalEUUrls.derivUrl)) 
     {
       cy.findByRole('button', { name: 'Trade now' }).click()
       cy.get('.title-text').contains('Welcome!').should('be.visible');
     } 
     else 
     {
       cy.findByRole('button', { name: 'Trade now' }).click()
       cy.origin(externalEUUrls.loginURL, () => {
       cy.get('.title-text').contains('Welcome!').should('be.visible');
       })
     }
   })
 })

  
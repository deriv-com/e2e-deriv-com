const etfArray = ["AGG.US", "IWM.US", "IEMG.US", "ARRK.US", "DIA.US", "EEM.US", "EFA.US", "ERX.US", "GDX.US", "GLD.US", "HYG.US", "IEMG.US", "IJR.US", "IVV.US", "IVW.US", "LQD.US", "QID.US", "SDS.US", "SLV.US", "SPXS.US", "SPY.US", "TBT.US", "TQQQ.US", "UNG.US", "VEA.US", "VNQ.US", "VOO.US", "VTI.US", "VWO.US", "XLE.US", "XLF.US","XLK.US"]
const forexArray = ["AUD/JPY", "AUD/USD", "EUR/AUD", "EUR/CAD", "EUR/CHF", "EUR/GBP", "EUR/JPY", "EUR/USD", "GBP/AUD", "GBP/JPY", "GBP/USD", "USD/CAD", "USD/CHF", "USD/JPY", "AUD/CAD", "AUD/CHF", "AUD/NZD", "CAD/CHF", "CAD/JPY", "CHF/JPY", "EUR/NOK", "EUR/NZD", "EUR/PLN", "EUR/SEK", "GBP/CAD", "GBP/CHF", "GBP/NOK", "GBP/NZD", "GBP/SEK", "NZD/CAD", "NZD/JPY", "NZD/USD", "USD/CNH", "USD/MXN", "USD/NOK", "USD/PLN", "USD/SEK", "USD/ZAR", "AUD/SGD", "EUR/HKD", "EUR/ILS", "EUR/MXN", "EUR/SGD", "EUR/ZAR", "GBP/SGD", "HKD/JPY", "NZD/CHF", "NZD/SGD", "SGD/JPY", "USD/HKD", "USD/ILS", "USD/RUB", "USD/SGD", "USD/THB"]
const derivedindicesSyntheticsCFDArray = ["DSI10", "DSI20", "DSI30", "DEX 600UP", "DEX 900UP", "DEX 1500UP", "DEX 600DN", "DEX 900DN", "DEX 1500DN","Volatility 10 (1s) Index", "Volatility 25 (1s) Index", "Volatility 50 (1s) Index", "Volatility 75 (1s) Index", "Volatility 100 (1s) Index", "Volatility 150 (1s) Index", "Volatility 250 (1s) Index", "Volatility 10 Index", "Volatility 25 Index", "Volatility 50 Index", "Volatility 75 Index", "Volatility 100 Index", "Volatility 15 (1s) Index", "Volatility 30 (1s) Index", "Volatility 90 (1s) Index","Crash 300 Index", "Crash 500 Index", "Crash 1000 Index", "Boom 300 Index", "Boom 500 Index", "Boom 1000 Index", "Crash 600 Index", "Crash 900 Index", "Boom 600 Index", "Boom 900 Index","Jump 10 Index", "Jump 25 Index", "Jump 50 Index", "Jump 75 Index", "Jump 100 Index","Step Index","Range Break 100 Index", "Range Break 200 Index","Step 100","Step 200","Step 300","Step 400","Step 500"]
const derivedindicesSyntheticsOptionsArray = ["Volatility 10 (1s) Index", "Volatility 25 (1s) Index", "Volatility 50 (1s) Index", "Volatility 75 (1s) Index", "Volatility 100 (1s) Index", "Volatility 150 (1s) Index", "Volatility 250 (1s) Index", "Volatility 10 Index", "Volatility 25 Index", "Volatility 50 Index", "Volatility 75 Index", "Volatility 100 Index", "Jump 10 Index", "Jump 25 Index", "Jump 50 Index", "Jump 75 Index", "Jump 100 Index" , "Bear Market Index", "Bull Market Index"]
const derivedindicesSyntheticsMultipliersArray = ["Volatility 10 (1s) Index", "Volatility 25 (1s) Index", "Volatility 50 (1s) Index", "Volatility 75 (1s) Index", "Volatility 100 (1s) Index", "Volatility 150 (1s) Index", "Volatility 250 (1s) Index", "Volatility 10 Index", "Volatility 25 Index", "Volatility 50 Index", "Volatility 75 Index", "Volatility 100 Index", "Volatility 15 (1s) Index", "Volatility 30 (1s) Index", "Volatility 90 (1s) Index","Boom 500 Index", "Boom 1000 Index","Crash 500 Index", "Crash 1000 Index","Jump 10 Index", "Jump 25 Index", "Jump 50 Index", "Jump 75 Index", "Jump 100 Index","Step Index"]
const derivedSyntheticsEU = ["Volatility 150 (1s) Index","Volatility 250 (1s) Index","Crash 300 Index","Boom 300 Index"]
const derivedindicesBasketArray = ["Gold Basket","AUD Basket", "EUR Basket", "GBP Basket", "USD Basket"]
const forexBasketArray = ["AUD Basket", "EUR Basket", "GBP Basket", "USD Basket"]
const derivedFXArray = ["GBP/USD DFX10 Index", "EUR/USD DFX10 Index", "AUD/USD DFX10 Index", "USD/JPY DFX10 Index", "USD/CHF DFX10 Index", "GBP/USD DFX20 Index", "EUR/USD DFX20 Index", "AUD/USD DFX20 Index", "USD/JPY DFX20 Index", "USD/CHF DFX20 Index"]
const cryptoCurrenciesArray = ["ALG/USD","ADA/USD","AVA/USD","BAT/USD","BCH/USD","BNB/USD","BTC/USD","BTC/ETH","BTC/LTC","DOG/USD","DOT/USD","DSH/USD","EOS/USD","ETC/USD","ETH/USD","FIL/USD","IOT/USD","LNK/USD","LTC/USD","MKR/USD","MTC/USD","NEO/USD","OMG/USD","SOL/USD","TRX/USD","UNI/USD","XMR/USD","XLM/USD","XRP/USD","XTZ/USD","ZEC/USD"]
const commoditiesCFDArray = ["Aluminium/USD","Copper/USD","Gold/EUR","Gold/USD","Lead/USD","Nickel/USD","Palladium/USD","Oil/USD","Platinum/USD","Silver/EUR","Silver/USD","Zinc/USD","Brent crude oil","West Texas Intermediate"]

function validateInstruments(array) {
  cy.findAllByRole('img', { name: 'symbol' }).siblings('p').each(($p) => {
    const text = $p.text().trim()
    if (array.includes(text)) {
      cy.log(`Instrument: ${text}`)
    } else {
      throw new Error(`Element with text '${text}' not found in the Array`)
    }
  })
}

Cypress.Commands.add('c_validateMarkets', (site) => {
  if (site == 'row') {
    cy.findByText('AUD/USD').should('be.visible')
    cy.findByRole('tab', { name: 'Derived indices' }).click()
    cy.findByText('Crash 1000 Index').scrollIntoView().should('be.visible')
    cy.findByRole('tab', { name: 'ETFs' }).click()
    cy.findByText('Gold Miners (GDX)').scrollIntoView().should('be.visible')
    cy.findByRole('tab', { name: 'Stocks & indices' }).click()
    cy.findByText('Apple (APPL)').scrollIntoView().should('be.visible')
    cy.findByRole('tab', { name: 'Cryptocurrencies' }).click()
    cy.findByText('BTC/USD').scrollIntoView().should('be.visible')
    cy.findByRole('tab', { name: 'Commodities' }).click()
    cy.findByText('Silver/USD').scrollIntoView().should('be.visible')
  } 
  else{
    cy.findByText('AUD/USD').should('be.visible')
    cy.findByRole('tab', { name: 'Derived indices' }).click()
    cy.findByText('Boom 300 Index').scrollIntoView().should('be.visible')
    cy.findByRole('tab', { name: 'ETFs' }).click()
    cy.findByText('MSCI Emerging Markets (EEM)').scrollIntoView().should('be.visible')
    cy.findByRole('tab', { name: 'Stocks & indices' }).click()
    cy.findByText('Apple (APPL)').scrollIntoView().should('be.visible')
    cy.findByRole('tab', { name: 'Cryptocurrencies' }).click()
    cy.findByText('ADA/USD').scrollIntoView().should('be.visible')
    cy.findByRole('tab', { name: 'Commodities' }).click()
    cy.findByText('West Texas Intermediate').scrollIntoView().should('be.visible')

  }

})

function forex_instruments_row() {
  cy.findByRole('link', { name: 'See all forex pairs' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Major pairs').should('be.visible')
  cy.findByText('Minor pairs').should('be.visible')
  cy.findByText('Exotic pairs').should('be.visible')
  cy.findByText('Micro pairs').should('be.visible')
  validateInstruments(forexArray)
  
  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Major pairs').should('be.visible')
  cy.findByText('Minor pairs').should('be.visible')
  validateInstruments(forexArray)
  
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Major pairs').should('be.visible')
  validateInstruments(forexArray)
}

function forex_instruments_eu() {
  cy.findByRole('link', { name: 'See all forex pairs' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Major pairs').should('be.visible')
  cy.findByText('Minor pairs').should('be.visible')
  validateInstruments(forexArray)

  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Major pairs').should('be.visible')
  validateInstruments(forexArray)
}

function derivedindices_row() {
  cy.findByRole('tab', { name: 'Derived indices' }).click()
  cy.findByRole('link', { name: 'See all derived indices' }).click()
  cy.findByRole('button', { name: 'Synthetics' }).should('be.visible')
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Drift switching indices').should('be.visible')
  cy.findByText('DEX indices').should('be.visible')
  cy.findByText('Volatility indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
  cy.findByText('Jump indices').should('be.visible')
  cy.findByText('Step indices').should('be.visible')
  cy.findByText('Range break indices').should('be.visible')
  validateInstruments(derivedindicesSyntheticsCFDArray)
  
  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Continuous indices').should('be.visible')
  cy.findByText('Jump indices').should('be.visible')
  cy.findByText('Daily reset indices').should('be.visible')
  validateInstruments(derivedindicesSyntheticsOptionsArray)
  
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Continuous indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
  cy.findByText('Jump indices').should('be.visible')
  cy.findByText('Step indices').should('be.visible')
  validateInstruments(derivedindicesSyntheticsMultipliersArray)
  
  cy.findByRole('button', { name: 'Baskets' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Commodities Basket').should('be.visible')
  cy.findByText('Forex Basket').should('be.visible')
  validateInstruments(derivedindicesBasketArray)
 
  cy.findByRole('heading', { name: 'Options' }).click()
  cy.findByText('Commodities Basket').should('be.visible')
  cy.findByText('Forex Basket').should('be.visible')
  validateInstruments(derivedindicesBasketArray)
  
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Commodities Basket').should('be.visible')
  cy.findByText('Forex Basket').should('be.visible')
  validateInstruments(derivedindicesBasketArray)
  cy.findByRole('button', { name: 'Derived FX' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Derived FX').should('be.visible')
}

function derivedindices_eu() {
  cy.findByRole('tab', { name: 'Derived indices' }).click()
  cy.findByRole('link', { name: 'See all derived indices' }).click()
  cy.findByRole('button', { name: 'Synthetics' }).should('be.visible')
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Volatility indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Continuous indices').should('be.visible')
  cy.findByText('Crash/Boom').should('be.visible')
  validateInstruments(derivedSyntheticsEU)
}

function stockindices_row() {
  cy.findByRole('tab', { name: 'Stocks & indices' }).click()
  cy.findByRole('link', { name: 'See all stocks & indices' }).click()
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
  cy.findByRole('link', { name: 'See all stocks & indices'}).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('American indices').should('be.visible')
  cy.findByText('Asian indices').should('be.visible')
  cy.findByText('European indices').should('be.visible')
  cy.findByText('Stocks').should('be.visible')
}

function cryptocurrencies_row() {
  cy.findByRole('tab', { name: 'Cryptocurrencies' }).click()
  cy.findByRole('link', { name: 'See all cryptocurrencies' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Crypto pairs').should('be.visible')
  validateInstruments(cryptoCurrenciesArray)
  cy.findByRole('heading', { name: 'Multipliers' }).click()
  cy.findByText('Crypto pairs').should('be.visible')
}

function cryptocurrencies_eu() {
  cy.findByRole('tab', { name: 'Cryptocurrencies' }).click()
  cy.findByRole('link', { name: 'See all cryptocurrencies' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Crypto pairs').should('be.visible')
  validateInstruments(cryptoCurrenciesArray)
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
  validateInstruments(commoditiesCFDArray)
}

function commodities_eu() {
  cy.findByRole('tab', { name: 'Commodities' }).click()
  cy.findByRole('link', { name: 'See all commodities' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText('Metals').should('be.visible')
  cy.findByText('Energy').should('be.visible')
  validateInstruments(commoditiesCFDArray)
}

function etf_row(){
  cy.findByRole('tab', { name: 'ETFs' }).click()
  cy.findByRole('link', { name: 'See all ETFs' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.get('[class^="at-flex instrumental-table-module--instrumental_left_item--"]').find('p').should('have.text', 'ETFs')
  validateInstruments(etfArray)
}

function etf_eu(){
  cy.findByRole('tab', { name: 'ETFs' }).click()
  cy.findByRole('link', { name: 'See all ETFs' }).click()
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.get('[class^="at-flex instrumental-table-module--instrumental_left_item--"]').find('p').should('have.text', 'ETFs')
  validateInstruments(etfArray)
}

Cypress.Commands.add('c_forexViewall', (site, view) => {
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

Cypress.Commands.add('c_derivedindicesViewall', (site, view) => {
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

Cypress.Commands.add('c_stockindicesViewall', (site, view) => {
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

Cypress.Commands.add('c_cryptocurrenciesViewall', (site, view) => {
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

Cypress.Commands.add('c_commoditiesViewall', (site, view) => {
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

Cypress.Commands.add('c_etfViewall', (site, view) => {
  if (site == 'row') {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
      etf_row()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionROW'))
      etf_row()
    }
  } else {
    if (view == 'desk') {
      cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
      etf_eu()
    } else {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      etf_eu()
    }
  }
})

Cypress.Commands.add('c_checkBuySellButton', () => {
  cy.findAllByRole('button', { name: 'Buy' }).first().click()
  cy.url().should('include', '/signup/')
  cy.go('back');
  cy.findAllByRole('button', { name: 'Sell' }).first().click()
  cy.go(-1);
})





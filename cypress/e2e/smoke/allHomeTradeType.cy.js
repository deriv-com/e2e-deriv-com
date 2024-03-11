import '@testing-library/cypress/add-commands';

const tradeTypeConfig = {
  EU: {
    heading: 'CFDs and multipliers',
    types: [
      { name: 'CFDs', text: 'Trade with leverage, unbeatable spreads, and fast execution on the widest range of markets.' , learnmore: 'CFDs' },
      { name: 'Multipliers', text: 'Trade on global financial markets and multiply your potential profit without losing more than your stake.' , learnmore: 'multipliers'},
    ],
    urls: ['cfds', 'multiplier'],
  },
  ROW: {
    heading: 'CFDs, options, and multipliers',
    types: [
      { name: 'CFDs', text: 'Trade with leverage, unbeatable spreads, and fast execution on the widest range of markets.' , learnmore: 'CFDs' },
      { name: 'Options', text: 'Trade diverse vanilla and exotic options across platforms and markets without risking more than your initial stake.' , learnmore: 'options' },
      { name: 'Multipliers', text: 'Trade on global financial markets and multiply your potential profit without losing more than your stake.' , learnmore: 'multiplier' },
    ],
    urls: ['cfds', 'options', 'multiplier'],
  },
}

function checkTradeTypes(region, index = 0) {
  const config = tradeTypeConfig[region]
  const trade = config.types[index]

  cy.findByText(`Trade ${config.heading}`).should('be.visible');

  cy.findByRole('heading', { name: trade.name }).scrollIntoView().should('exist')
  cy.findByText(trade.text).should('be.visible')
  cy.findByRole('link', { name: `Learn more about ${trade.learnmore}` }).as('learnMoreLink')
  cy.get('@learnMoreLink').trigger('mouseover')
  cy.get('@learnMoreLink').click()
  cy.url().should('include', config.urls[index])
  cy.go('back')

  if (index + 1 < config.types.length) {
    checkTradeTypes(region, index + 1)
  }
}

describe('QATEST-1342 Trade Types - EU', () => {
  it('should check trade type section is visible and validate the navigation of learn more link in mobile for EU', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
    checkTradeTypes('EU')
  });

  it('should check trade type section is visible and validate the navigation of learn more link in desktop for EU', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
    checkTradeTypes('EU')
  });
});

describe('QATEST-1336 Trade Types - ROW', () => {
  it('should check trade type section is visible and validate the navigation of learn more link in mobile for ROW', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
    checkTradeTypes('ROW')
  });

  it('should check trade type section is visible and validate the navigation of learn more link in desktop for ROW', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    checkTradeTypes('ROW')
  });
});

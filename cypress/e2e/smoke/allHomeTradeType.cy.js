import '@testing-library/cypress/add-commands';

const tradeTypeConfig = {
  EU: {
    heading: '2 flexible',
    types: [
      { name: 'CFDs', text: 'Trade with leverage and low spreads for better returns on successful trades.' },
      { name: 'Multipliers', text: 'Multiply your potential profit without risking more than your stake.' },
    ],
    urls: ['cfds', 'multiplier'],
  },
  ROW: {
    heading: '3 exciting',
    types: [
      { name: 'CFDs', text: 'Trade with leverage and low spreads for better returns on successful trades.' },
      { name: 'Options', text: 'Earn a range of payouts by correctly predicting market movements.' },
      { name: 'Multipliers', text: 'Multiply your potential profit without risking more than your stake.' },
    ],
    urls: ['cfds', 'options', 'multiplier'],
  },
};

function checkTradeTypes(region) {
  const config = tradeTypeConfig[region]

  cy.findByRole('heading', { name: 'Trade types' }).should('exist')
  cy.findByText(`Trade the way you want with ${config.heading} trade types.`).should('exist')

  config.types.forEach((trade, index) => {
    cy.findByRole('heading', { name: trade.name }).scrollIntoView().should('exist')
    cy.findByText(trade.text).should('be.visible')
    cy.get('[class*="item_learn_more"]').eq(index).should('exist').trigger('mouseover').click()
    cy.url().should('include', config.urls[index])
    cy.go(-1)
  });
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

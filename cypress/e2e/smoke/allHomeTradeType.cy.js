import '@testing-library/cypress/add-commands';
import homeBanner from '../../support/POM/homePage'

function scrollToAndCheckExistence(role, name) {
  cy.findByRole(role, { name }).scrollIntoView().should('exist');
}

function checkTradeTypes(region) {
  scrollToAndCheckExistence('heading', 'Trade types');

  if (region === 'EU') {
    cy.findByText('Trade the way you want with 2 flexible trade types.').should('exist');

    cy.scrollToAndCheckExistence('heading', 'CFDs');
    cy.findByText('Trade with leverage and low spreads for better returns on successful trades.').should('be.visible');

    cy.scrollToAndCheckExistence('heading', 'Multipliers');
    cy.findByText('Multiply your potential profit without risking more than your stake.').should('be.visible');

    cy.get('[class*="item_learn_more"]').eq(0).should('exist').trigger('mouseover').click();
    cy.url().should('include', 'cfds');
    cy.go('back');

    cy.get('[class*="item_learn_more"]').eq(1).should('exist').trigger('mouseover').click();
    cy.url().should('include', 'multiplier');
    cy.go('back');
  } else if (region === 'ROW') {
    cy.findByText('Trade the way you want with 3 exciting trade types.').should('exist');

    cy.scrollToAndCheckExistence('heading', 'CFDs');
    cy.findByText('Trade with leverage and low spreads for better returns on successful trades.').should('be.visible');

    cy.scrollToAndCheckExistence('heading', 'Options');
    cy.findByText('Earn a range of payouts by correctly predicting market movements.').should('be.visible');

    cy.scrollToAndCheckExistence('heading', 'Multipliers');
    cy.findByText('Multiply your potential profit without risking more than your stake.').should('be.visible');

    cy.get('[class*="item_learn_more"]').eq(0).should('exist').trigger('mouseover').click();
    cy.url().should('include', 'cfds');
    cy.go('back');

    cy.get('[class*="item_learn_more"]').eq(1).should('exist').trigger('mouseover').click();
    cy.url().should('include', 'options');
    cy.go('back');

    cy.get('[class*="item_learn_more"]').eq(2).should('exist').trigger('mouseover').click();
    cy.url().should('include', 'multiplier');
    cy.go('back');
  } else {
    cy.log('invalid region')
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

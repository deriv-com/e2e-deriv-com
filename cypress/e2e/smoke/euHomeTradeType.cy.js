import '@testing-library/cypress/add-commands'

function checkEuTradeTypeLearnMore() {
  cy.findByRole('heading', { name: 'Trade types' }).should('be.visible')
  cy.findByText('Trade the way you want with 2 flexible trade types.').should(
    'be.visible'
  )
  cy.findByRole('heading', { name: 'CFDs' }).should('be.visible')
  cy.findByText(
    'Trade with leverage and low spreads for better returns on successful trades.'
  ).should('be.visible')
  cy.findByRole('heading', { name: 'Multipliers' }).should('be.visible')
  cy.findByText(
    'Multiply your potential profit without risking more than your stake.'
  ).should('be.visible')
  cy.get('[class*="item_learn_more"]').eq(0).trigger('mouseover').click()
  cy.url().should('include', 'cfds')
  cy.findByRole('heading', { name: 'CFD trading' }).should('be.visible')
  cy.go(-1)
  cy.get('[class*="item_learn_more"]').eq(1).trigger('mouseover').click()
  cy.url().should('include', 'multiplier')
  cy.findByRole('heading', { name: 'Multipliers' }).should('be.visible')
}

describe('QATEST-1342 Trade Types - EU', () => {
  it('should check trade type section is visible and validate the navigation of learn more link in mobile', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
    checkEuTradeTypeLearnMore()
  })

  it('should check trade type section is visible and validate the navigation of learn more link in desktop', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
    checkEuTradeTypeLearnMore()
  })
})

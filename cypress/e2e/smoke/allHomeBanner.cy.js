import '@testing-library/cypress/add-commands'

function checkHeroBanner(region) {
  const baseUrl = Cypress.config('baseUrl').toLowerCase()
  const urlToMatch = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  cy.findByRole('heading', {
    name: 'Trading for anyone. Anywhere. Anytime.',
  }).should('be.visible')
  // cy.findByRole('img', { name: 'Trustpilot' }).click() Temporarily removed due to https://app.clickup.com/t/20696747/DPROD-4124

  if (region === 'ROW') {
    cy.findByRole('img', {
      name: 'Most Innovative Broker, UF Awards 2023',
    }).should('be.visible')
    cy.findByRole('img', {
      name: 'Broker of the year 2023 by FinanceFeeds',
    }).should('be.visible')
    cy.findByRole('img', {
      name: 'Most trusted broker APAC 2023 by UF Awards',
    }).should('be.visible')
  } else {
    cy.findByRole('img', {
      name: 'Best forex spreads APAC 2023 by UF Awards',
    }).should('not.exist')
    cy.findByRole('img', {
      name: 'Broker of the year 2023 by FinanceFeeds',
    }).should('not.exist')
    cy.findByRole('img', {
      name: 'Most trusted broker APAC 2023 by UF Awards',
    }).should('not.exist')
  }

  cy.findByRole('heading', { name: '2.5M+' }).should('be.visible')
  cy.findByText('Users worldwide').should('be.visible')
  cy.findByRole('heading', { name: '$650B+' }).should('be.visible')
  cy.findByText('Monthly volume').should('be.visible')
  cy.findByRole('heading', { name: '1999' }).should('be.visible')
  cy.findByText('Established since').should('be.visible')
  cy.findByRole('heading', { name: '168M+' }).should('be.visible')
  cy.findByText('Monthly deals').should('be.visible')

  cy.c_waitForPageLoad()
  cy.contains('Open demo account').click({ force: true })
  cy.url().should('eq', urlToMatch + '/signup/')
}

describe('QATEST-1315 & 1310 - Validate Hero banner message', () => {
  it(
    'should have correct home banner content',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive('')
      cy.findByText(
        'Trade CFDs and options on global financial markets, all in one place with 24/7 trading and worldwide support.'
      ).click()
      checkHeroBanner('ROW')
    }
  )
  it(
    'should have correct home banner content - EU',
    { baseUrl: Cypress.env('RegionEU'), tags: ['@smoke-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      cy.findByText(
        'Trade CFDs and multipliers on global financial markets, all in one place with 24/7 trading and worldwide support.'
      ).click()
      checkHeroBanner('EU')
    }
  )
})

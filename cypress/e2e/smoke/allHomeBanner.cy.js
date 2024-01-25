import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

describe('QATEST-1315 & 1310 - Validate Hero banner message', () => {
  it('should have correct home banner content', () => {
    const baseUrl = Cypress.config('baseUrl').toLowerCase();
    const urlToMatch = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl

    cy.c_visitResponsive(Cypress.env('RegionROW'))
    cy.findByRole('heading', { name: 'Trading for anyone. Anywhere. Anytime.' }).should('be.visible')
    cy.findByText('Trade CFDs and Options on 1500+ instruments, all in one place with 24/7 trading and 24/7 worldwide support.').click();
    cy.findByRole('img', { name: 'Trustpilot' }).click();
    cy.contains('Open demo account').click({force: true});
    cy.url().should('eq', urlToMatch + '/signup/')

  })
})

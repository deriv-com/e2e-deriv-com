import '@testing-library/cypress/add-commands'


describe('Cypress test for social signup flow', () => {

  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionROW'),'desktop')
    cy.contains('button', 'Open demo account').click()
    cy.get('#dm-signup-facebook').should('be.visible').click()
  })

  it('Performs social Signup using FB', () => {
    cy.url().then((url) => {
      cy.log('Current URL:', url);
    });
  })
})
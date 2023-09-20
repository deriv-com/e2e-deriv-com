import '@testing-library/cypress/add-commands'

describe('About us page', () => {

  beforeEach(() => {
  })

  it('Validate links within About Us - Who we are', () => {
    cy.visitResponsive('/who-we-are') //See custome command for details

    if (Cypress.env('isMobile')) {
        cy.findByRole('link', { name: 'Learn more about our principles' }).click()
        cy.findByRole('heading', { name: 'Our principles' }).should('be.visible')
      //etc
    }
    else {
      //todo - NB desktop links can be different
    }
  })

  //todo - add tests for the remaining sites under About Us.

})
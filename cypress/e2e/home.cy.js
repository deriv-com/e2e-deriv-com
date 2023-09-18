import '@testing-library/cypress/add-commands'

describe('Home page tests', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.findByRole('button', { name: 'Accept', exact: true }).click()
      cy.findByRole('button', { name: 'whatsapp icon' }).click()
    })
  
    it('Validate WhoWeAre Link', () => {
      cy.findByRole('link', { name: 'Who we are' }).click()
      cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')
    })
})
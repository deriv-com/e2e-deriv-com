import '@testing-library/cypress/add-commands'

describe('Validate signup links', () => {
  beforeEach(() => {
    cy.visitResponsive('/signup') //Custom command
  })

  it('S01 - Validate user can signup at EU/non-EU Website', () => {
    cy.findByLabelText('I agree to the terms and conditions').should('be.visible')
    cy.contains('button', 'Create demo account').should('be.visible')
  })
})

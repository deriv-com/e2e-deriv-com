import '@testing-library/cypress/add-commands'

describe('Validate signup functionality', () => {
  beforeEach(() => {
    cy.visitResponsive('/signup') //Custom command
  })

  it('Validate user can signup at EU/non-EU Website', () => {
    const email = Cypress.env('email')
    cy.findByPlaceholderText('Email').type(email)
    cy.findByLabelText('I agree to the terms and conditions').check()
    cy.contains('button', 'Create demo account').click()


    cy.url().should('include', `/signup-success?email=${email}`) 
  })
})

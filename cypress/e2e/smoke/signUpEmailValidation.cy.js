import '@testing-library/cypress/add-commands'

function enterInvalidEmail(email)
{
  cy.findByPlaceholderText('Email address').should('be.visible').type(email)
  cy.findByRole('checkbox').click()
  cy.get('.error').should('be.visible').and('contain.text', 'Email is required')
  cy.findByRole('button', { name: 'Sign up' }).should('be.disabled')
  cy.get('input[name="email"]').clear()
}

function enterValidEmail(email)
{
  cy.findByPlaceholderText('Email address').should('be.visible').type(email)
  cy.findByRole('checkbox').click()
  cy.get('.error').should('not.exist')
  cy.findByRole('button', { name: 'Sign up' }).should('not.be.disabled')
}

describe('QATEST-1395 - Sign up Section: Email validation', () => {
  it('should validate the behavior when invalid and valid email id is entered in signup section.', () => {
  cy.c_visitResponsive(Cypress.env('RegionROW'))
  cy.c_generateRandomEmail('@.com').then((email) => {
    enterInvalidEmail(email)
  })
  cy.c_generateRandomEmail('com').then((email) => {
    enterInvalidEmail(email)
  })
  cy.c_generateRandomEmail('@gmail.com').then((email) => {
    enterValidEmail(email)
  })

 })
})







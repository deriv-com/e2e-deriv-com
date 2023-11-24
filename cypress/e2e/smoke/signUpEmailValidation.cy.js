import '@testing-library/cypress/add-commands'

const generateRandomEmail = () => {
  return `user${Math.floor(Math.random() * 100000)}@.com`
};

const generateRandomEmail2 = () => {
  return `user${Math.floor(Math.random() * 100000)}com`
};

const generateRandomEmail3 = () => {
  return `user${Math.floor(Math.random() * 100000)}@gmail.com`
};

function enterInvalidEmail(email)
{
  cy.findByPlaceholderText('Email address').should('be.visible').type(email)
  cy.findByRole('checkbox').click()
  cy.get('.error').should('be.visible').and('contain.text', 'Email is required')
  cy.findByRole('button', { name: 'Sign up' }).should('be.disabled')
  cy.get('input[name="email"]').clear();
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
  const invalidEmail1 = generateRandomEmail()
  enterInvalidEmail(invalidEmail1)
  const invalidEmail2 = generateRandomEmail2()
  enterInvalidEmail(invalidEmail2)
  const validEmail = generateRandomEmail3()
  enterValidEmail(validEmail)
 })
})







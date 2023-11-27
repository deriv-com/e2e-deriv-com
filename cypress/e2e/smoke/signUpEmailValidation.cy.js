import '@testing-library/cypress/add-commands'

const generateRandomEmail = (domain) => {
  return `user${Math.floor(Math.random() * 100000)}${domain}`;
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
  let email
  email = generateRandomEmail('@.com');
  enterInvalidEmail(email);
  email= generateRandomEmail('com');
  enterInvalidEmail(email);
  email = generateRandomEmail('@gmail.com');
  enterValidEmail(email);
 })
})







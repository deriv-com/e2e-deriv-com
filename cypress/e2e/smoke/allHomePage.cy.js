import '@testing-library/cypress/add-commands'

function checkContentandImages() {
  cy.findByRole('heading', { name: "We're 25 years strong" }).should(
    'be.visible'
  )
  cy.findByRole('heading', { name: 'Dependable' }).should('be.visible')
  cy.findByRole('img', { name: 'Dependable platform' }).should('be.visible')
  cy.findByText(
    'Our 99.97% uptime ensures your uninterrupted access to the markets.'
  ).should('be.visible')
  cy.findByRole('heading', { name: 'Safe and secure' }).should('be.visible')
  cy.findByRole('img', { name: 'Safe and secure platform' })
    .scrollIntoView()
    .trigger('mousedown', { button: 0 })
    .should('be.visible')
  cy.findByText('We keep your personal data and funds safe.')
  cy.findByRole('img', { name: 'Regulated and licenced broker' })
    .scrollIntoView()
    .trigger('mousedown', { button: 0 })
    .should('be.visible')
  cy.findByRole('heading', { name: 'Regulated' }).should('be.visible')
  cy.findByRole('img', { name: '24-hour chat support' })
    .scrollIntoView()
    .trigger('mousedown', { button: 0 })
    .should('be.visible')
  cy.findByText(
    'We’re regulated and licensed by global financial authorities.'
  ).should('be.visible')
  cy.findByRole('heading', { name: '24/7 support' }).should('be.visible')
  cy.findByText(
    'Our professional multilingual team is here for you anytime.'
  ).should('be.visible')
}

describe('QATEST-1395 - Validate the section "We are 25 years strong" in homepage', () => {
  it(
    'should validate the content and images of "We are 25 years strong" section in homepage - ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive('')
      checkContentandImages()
    }
  )
  it(
    'should validate the content and images of "We are 25 years strong" section in homepage - EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      checkContentandImages()
    }
  )
})

import '@testing-library/cypress/add-commands'

function validate_AboutUs_whyChooseUs() {
  cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')

  cy.findByRole('img', { name: 'Proven track record' }).should('be.visible')
  cy.findByRole('heading', { name: 'Proven track record' }).should('be.visible')

  cy.findByRole('img', { name: 'Licensed and regulated' }).should('be.visible')
  cy.findByRole('heading', { name: 'Licensed and regulated' }).should(
    'be.visible'
  )

  cy.findByRole('img', { name: 'Client money protection' }).should('be.visible')
  cy.findByRole('heading', { name: 'Client money protection' }).should(
    'be.visible'
  )

  cy.findByRole('img', { name: 'Risk awareness and management' }).should(
    'be.visible'
  )
  cy.findByRole('heading', { name: 'Risk awareness and management' }).should(
    'be.visible'
  )

  cy.findByRole('img', { name: 'Help when you need it' }).should('be.visible')
  cy.findByRole('heading', { name: 'Help when you need it' }).should(
    'be.visible'
  )

  cy.findByRole('img', { name: 'Customer-first trading experience' }).should(
    'be.visible'
  )
  cy.findByRole('heading', {
    name: 'Customer-first trading experience',
  }).should('be.visible')

  cy.findByRole('img', { name: 'Your safety, our priority' }).should(
    'be.visible'
  )
  cy.findByRole('heading', { name: 'Your safety, our priority' }).should(
    'be.visible'
  )

  cy.findByRole('link', { name: 'regulated' }).click()
  cy.findByRole('heading', { name: 'Regulatory information' }).should(
    'be.visible'
  )
  cy.go('back')

  cy.findByRole('link', { name: 'regulated' }).click()
  cy.findByRole('heading', { name: 'Regulatory information' }).should(
    'be.visible'
  )
  cy.go('back')

  cy.findByRole('link', { name: 'secure and responsible trading' }).click()
  cy.findByRole('heading', { name: 'Secure and responsible trading' }).should(
    'be.visible'
  )
  cy.go('back')

  cy.contains('Help centre').first().click()
  cy.findByRole('heading', { name: 'How can we help?' }).should('be.visible')
  cy.go('back')

  cy.contains('Community')
    .first()
    .should('have.attr', 'href')
    .and('include', '/community.deriv.com')

  cy.findByRole('link', { name: 'regulated' }).click()
  cy.findByRole('heading', { name: 'Regulatory information' }).should(
    'be.visible'
  )
  cy.go('back')

  cy.findByRole('heading', { name: 'Try Deriv at no risk' }).should(
    'be.visible'
  )

  cy.c_waitForPageLoad()
  cy.findByRole('button', { name: "Sounds great. Let's get started." })
    .should('be.visible')
    .click()
  cy.findByText('Join over 2.5 million traders')
  cy.url().should('include', '/signup/')
}

describe('QATEST-1647 - should validate the About Us - Why choose us', () => {
  it(
    'should validate Why Choose Us page for EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(`${Cypress.env('RegionEU')}/why-choose-us`, {
        size: 'desktop',
      })

      validate_AboutUs_whyChooseUs()
    }
  )

  it(
    'should validate Why Choose Us page for ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive(`/why-choose-us`, { size: 'desktop' })

      validate_AboutUs_whyChooseUs()
    }
  )
})

describe('QATEST-1647- Responsive - should validate the About Us - Why choose us', () => {
  it(
    'should validate Why Choose Us page for EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(`${Cypress.env('RegionEU')}/why-choose-us`)

      validate_AboutUs_whyChooseUs()
    }
  )

  it(
    'should validate Why Choose Us page for ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive(`/why-choose-us`)

      validate_AboutUs_whyChooseUs()
    }
  )
})

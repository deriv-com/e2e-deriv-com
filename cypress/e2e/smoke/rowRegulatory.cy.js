import '@testing-library/cypress/add-commands'

function checkRegulatorySection() {
  cy.findByRole('heading', {
    name: 'Deriv Investments (Europe) Limited',
  }).should('be.visible')
  cy.findByRole('heading', { name: 'Deriv (FX) Ltd' }).should('be.visible')
  cy.findByRole('heading', { name: 'Deriv (BVI) Ltd' }).should('be.visible')
  cy.findByRole('heading', { name: 'Deriv (V) Ltd' }).should('be.visible')
  cy.findByRole('heading', { name: 'Deriv (SVG) LLC' }).should('be.visible')
  cy.findByRole('heading', { name: 'Deriv.com Limited' }).should('be.visible')
  cy.findByRole('heading', { name: 'The Financial Commission' }).should(
    'be.visible'
  )
}

function checkViewLicenseLink() {
  for (let index = 0; index < 4; index++) {
    cy.findAllByRole('link', { name: 'view licence' }).eq(index).click()
  }
}

describe('QATEST-1644 - Regulatory page', () => {
  it(
    'should validate the content and links in regulatory page for ROW',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive(`/regulatory`)
      cy.findByRole('heading', { name: 'Regulatory information' }).should(
        'be.visible'
      )
      checkRegulatorySection()
      checkViewLicenseLink()
      cy.findByRole('link', { name: 'member' })
        .invoke('attr', 'target', '_self')
        .click()
      cy.url().should(
        'include',
        '/regulatory/Financial_Markets_Association_Cert.pdf'
      )

      cy.go('back')
      cy.findByRole('link', { name: 'view membership' })
        .invoke('attr', 'target', '_self')
        .click()
      cy.url().should('include', '/regulatory/deriv-com-ltd-membership.pdf')
    }
  )
})

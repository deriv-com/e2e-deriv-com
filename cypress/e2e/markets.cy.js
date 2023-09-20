import '@testing-library/cypress/add-commands'

describe('Markets link tests', () => {

  beforeEach(() => {
    if (Cypress.env('isMobile')) {
      cy.viewport(393, 852)
    }
    cy.visit('/')
    cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible')
  })

  it('Markets - menu', () => {
    //tag: smoke
    if (Cypress.env('isMobile')) {
      //Click through 'Markets' menu-items. 
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click()
      cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }).click()
      cy.findByRole('heading', { name: 'Forex', exact: true }).should('be.visible')
    }
    else {
      cy.findByRole('link', { name: 'Who we are' }).click()
      cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')
    }
  })
})

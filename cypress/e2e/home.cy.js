import '@testing-library/cypress/add-commands'

describe('Home page link tests', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl'))
      cy.findByRole('button', { name: 'Accept', exact: true }).click()
    })

    it('Markets - menu', () => {
      //tag: smoke
      if (Cypress.env('isMobile') == 'true')
      {
        //Click through 'Markets' menu-items. 
        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Markets chevron' }).click()
        cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }).click()
        cy.findByRole('heading', { name: 'Forex', exact: true }).should('be.visible')
      }
      else
      {
        cy.findByRole('link', { name: 'Who we are' }).click()
        cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')
      }
    })

    it('About us - menu', () => {
      //tag: smoke
      if (Cypress.env('isMobile') == 'true')
      {
        //Click through 'About us' menu items. 
        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'About us chevron' }).click()
        cy.findByRole('link', { name: 'Who we are' }).click()
        cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')

        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'About us chevron' }).click()
        cy.findByRole('link', { name: 'Why choose us' }).click()
        cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')
      }
      else
      {
        cy.findByRole('link', { name: 'Who we are' }).click()
        cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')
      }
    })

    it('Validate footer exists', () => {
      cy.get('footer').should('exist')
    })

    it('Validate WhatsApp is available', () => {
      cy.findByRole('button', { name: 'whatsapp icon' }).click()
    })



})
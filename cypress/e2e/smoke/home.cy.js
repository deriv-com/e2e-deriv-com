import '@testing-library/cypress/add-commands'

describe('Home page', () => {
    beforeEach(() => {
      cy.visitResponsive('/') //See custome command for details
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible') //A temporary work around, as menu items are not always visible and I don't want to have to do a {force true} on all of the methods.
    })

    //Click through 'Markets' menu-items and ensure links are vaild and load the next page. 
    it('H01 - Validate Markets menu items', () => {

      if (Cypress.env('viewPortSize') == 'small') 
      {
        cy.findByRole('img', { name: 'hamburger menu' }).click()
        cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
        cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }).click()
        cy.findByRole('heading', { name: 'Forex', exact: true }).should('be.visible')
      }
      else
      {
        //todo - NB desktop locators can be different
      }
    })

    //Click through 'Markets' menu-items and ensure links are vaild and load the next page. 
    it('H02 - Validate About us menu items', () => {

      if (Cypress.env('viewPortSize') == 'small') 
      {
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
        // NB desktop locators can be different, as per below.
        cy.findByRole('link', { name: 'Who we are' }).click()
        cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')
        //etc
      }
    })

    it('H03 - Validate footer exists', () => {
      cy.get('footer').should('exist')
    })

    it('H04 - Validate WhatsApp is available', () => {
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible')
    })

    // it('Validate Chat is available', () => {
    //   cy.findByRole('button', { name: 'livechat icon' }).should('be.visible')
    // })



})
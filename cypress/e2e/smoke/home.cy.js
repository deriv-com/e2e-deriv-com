import '@testing-library/cypress/add-commands'

describe('<a href="https://app.clickup.com/t/20696747/QAA-663">QAA-663 - Navigation Responsive - Menu items</a>', () => {
    beforeEach(() => {
      cy.visitResponsive('/', 'small') //See custome command for details
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible') //A temporary work around, as menu items are not always visible and I don't want to have to do a {force true} on all of the methods.
    })
    //Click through 'Markets' menu-items and ensure links are vaild and load the next page. 
    it('Validate Markets menu items', () => {

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }).click()
      cy.findByRole('heading', { name: 'Forex', exact: true }).should('be.visible')

    })

    //Click through 'Markets' menu-items and ensure links are vaild and load the next page. 
    it('Validate About us menu items', () => {

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Who we are' }).click()
      cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Why choose us' }).click()
      cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')

    })
})

describe('QAA-664 - Navigation Responsive - Open/Close Menu', () => {
    beforeEach(() => {
      cy.visitResponsive('/', 'small') //See custome command for details
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible') //A temporary work around, as menu items are not always visible and I don't want to have to do a {force true} on all of the methods.
    })

    it('Validate hamburger menu operation', () => {

      //Click on the hamburger menu, click on the X to close and the sub menuitems should no longer be visible (checking for the visibity of the Trade menu item should be good enough for this)
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('img', { name: 'close menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).should('not.be.visible');

      //Click on the hamburger menu, click on the EN link and the sub menuitems should no longer be visible
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByLabel('EN').click()
      cy.findByRole('button', { name: 'Trade chevron' }).should('not.be.visible');

      //Click on the hamburger menu, click on the Login link and the sub menuitems should no longer be visible
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByLabel('Login').click()
      cy.findByRole('button', { name: 'Trade chevron' }).should('not.be.visible');

    })
})

describe('QAA-665 - Validate Footer and Popup Icons', () => {
    beforeEach(() => {
      cy.visitResponsive('/') //See custome command for details
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible') //A temporary work around, as menu items are not always visible and I don't want to have to do a {force true} on all of the methods.
    })
    it('Validate footer exists', () => {
      cy.get('footer').should('exist')
    })
  
    it('Validate WhatsApp is available', () => {
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible')
    })
  
    // it('Validate Chat is available', () => {
    //   cy.findByRole('button', { name: 'livechat icon' }).should('be.visible')
    // })
})

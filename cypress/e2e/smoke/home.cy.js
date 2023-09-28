import '@testing-library/cypress/add-commands'

describe('QAA-663 - Navigation Responsive - Menu items - EU and ROW', () => {

    //Click through 'Markets' menu-items and ensure links are vaild and load the next page. 
    it('Generic menu items', () => {
      cy.visitResponsive(Cypress.env('RegionEU'), 'small') //See custome command for details
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible') //A temporary work around, as menu items are not always visible and I don't want to have to do a {force true} on all of the methods.

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Markets chevron' }).click({force: true})
      cy.findByRole('link', { name: 'Forex Forex Trade the world’s largest financial market with popular forex pairs.' }).click()
      cy.findByRole('heading', { name: 'Forex', exact: true }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Who we are' }).click()
      cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'About us chevron' }).click()
      cy.findByRole('link', { name: 'Why choose us' }).click()
      cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')

    })

    //Click through 'Markets' menu-items and ensure links are vaild and load the next page. 
    it('ROW menu items', () => {

      //TODO - We need to be able to simulate either VPN in GH run in a non-eu reigon.

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
      cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible')

      //Click on the hamburger menu, click on the EN link and the sub menuitems should no longer be visible
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByText('EN', { exact: true }).click()
      cy.findByText('English').click()
      cy.findByRole('img', { name: 'hamburger menu' }).should('be.visible')

      //Click on the hamburger menu, click on the Login link and the sub menuitems should no longer be visible
      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByLabelText('Login').click()
      cy.findByRole('heading', { name: 'Welcome!' }).should('be.visible')

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
  
    //TODO find out why chat isn't popping up.
    // it('Validate Chat is available', () => {
    //   cy.findByRole('button', { name: 'livechat icon' }).should('be.visible')
    // })
})

describe('QAA-668 - Validate Spanish Language Change', () => {
  beforeEach(() => {
    cy.visitResponsive('/') //See custome command for details
    cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible') //A temporary work around, as menu items are not always visible and I don't want to have to do a {force true} on all of the methods.
  })

  it('Select Spanish and check with header changed', () => {
    cy.findByText('EN', { exact: true }).click()
    cy.findByText('Español').click()
    cy.findByRole('heading', { name: 'Un bróker, innumerables oportunidades de operación' })
  })

  describe('QAA-670 - Validate Hero banner message EU and ROW', () => {
  
    it('EU', () => {
      cy.visitResponsive(Cypress.env('RegionEU')) //See custome command for details
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible') //A temporary work around, as menu items are not always visible and I don't want to have to do a {force true} on all of the methods.

      cy.findByTestId('typewriter-wrapper').findByText('Forex').should('be.visible')
      cy.findByTestId('typewriter-wrapper').findByText('Cryptocurrencie').click();
      cy.findByTestId('typewriter-wrapper').findByText('Stocks & indices').click();
      cy.findByTestId('typewriter-wrapper').findByText('Comm').click();
      cy.findByTestId('typewriter-wrapper').findByText('Derive').click();
    })

    it('ROW', () => {
      cy.visitResponsive(Cypress.env('RegionROW')) //See custome command for details
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible') //A temporary work around, as menu items are not always visible and I don't want to have to do a {force true} on all of the methods.

      //TODO - We need to be able to simulate either VPN in GH run in a non-eu reigon.
    })

  })

})

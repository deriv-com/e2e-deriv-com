import '@testing-library/cypress/add-commands'
import homeBanner, { elements } from '../../support/POM/homePage'

describe('QATEST-1279 - Navigation Responsive - Menu items - EU and ROW (Including Trade Types)', () => {
  //Click through menu-items and ensure links are valid and load the next page.
  it('should have correct menu items for ROW', () => {
    //NB. The region switch doesn't work on the EU site at the moment.
    if (Cypress.env('skipROWTests') == false) {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')
      //Trade Types
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.optionsMenu().click()
      cy.findByRole('heading', { name: 'What are digital options?' }).should(
        'be.visible')

      //Trade Platforms
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.derivxLink().click()
      cy.findByRole('img', { name: 'Deriv X' }).should('be.visible')
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.smartTraderLink().should('exist')//NB. Not always open, so don't click for now.
      homeBanner.elements.cTraderLink().click()
      cy.findByRole('img', { name: '_t_Deriv ctrader logo_t_' }).should('be.visible')
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.derivGo().click()
      cy.findByRole('img', { name: 'Deriv Go', exact: true }).should('be.visible')
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.derivBot().click()
      cy.findByRole('img', { name: 'Deriv Bot' }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.BinaryBotLink().should('exist') //NB. Not always open, so don't click for now.
      homeBanner.elements.crossIcon().click()

      //Markets
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.marketsMenu().click()
      homeBanner.elements.etfLink().click()
      cy.findByRole('heading', { name: 'Exchange-traded funds' }).should('be.visible')

      //Partners
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.partnersMenu().click()
      homeBanner.elements.derivPrime().should('be.visible')
      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.partnersMenu().click()
      homeBanner.elements.affiliatesIbs().should('be.visible')
      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.partnersMenu().click()
      homeBanner.elements.paymentAgent().should('be.visible')
      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.partnersMenu().click()
      homeBanner.elements.apiLink().should('be.visible')
      homeBanner.elements.crossIcon().click()
    }
  })
})

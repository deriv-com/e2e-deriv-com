import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'
import footer from '../../support/POM/commonPage'

describe('QATEST-1279 - Navigation Responsive - Menu items - EU (Including Trade Types)', () => {
  //Click through menu-items and ensure links are valid and load the next page.
  it(
    'should have the correct hamburger menu',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'), { waitLoad: true })

      // Trade Types
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.cfdMenu().click()
      cy.findByRole('heading', { name: 'CFD trading', exact: true }).should(
        'be.visible'
      )

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.optionsMenu().should('not.exist')

      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.multiplierMenu().click()
      cy.findByRole('heading', { name: 'Multipliers', exact: true }).should(
        'be.visible'
      )

      //Trade Platforms
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.mt5Link().click()
      cy.findByRole('img', { name: 'Deriv MT5', exact: true }).should(
        'be.visible'
      )

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.dtraderLink().click()
      cy.findByRole('img', { name: 'Deriv Trader' }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.tradeMenu().click()
      homeBanner.elements.derivxLink().should('not.exist')
      homeBanner.elements.smartTraderLink().should('not.exist')
      homeBanner.elements.cTraderLink().should('not.exist')
      homeBanner.elements.derivGo().should('not.exist')
      homeBanner.elements.derivBot().should('not.exist')
      homeBanner.elements.BinaryBotLink().should('not.exist')
      homeBanner.elements.crossIcon().click()

      // Markets
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.marketsMenu().click()
      homeBanner.elements.forexTxt().click()
      cy.findByRole('heading', { name: 'Forex', exact: true }).should(
        'be.visible'
      )

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.marketsMenu().click()
      homeBanner.elements.derivedIndicesTxt().click()
      cy.findByRole('heading', { name: 'Derived indices' }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.marketsMenu().click()
      homeBanner.elements.stockIndicesTxt().click()
      cy.findByRole('heading', {
        name: 'Stocks & indices',
        exact: true,
      }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.marketsMenu().click()
      homeBanner.elements.commoditiesTxt().click()
      cy.findByRole('heading', { name: 'Commodities', exact: true }).should(
        'be.visible'
      )

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.marketsMenu().click()
      homeBanner.elements.cryptoTxt().click()
      cy.findByRole('heading', {
        name: 'Cryptocurrencies',
        exact: true,
      }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.marketsMenu().click()
      homeBanner.elements.etfLink().click()
      cy.findByRole('heading', { name: 'Exchange-traded funds' }).should(
        'be.visible'
      )

      // About us
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.aboutUsMenu().click()
      homeBanner.elements.whoWeAre().click()
      cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.aboutUsMenu().click()
      homeBanner.elements.whyChooseUs().click()
      cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.aboutUsMenu().click()
      homeBanner.elements.partnershipProgrammes().should('be.visible')

      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.aboutUsMenu().click()
      homeBanner.elements.contactUs().should('be.visible')
      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.aboutUsMenu().click()
      homeBanner.elements.careers().should('be.visible')
      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.aboutUsMenu().click()
      homeBanner.elements.derivLife().should('be.visible')
      homeBanner.elements.crossIcon().click()

      // Resources
      cy.c_visitResponsive(Cypress.env('RegionEU'), { waitLoad: true })

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.resourcesMenu().should('be.visible').click()
      homeBanner.elements.helpCentre().click()
      cy.findByRole('heading', { name: 'How can we help?' }).should(
        'be.visible'
      )

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.resourcesMenu().should('be.visible').click()
      homeBanner.elements.community().should('be.visible')
      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.resourcesMenu().should('be.visible').click()
      homeBanner.elements.traderstool().click()
      cy.findByRole('heading', { name: 'Traders’ tools' }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.resourcesMenu().should('be.visible').click()
      homeBanner.elements.paymentMethod().click()
      cy.findByRole('heading', { name: 'Payment methods' }).should('be.visible')

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.resourcesMenu().should('be.visible').click()
      homeBanner.elements.derivMt5().click()
      cy.findByRole('heading', { name: 'Deriv MT5 signals' }).should(
        'be.visible'
      )

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.resourcesMenu().should('be.visible').click()
      homeBanner.elements.statusPage().should('be.visible')

      // Legal
      cy.c_visitResponsive(Cypress.env('RegionEU'), { waitLoad: true })

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.legalMenu().should('be.visible').click()
      homeBanner.elements.regulatoryInfo().click()
      cy.findByRole('heading', { name: 'Regulatory information' }).should(
        'be.visible'
      )

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.legalMenu().click()
      homeBanner.elements.termsCondition().click()
      cy.findByRole('heading', { name: 'Terms and conditions' }).should(
        'be.visible'
      )

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.legalMenu().click()
      homeBanner.elements.secureResponsible().click()
      cy.findByRole('heading', {
        name: 'Secure and responsible trading',
      }).should('be.visible')

      //Partners
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.partnersMenu().click()
      homeBanner.elements.derivPrime().should('be.visible')
      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.partnersMenu().click()
      homeBanner.elements.affiliates().should('be.visible')
      homeBanner.elements.crossIcon().click()

      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.partnersMenu().click()
      homeBanner.elements.apiLink().should('be.visible')
      homeBanner.elements.crossIcon().click()
    }
  )
})

describe('QATEST-1274 - Navigation Responsive - Open/Close Menu', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), { waitLoad: true })
  })

  it(
    'Validate hamburger menu operation',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      //Click on the hamburger menu, click on the X to close and the sub menuitems should no longer be visible (checking for the visibility of the Trade menu item should be good enough for this)
      homeBanner.elements.hamBurgerMenu().click()
      homeBanner.elements.crossIcon().click()
      homeBanner.elements.hamBurgerMenu().should('be.visible')

      //Click on the hamburger menu, click on the EN link and the sub menuitems should no longer be visible
      homeBanner.elements.hamBurgerMenu().click()
      cy.findByText('English').click()
      cy.contains('English').should('be.visible')
      homeBanner.elements.crossIcon().click()
      cy.findByText(
        'Cookies help us to give you a better experience and personalised content on our site.'
      ).should('be.visible')
      cy.contains("Don't accept").should('be.visible').click()
      cy.document().then((doc) => {
        const popup = doc.querySelector('[data-testid="warning-pop-up"]')
        if (popup) {
          cy.findByTestId('warning-pop-up-close-button').click()
        }
      })
      const middle = Cypress.$(cy.state('window')).height() / 2
      const scrollOffset = 400
      cy.scrollTo(0, middle + scrollOffset)
      cy.findAllByRole('button', { name: 'Open demo account' })
        .eq(1)
        .should('be.visible')
      //cy.findAllByRole('button', { name: 'Open demo account' }).eq(0)
      cy.findByText('Trading for anyone. Anywhere. Anytime.')
        .trigger('touchstart', { timeout: 1000 })
        .trigger('touchmove', 'bottom')
        .trigger('touchend')
      cy.findAllByRole('button', { name: 'Open demo account' })
        .eq(1)
        .should('not.be.visible')
      cy.scrollTo('bottom')
      cy.findAllByRole('button', { name: 'Open demo account' })
        .eq(1)
        .should('not.be.visible')
    }
  )
})

describe('Validate Footer and Popup Icons', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'))
  })
  it('Validate footer exists', { tags: ['@full-tests', '@eu-tests'] }, () => {
    footer.elements.cfdFloatingBannerLink().should('be.visible')
  })

  it(
    'Validate WhatsApp is available',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible')
    }
  )

  //TODO find out why chat isn't popping up.
  // it('Validate Chat is available', () => {
  //   cy.findByRole('button', { name: 'livechat icon' }).should('be.visible')
  // })
})

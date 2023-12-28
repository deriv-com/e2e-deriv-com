import '@testing-library/cypress/add-commands'

describe('QATEST-1279 - Navigation Responsive - Menu items - EU and ROW (Including Trade Types)', () => {
  //Click through menu-items and ensure links are valid and load the next page.
  it('should have the correct hamburger menu', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')

    //Trade Types
  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('Trade').should('be.visible').click();
    cy.findByRole('link', { name: 'CFDs', exact: true }).click();
    cy.findByRole('heading', { name: 'CFD trading', exact: true }).should('be.visible');

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('Trade').should('be.visible').click();
    cy.findByRole('link', { name: 'Options' }).should('not.exist');

    cy.findByRole('list').findByText('Trade').should('be.visible').click();
    cy.findByRole('link', { name: 'Multipliers', exact: true }).click();
    cy.findByRole('heading', { name: 'Multipliers', exact: true }).should('be.visible');

    //Trade Platforms
  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Trade').click()
    cy.findByRole('link', { name: 'Deriv MT5', exact: true }).click();
    cy.findByRole('img', { name: 'Deriv MT5', exact: true }).should('be.visible');

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Trade').click()
    cy.findByRole('link', { name: 'Deriv Trader', exact: true }).click();
    cy.findByRole('img', { name: 'Deriv Trader' }).should('be.visible')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Trade').click()
    cy.findByRole('link', { name: 'Deriv X' }).should('not.exist')
    cy.findByRole('link', { name: 'SmartTrader' }).should('not.exist')
    cy.findByRole('link', { name: 'Deriv cTrader' }).should('not.exist')
    cy.findByRole('link', { name: 'Deriv GO' }).should('not.exist')
    cy.findByRole('link', { name: 'Deriv Bot' }).should('not.exist')
    cy.findByRole('link', { name: 'Binary Bot' }).should('not.exist')
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();


    //Markets
  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Markets').click()
    cy.findByRole('navigation').findByRole('link', { name: 'Forex' }).click();
    cy.findByRole('heading', { name: 'Forex', exact: true }).should(
      'be.visible'
    )

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('Markets').should('be.visible').click();
    cy.findByRole('navigation').findByRole('link', { name: 'Derived indices' }).click();
    cy.findByRole('heading', { name: 'Derived indices' }).should('be.visible')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('Markets').should('be.visible').click();
    cy.findByRole('navigation').findByRole('link', { name: 'Stocks & indices' }).click();
    cy.findByRole('heading', { name: 'Stocks & indices', exact: true }).should(
      'be.visible'
    )

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('Markets').should('be.visible').click();
    cy.findByRole('navigation').findByRole('link', { name: 'Commodities' }).click();
    cy.findByRole('heading', { name: 'Commodities', exact: true }).should(
      'be.visible'
    )

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('Markets').should('be.visible').click();
    cy.findByRole('navigation').findByRole('link', { name: 'Cryptocurrencies' }).click();
    cy.findByRole('heading', { name: 'Cryptocurrencies', exact: true }).should(
      'be.visible'
    )

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('Markets').should('be.visible').click();
    cy.findByRole('link', { name: 'Exchange-traded funds (ETFs)' }).click();  
    cy.findByRole('heading', { name: 'Exchange-traded funds' }).should(
      'be.visible'
    )


    // About us
  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('About us').should('be.visible').click();
    cy.findByRole('link', { name: 'Who we are' }).click()
    cy.findByRole('heading', { name: 'Who we are' }).should('be.visible')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('About us').should('be.visible').click();
    cy.findByRole('link', { name: 'Why choose us' }).click()
    cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('About us').should('be.visible').click();
    cy.findByRole('link', { name: 'Partnership programmes' }).should('be.visible')

  cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();


  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('About us').should('be.visible').click();
    cy.findByRole('link', { name: 'Contact us' }).should('be.visible')
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('About us').should('be.visible').click();
    cy.findByRole('link', { name: 'Careers' }).should('be.visible')
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('list').findByText('About us').should('be.visible').click();
    // cy.findByRole('link', { name: 'Deriv life' }).should('be.visible')
    cy.findByRole('link', { name: 'Deriv Life' }).should('be.visible')
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click(); //Need to change Eq 1

    //Resources
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click(); // Need to update the tag above this issue.
    cy.findByRole('list').findByText('Resources').should('be.visible').click();
    cy.findByRole('link', { name: 'Help centre' }).click()
    cy.findByRole('heading', { name: 'How can we help?' }).should('be.visible')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Resources').click();
    // cy.findByLabelText('Resources')
    cy.findByRole('link', { name: 'Community' })
      .should('be.visible')
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Resources').click();
    cy.findByRole('link', { name: 'Traders\' tools' }).click()
    cy.findByRole('heading', { name: 'Traders’ tools' }).should('be.visible')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Resources').click();
    cy.findByRole('link', { name: 'Payment methods', exact: true }).click()
    cy.findByRole('heading', { name: 'Payment methods' }).should('be.visible')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Resources').click();
    cy.findByRole('link', { name: 'Deriv MT5 signals' }).click()
    cy.findByRole('heading', { name: 'Deriv MT5 signals' }).should('be.visible')

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByRole('navigation').findByText('Resources').click();
    cy.findByRole('link', { name: 'Status page' }).should('be.visible')

    //Legal
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByText('Legal', { exact: true }).click()
    cy.findByRole('link', { name: 'Regulatory information' }).click()
    cy.findByRole('heading', { name: 'Regulatory information' }).should(
      'be.visible'
    )

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByText('Legal', { exact: true }).click()
    // cy.findByLabelText('Legal')
    cy.findByRole('link', { name: 'Terms & conditions' })
      .click()
    cy.findByRole('heading', { name: 'Terms and conditions' }).should(
      'be.visible'
    )

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByText('Legal', { exact: true }).click()
    // cy.findByLabelText('Legal')
    cy.findByRole('link', { name: 'Secure & responsible trading' })
      .click()
    cy.findByRole('heading', { name: 'Secure and responsible trading' }).should(
      'be.visible'
    )

    //Partners
  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByText('Partners', { exact: true }).click()
    cy.findByRole('link', { name: 'Deriv Prime' }).should('be.visible')
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByText('Partners', { exact: true }).click()
    cy.findByRole('link', { name: 'Affiliates' }).should('be.visible')
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();

  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByText('Partners', { exact: true }).click()
    cy.findByRole('link', { name: 'API', exact: true }).should('be.visible')
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();
  })
})

describe('QATEST-1274 - Navigation Responsive - Open/Close Menu', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'small')
  })

  it('Validate hamburger menu operation', () => {
    //Click on the hamburger menu, click on the X to close and the sub menuitems should no longer be visible (checking for the visibility of the Trade menu item should be good enough for this)
  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.get('[class="cursor-pointer"]').should('be.visible').click();
    cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible');

    //Click on the hamburger menu, click on the EN link and the sub menuitems should no longer be visible
  cy.get('[data-cy="hamburger-menu"]').eq(1).should('be.visible').click();
    cy.findByText('English').click()
    cy.contains('English').should('be.visible');
    cy.get('[class="cursor-pointer"]').eq(1).should('be.visible').click();

  })
})

describe('Validate Footer and Popup Icons', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionEU'))
  })
  it.only('Validate footer exists', () => {
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

//Remove this test for now, as the Vercel Url doesn't support it.

// describe('QATEST-1453 - Validate Spanish Language Change', () => {
//   beforeEach(() => {
//     cy.c_visitResponsive(Cypress.env('RegionEU'))

//   })

//   it('Select Spanish and check with header changed', () => {
//     cy.findByText('EN', { exact: true }).click()
//     cy.findByText('Español').click()
//     cy.findByRole('heading', { name: 'Un bróker, innumerables oportunidades de operación' })
//   })
// })

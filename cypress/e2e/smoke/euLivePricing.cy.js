import '@testing-library/cypress/add-commands'

describe('QATEST-1328 - Live Pricing table EU', () => {
  it(
    'should click on all the 6 different markets and check whether the live pricing table for each is displayed.',
    { tags: ['@smoke-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      cy.c_validateMarkets('eu')
      cy.c_checkBuySellButton()
    }
  )

  it(
    'should click on View All link on all the 6 markets and check whether all instruments for the particular market is displayed - EU desktop.',
    { tags: ['@smoke-tests', '@eu-tests'] },
    () => {
      cy.c_forexViewall('eu', 'desk')
      cy.c_derivedindicesViewall('eu', 'desk')
      cy.c_stockindicesViewall('eu', 'desk')
      cy.c_cryptocurrenciesViewall('eu', 'desk')
      cy.c_commoditiesViewall('eu', 'desk')
      cy.c_etfViewall('eu', 'desk')
    }
  )

  it(
    'should click on View All link on all the 6 markets and check whether all instruments for the particular market is displayed - EU mobile.',
    { tags: ['@smoke-tests', '@eu-tests'] },
    () => {
      cy.c_forexViewall('eu', 'mob')
      cy.c_derivedindicesViewall('eu', 'mob')
      cy.c_stockindicesViewall('eu', 'mob')
      cy.c_commoditiesViewall('eu', 'mob')
      cy.c_cryptocurrenciesViewall('eu', 'mob')
      cy.c_etfViewall('eu', 'mob')
    }
  )
})

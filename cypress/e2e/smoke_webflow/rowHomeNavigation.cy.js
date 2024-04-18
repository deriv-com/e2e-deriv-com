import '@testing-library/cypress/add-commands'

const checkDerivComROWLayout = (layout) => {
  cy.c_visitResponsive('', { size: layout, quickLoad: true })
  const baseUrl = Cypress.config('baseUrl').toLowerCase()
  cy.log('baseUrl', baseUrl)
  const urlToMatch = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'
  cy.url().should('eq', urlToMatch)
  cy.findByText(
    'Trade CFDs and options on global financial markets, all in one place with 24/7 trading and worldwide support.'
  ).should('be.visible')
}
describe('QATEST-1266 - deriv.com ROW home page should be opened with the url as same as deriv.com', () => {
  it(
    'Should open url deriv.com and check ROW HomePage opens in mobile',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      checkDerivComROWLayout('small')
    }
  )

  it(
    'Should open url deriv.com and check ROW HomePage opens in desktop',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      checkDerivComROWLayout('desktop')
    }
  )
})

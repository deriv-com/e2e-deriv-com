import '@testing-library/cypress/add-commands'

function pricing_table_check() {
  const getTableValues = () => {
    const totalColumns = 6
    const totalRows = 5

    const values = []
    for (let rowIndex = 1; rowIndex <= totalRows; rowIndex++) {
      for (let columnIndex = 3; columnIndex <= totalColumns; columnIndex++) {
        cy.get(
          `tbody > :nth-child(${rowIndex}) > :nth-child(${columnIndex}) > .flex > .text-medium`
        ).each(($row) => {
          values.push($row.text().trim())
        })
      }
    }
    return values
  }

  let initialTableValues
  cy.wrap(getTableValues()).as('initialTableValues')

  cy.wait(10000)

  let updatedTableValues
  cy.wrap(getTableValues()).as('updatedTableValues')

  cy.get('@initialTableValues').then((initialValues) => {
    cy.get('@updatedTableValues').then((updatedValues) => {
      expect(initialValues).to.not.deep.equal(updatedValues)
    })
  })
}

describe('QATEST1320 - Validating the updates of pricing table - ROW & EU', () => {
  it('should navigate to pricing table of each market and check whether the values in table are getting changed every 10 seconds - ROW.', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    pricing_table_check()
    cy.findByRole('img', { name: 'Derived indices' }).click()
    pricing_table_check()
    cy.findByRole('img', { name: 'Stocks & indices' }).click()
    pricing_table_check()
    cy.findByRole('img', { name: 'Cryptocurrencies' }).click()
    pricing_table_check()
    cy.findByRole('img', { name: 'Commodities' }).click()
    pricing_table_check()
  })

  it('should navigate to pricing table of each market and check whether the values in table are getting changed every 10 seconds - EU.', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
    pricing_table_check()
    cy.findByRole('img', { name: 'Derived indices' }).click()
    pricing_table_check()
    cy.findByRole('img', { name: 'Stocks & indices' }).click()
    pricing_table_check()
    cy.findByRole('img', { name: 'Cryptocurrencies' }).click()
    pricing_table_check()
    cy.findByRole('img', { name: 'Commodities' }).click()
    pricing_table_check()
  })
})

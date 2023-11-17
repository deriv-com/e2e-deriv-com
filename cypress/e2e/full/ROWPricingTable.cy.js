import '@testing-library/cypress/add-commands'

function pricing_table_check()
{
    const getTableValues = () => {
        const totalColumns = 6 
        const totalRows = 5  

        const values = [];
        for (let rowIndex = 1; rowIndex <= totalRows; rowIndex++) {
            for (let columnIndex = 3; columnIndex <= totalColumns; columnIndex++) {
        cy.get(`tbody > :nth-child(${rowIndex}) > :nth-child(${columnIndex}) > .flex > .text-medium`).each(($row) => {
          values.push($row.text().trim());
          })
        }}
        return values;
      }

      let initialTableValues;
      cy.wrap(getTableValues()).as('initialTableValues');

      cy.wait(10000);

      let updatedTableValues;
      cy.wrap(getTableValues()).as('updatedTableValues');

      cy.get('@initialTableValues').then((initialValues) => {
        cy.get('@updatedTableValues').then((updatedValues) => {
          expect(initialValues).to.not.deep.equal(updatedValues);
        })
      })
}

describe('QATEST-1320 - Live Pricing table ROW', () => {
   
it('Should click on all the 5 different markets and check whether the live pricing table for each is displayed.', () => {
  cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
  cy.validate_markets('row')
  })
 
it('Should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW desktop.', () => {
  cy.forex_viewall('row','desk')
  cy.derivedindices_viewall('row','desk')
  cy.stockindices_viewall('row','desk')
  cy.cryptocurrencies_viewall('row','desk')
  cy.commodities_viewall('row','desk')
  })

 it('Should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - ROW mobile.', () => {
  cy.forex_viewall('row','mob')
  cy.derivedindices_viewall('row','mob')
  cy.stockindices_viewall('row','mob')
  cy.cryptocurrencies_viewall('row','mob')
  cy.commodities_viewall('row','mob')
  })

})
  
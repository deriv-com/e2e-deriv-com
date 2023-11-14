describe('Table Values Comparison', () => {
    it('should compare table values before and after 10 seconds', () => {
      // Visit your page with the table
      cy.visit('https://deriv.com/');
  
    
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
      };
  
      let initialTableValues;
      cy.wrap(getTableValues()).as('initialTableValues');

      cy.wait(10000);

      let updatedTableValues;
      cy.wrap(getTableValues()).as('updatedTableValues');
  
      cy.get('@initialTableValues').then((initialValues) => {
        cy.get('@updatedTableValues').then((updatedValues) => {
          expect(initialValues).to.not.deep.equal(updatedValues);
        });
      });
    });
  });
  
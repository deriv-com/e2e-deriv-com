import '@testing-library/cypress/add-commands'

describe('Validate Changing Values Every 10 Seconds', () => {
    it('should check if values in each row (excluding first two columns) change every 10 seconds', () => {
      cy.visit('https://deriv.com/');
  
      const totalColumns = 6  
      const totalRows = 5  
  

      for (let rowIndex = 1; rowIndex <= totalRows; rowIndex++) {
        for (let columnIndex = 3; columnIndex <= totalColumns; columnIndex++) {
         
          const firstValue = `initialValue_${rowIndex}_${columnIndex}`;
          const secondValue = `updatedValue_${rowIndex}_${columnIndex}`;
      
          cy.get(`tbody > :nth-child(${rowIndex}) > :nth-child(${columnIndex}) > .flex > .text-medium`)
            .should('be.visible')
            .invoke('text')
            .as(firstValue) 
            .then((initial) => {
              cy.log(`Initial value = ${initial}`);
      
              cy.wait(10000);
      
              cy.get(`tbody > :nth-child(${rowIndex}) > :nth-child(${columnIndex}) > .flex > .text-medium`)
                .should('be.visible')
                .invoke('text')
                .as(secondValue) 
                .then((updated) => {
                  cy.log(`Updated value = ${updated}`);
      
                  cy.wrap(initial).then((value1) => {
                    cy.wrap(updated).then((value2) => {
                      expect(value1.trim()).to.not.equal(value2.trim());
                    });
                  });
                });
            });
        }
      }
      
    });
  });
  
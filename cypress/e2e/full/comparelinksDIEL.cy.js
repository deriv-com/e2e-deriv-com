import '@testing-library/cypress/add-commands'
import { listenerCount } from 'process';
  // returning false here prevents Cypress from failing the test on uncaught:exception
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('QQAA-1178 - Compare Links', () => {
    it('visits all links for DIEL residance and compare links with pre-defined list', () => {
      // Visit homepage
      // cy.c_visitResponsive(Cypress.env('RegionDIEL'), 'desktop');
        let List1 =  [
          'https://community.deriv.com/',
          'https://staging.deriv.com/',
          'https://avc.deriv.com/',
          'https://dd.deriv.com/',
          'https://d4.deriv.com/',

        ];
        let List2 = [
          'https://staging.deriv.com/',
          'https://community.deriv.com/',
          'https://avc.deriv.com/',
          // 'https://dd.deriv.com/',
        
           
        ];
          let MissingLinks = [];
          let NewLinks = [];

          if (List1.length === List2.length) {
          cy.log('Lengths are equal.');
          try {
            // Check if List1 have all links of List2
            expect(List1).to.have.members(List2);
            cy.log('Logs identical, test passed');
          }
           catch (error) {
            // If the expectation failed , continue with following checks : 
          const MissingLinks = List1.filter(link => !List2.includes(link));
          const NewLinks = List2.filter(link => !List1.includes(link));
          cy.log('Please check the missing links:');
          cy.log(MissingLinks);
          cy.log('Please check the New links:');
          cy.log(NewLinks);
          }}
          if (List1.length > List2.length) {
            cy.log('List1 length is :'); 
            cy.log (List1.length);
            cy.log('List2 length is :');
            cy.log (List2.length); 
              try {
          expect(List1).to.include.members(List2);
          const MissingLinks = List1.filter(link => !List2.includes(link));
          cy.log('Please check the Missing links:');
          cy.log(MissingLinks);
                }
              catch (error) {
              const MissingLinks = List1.filter(link => !List2.includes(link));
              const NewLinks = List2.filter(link => !List1.includes(link));
              cy.log('Please check the missing links:');
              cy.log(MissingLinks);
              cy.log('Please check the New links:');
              cy.log(NewLinks);
              }
              expect(NewLinks).to.be.empty;
              expect(MissingLinks).to.be.empty;
            }
           if (List1.length < List2.length) {
            cy.log('List1 length is :'); 
            cy.log (List1.length);
            cy.log('List2 length is :');
            cy.log (List2.length);
              try {
          expect(List2).to.include.members(List1);
          const NewLinks = List2.filter(link => !List1.includes(link));
          cy.log('Please check the New links:');
          cy.log(NewLinks);
                }
              catch (error) {
              const MissingLinks = List1.filter(link => !List2.includes(link));
              const NewLinks = List2.filter(link => !List1.includes(link));
              cy.log('Please check the missing links:');
              cy.log(MissingLinks);
              cy.log('Please check the New links:');
              cy.log(NewLinks);
              }
              expect(NewLinks).to.be.empty;
              expect(MissingLinks).to.be.empty;
            }
           
          });
           
        });
        
      

    
    
     



import '@testing-library/cypress/add-commands'
import { allLinks } from '../../support/POM/expectedURLs'
// returning false here prevents Cypress from failing the test on uncaught:exception
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('QQAA-1178 - Compare Links', () => {
  it('visits all links for DIEL residance and compare links with pre-defined list', () => {
    // Visit homepage
    // cy.c_visitResponsive(Cypress.env('RegionDIEL'), 'desktop');
    if (allLinks.CurrentLinks.length == allLinks.ExpectedLinks_DIEL.length) {
      cy.log('Lengths are equal.');
      try {
        // Check if allLinks.CurrentLinks have all links of allLinks.ExpectedLinks_DIEL
        expect(allLinks.CurrentLinks).to.have.members(allLinks.ExpectedLinks_DIEL);
        cy.log('Logs identical, test passed');
      }
      catch (error) {
        // If the expectation failed , continue with following checks : 
        allLinks.MissingLinks = allLinks.CurrentLinks.filter(link => !allLinks.ExpectedLinks_DIEL.includes(link));
        allLinks.NewLinks = allLinks.ExpectedLinks_DIEL.filter(link => !allLinks.CurrentLinks.includes(link));
        cy.log('Please check the missing links:');
        cy.log(allLinks.MissingLinks);
        cy.log('Please check the New links:');
        cy.log(allLinks.NewLinks);
      }
    }
    if (allLinks.CurrentLinks.length > allLinks.ExpectedLinks_DIEL.length) {
      cy.log('allLinks.CurrentLinks length is :');
      cy.log(allLinks.CurrentLinks.length);
      cy.log('allLinks.ExpectedLinks_DIEL length is :');
      cy.log(allLinks.ExpectedLinks_DIEL.length);
      try {
        expect(allLinks.CurrentLinks).to.include.members(allLinks.ExpectedLinks_DIEL);
        allLinks.MissingLinks = allLinks.CurrentLinks.filter(link => !allLinks.ExpectedLinks_DIEL.includes(link));
        cy.log('Please check the Missing links:');
        cy.log(allLinks.MissingLinks);
      }
      catch (error) {
        allLinks.MissingLinks = allLinks.CurrentLinks.filter(link => !allLinks.ExpectedLinks_DIEL.includes(link));
        allLinks.NewLinks = allLinks.ExpectedLinks_DIEL.filter(link => !allLinks.CurrentLinks.includes(link));
        cy.log('Please check the missing links:');
        cy.log(allLinks.MissingLinks);
        cy.log('Please check the New links:');
        cy.log(allLinks.NewLinks);
      }
    }
    if (allLinks.CurrentLinks.length < allLinks.ExpectedLinks_DIEL.length) {
      cy.log('allLinks.CurrentLinks length is :');
      cy.log(allLinks.CurrentLinks.length);
      cy.log('allLinks.ExpectedLinks_DIEL length is :');
      cy.log(allLinks.ExpectedLinks_DIEL.length);
      try {
        expect(allLinks.ExpectedLinks_DIEL).to.include.members(allLinks.CurrentLinks);
        allLinks.NewLinks = allLinks.ExpectedLinks_DIEL.filter(link => !allLinks.CurrentLinks.includes(link));
        cy.log('Please check the New links:');
        cy.log(allLinks.NewLinks);
      }
      catch (error) {
        allLinks.MissingLinks = allLinks.CurrentLinks.filter(link => !allLinks.ExpectedLinks_DIEL.includes(link));
        allLinks.NewLinks = allLinks.ExpectedLinks_DIEL.filter(link => !allLinks.CurrentLinks.includes(link));
        cy.log('Please check the missing links:');
        cy.log(allLinks.MissingLinks);
        cy.log('Please check the New links:');
        cy.log(allLinks.NewLinks);
      }
    }
    cy.wrap(allLinks.MissingLinks,{log:false}).then((list)=>{
      expect(list.length).to.eq(0);
    })
    cy.wrap(allLinks.NewLinks,{log:false}).then((list)=>{
      expect(list.length).to.eq(0);
    })


  });

});









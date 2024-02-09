import '@testing-library/cypress/add-commands'
import { allLinks } from '../../support/POM/expectedURLs'
// returning false here prevents Cypress from failing the test on uncaught:exception
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
var CurrentLinks= []
var IinitialList= []
var len



describe('QATEST-97047 - Compare URL in production and staging', () => {
  beforeEach(() => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop');
    cy.get("a").each(link => {
    const href = link.prop('href');
    cy.wrap(IinitialList).invoke('push', href);
    cy.log('array',IinitialList)
    cy.wrap(IinitialList).then(a=>{
    len = a.length
    cy.log('the length is ',len)
    .then(() => {
      // Remove duplicates using a Set
      CurrentLinks = Array.from(new Set(IinitialList));
      cy.log('Unique Links:', CurrentLinks);
      cy.log('Unique Array:', CurrentLinks.join(', '));
    });
  })});
  });
  it('should visits all links for ROW countries in staging and compare links with pre-defined list', () => {

    if (CurrentLinks.length == allLinks.ExpectedLinks_ROW.length) {
      cy.log('Lengths are equal.');
      try {
        // Check if CurrentLinks have all links of ExpectedLinks_ROW
        expect(CurrentLinks).to.have.members(allLinks.ExpectedLinks_ROW);
        cy.log('Logs identical, test passed');
      }
      catch (error) {
        // If the expectation failed , continue with following checks : 
        allLinks.MissingLinks = CurrentLinks.filter(link => !allLinks.ExpectedLinks_ROW.includes(link));
        allLinks.NewLinks = allLinks.ExpectedLinks_ROW.filter(link => !CurrentLinks.includes(link));
        cy.log('Please check the missing links:');
        cy.log(allLinks.MissingLinks);
        cy.log('Please check the New links:');
        cy.log(allLinks.NewLinks);
      }
    }
    if (CurrentLinks.length > allLinks.ExpectedLinks_ROW.length) {
      cy.log('CurrentLinks length is :');
      cy.log(CurrentLinks.length);
      cy.log('allLinks.ExpectedLinks_ROW length is :');
      cy.log(allLinks.ExpectedLinks_ROW.length);
      try {
        expect(CurrentLinks).to.include.members(allLinks.ExpectedLinks_ROW);
        allLinks.MissingLinks = CurrentLinks.filter(link => !allLinks.ExpectedLinks_ROW.includes(link));
        cy.log('Please check the Missing links:');
        cy.log(allLinks.MissingLinks);
      }
      catch (error) {
        allLinks.MissingLinks = CurrentLinks.filter(link => !allLinks.ExpectedLinks_ROW.includes(link));
        allLinks.NewLinks = allLinks.ExpectedLinks_ROW.filter(link => !CurrentLinks.includes(link));
        cy.log('Please check the missing links:');
        cy.log(allLinks.MissingLinks);
        cy.log('Please check the New links:');
        cy.log(allLinks.NewLinks);
      }
    }
    if (CurrentLinks.length < allLinks.ExpectedLinks_ROW.length) {
      cy.log('CurrentLinks length is :');
      cy.log(CurrentLinks.length);
      cy.log('allLinks.ExpectedLinks_ROW length is :');
      cy.log(allLinks.ExpectedLinks_ROW.length);
      try {
        expect(allLinks.ExpectedLinks_ROW).to.include.members(CurrentLinks);
        allLinks.NewLinks = allLinks.ExpectedLinks_ROW.filter(link => !CurrentLinks.includes(link));
        cy.log('Please check the New links:');
        cy.log(allLinks.NewLinks);
      }
      catch (error) {
        allLinks.MissingLinks = CurrentLinks.filter(link => !allLinks.ExpectedLinks_ROW.includes(link));
        allLinks.NewLinks = allLinks.ExpectedLinks_ROW.filter(link => !CurrentLinks.includes(link));
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
    })
  });










///<reference types="cypress"/>
import '@testing-library/cypress/add-commands'
import { allLinks } from '../../support/POM/expectedURLs'
// returning false here prevents Cypress from failing the test on uncaught:exception
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

let CurrentLinks = []
var IinitialList = []
var len

function comparelinks(expectedlinks) {
  cy.clearAllCookies()
  if (CurrentLinks.length == expectedlinks.length) {
    cy.log('Lengths are equal.');
    try {
      // Check if CurrentLinks have all links of ExpectedLinks_ROW
      expect(CurrentLinks).to.have.members(expectedlinks);
      cy.log('Logs identical, test passed');
    }
    catch (error) {
      // If the expectation failed , continue with following checks : 
      allLinks.MissingLinks = CurrentLinks.filter(link => !expectedlinks.includes(link));
      allLinks.NewLinks = expectedlinks.filter(link => !CurrentLinks.includes(link));
      cy.log('Please check the missing links:');
      cy.log(allLinks.MissingLinks);
      cy.log('Please check the New links:');
      cy.log(allLinks.NewLinks);
    }
  }
  if (CurrentLinks.length > expectedlinks.length) {
    cy.log('CurrentLinks length is :');
    cy.log(CurrentLinks.length);
    cy.log('ExpectedLinks length is :');
    cy.log(expectedlinks.length);
    try {
      expect(CurrentLinks).to.include.members(expectedlinks);
      allLinks.MissingLinks = CurrentLinks.filter(link => !expectedlinks.includes(link));
      cy.log('Please check the Missing links:');
      cy.log(allLinks.MissingLinks);
    }
    catch (error) {
      allLinks.MissingLinks = CurrentLinks.filter(link => !expectedlinks.includes(link));
      allLinks.NewLinks = expectedlinks.filter(link => !CurrentLinks.includes(link));
      cy.log('Please check the missing links:');
      cy.log(allLinks.MissingLinks);
      cy.log('Please check the New links:');
      cy.log(allLinks.NewLinks);
    }
  }
  if (CurrentLinks.length < expectedlinks.length) {
    cy.log('CurrentLinks length is :');
    cy.log(CurrentLinks.length);
    cy.log('ExpectedLinks length is :');
    cy.log(expectedlinks.length);
    try {
      expect(expectedlinks).to.include.members(CurrentLinks);
      allLinks.NewLinks = expectedlinks.filter(link => !CurrentLinks.includes(link));
      cy.log('Please check the New links:');
      cy.log(allLinks.NewLinks);
    }
    catch (error) {
      allLinks.MissingLinks = CurrentLinks.filter(link => !expectedlinks.includes(link));
      allLinks.NewLinks = expectedlinks.filter(link => !CurrentLinks.includes(link));
      cy.log('Please check the missing links:');
      cy.log(allLinks.MissingLinks);
      cy.log('Please check the New links:');
      cy.log(allLinks.NewLinks);
    }
  }
  cy.wrap(allLinks.MissingLinks, { log: false }).then((list) => {
    expect(list.length).to.eq(0);
  })
  cy.wrap(allLinks.NewLinks, { log: false }).then((list) => {
    expect(list.length).to.eq(0);
  })
}
describe('QATEST-97047 - should Compare URL in production and staging', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    CurrentLinks = []
    cy.c_visitResponsive('', 'desktop', undefined, {waitLoad: true});
    cy.get("a").each(link => {
      const href = link.prop('href');
      cy.wrap(IinitialList).invoke('push', href);
      cy.log('array', IinitialList)
      cy.wrap(IinitialList).then(a => {
        len = a.length
        cy.log('the length is ', len)
          .then(() => {
            // Remove duplicates using a Set
            CurrentLinks = Array.from(new Set(IinitialList));
            cy.log('Unique Links:', CurrentLinks);
            cy.log('Unique Array:', CurrentLinks.join(', '));
          });
      })
    });
  });
  it('should visits all links in ROW countires and compare links with pre-defined list', () => {
    comparelinks(allLinks.ExpectedLinks_ROW)
  })
})









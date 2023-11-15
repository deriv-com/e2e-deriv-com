import '@testing-library/cypress/add-commands'

describe('QATEST-1336 - Trade Types section ROW)', () => {

    //Click through menu-items and ensure links are vaild and load the next page. 
    it('Home page - Trade Types section', () => {
      cy.c_visitResponsive(Cypress.env('RegionROW'), 'small')

      //Trade Types

      cy.findByRole('img', { name: 'hamburger menu' }).click()
      cy.findByRole('button', { name: 'Trade chevron' }).click();
import '@testing-library/cypress/add-commands'

describe('Legal page', () => {

  it('Validate links and dropdowns', () => {
    cy.visitResponsive('/regulatory') //See custome command for details

    if (Cypress.env('viewPortSize') == 'small') 
    {
        cy.findByRole('button', { name: 'Financial disclosure report Chevron thick' }).click()
        cy.findByRole('link', { name: 'pdf icon black Financial Disclosures Annual Report 2022' }).should('be.visible')
    }
    else 
    {
      //todo - NB desktop locators can be different
    }
  })

  //todo - add tests for the remaining sites under Trade.

})
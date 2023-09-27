import '@testing-library/cypress/add-commands'

describe('Resources page', () => {

  it('Validate the "How can we help" search', () => {
    cy.visitResponsive('/help-centre') //See custome command for details

    if (Cypress.env('viewPortSize') == 'small') 
    {
        cy.findByPlaceholderText('Try “Trade”').click()
        cy.findByPlaceholderText('Try “Trade”').type('how do i do this and that')
        cy.findByRole('heading', { name: 'Sorry, we couldn’t find any results matching \'how do i do this and that\'.' }).should('be.visible')

      //etc
    }
    else 
    {
      //todo - NB desktop links can be different
    }
  })

  //todo - add tests for the remaining sites under About Us.

})
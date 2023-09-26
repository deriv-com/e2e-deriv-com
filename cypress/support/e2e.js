//Globals

const gLocations = {
    EU: 'EU',
    ROW: 'ROW'
}

//Commands

Cypress.Commands.add('visitResponsive', (path) => {
    //Custom command that allows us to use baseUrl + path and detect with this is a responsive run or not.
    if (Cypress.env('viewPortSize') == 'small')
        cy.viewport('iphone-xr')
    else if (Cypress.env('viewPortSize') == 'medium')
        cy.viewport('ipad-2')
    else
        cy.viewport('macbook-16')
    cy.visit(path)
});




  
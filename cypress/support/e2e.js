//Globals

const gLocations = {
    EU: 'EU',
    ROW: 'ROW'
}

//Commands

Cypress.Commands.add('visitResponsive', (path, size) => {
    //Custom command that allows us to use baseUrl + path and detect with this is a responsive run or not.

    if (size === undefined)
        size = Cypress.env("viewPortSize")

    if (size == 'small')
        cy.viewport('iphone-xr')
    else if (size == 'medium')
        cy.viewport('ipad-2')
    else
        cy.viewport('macbook-16')
    cy.visit(path)
});




  
//Custom command that allows us to use baseUrl + path and detect with this is a responsive run or not.
Cypress.Commands.add('visitResponsive', (path) => {
    if (Cypress.env('isMobile'))
        cy.viewport("iphone-xr")
    else
        cy.viewport("macbook-16")

    cy.visit(path)
});




  
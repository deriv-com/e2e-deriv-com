import '@testing-library/cypress/add-commands'

describe('QATEST - deriv.com ROW home page should be opened with the url as same as deriv.com', () => {
    const webflow_URL = Cypress.env('webflow_URL')

    it('Should open url deriv.com and check ROW HomePage opens in mobile', ()=> {
        Cypress.config('baseUrl',webflow_URL )
        cy.c_visitResponsive('', {size:'small', quickLoad:true}) 
        cy.c_captureScreenshot('ROW-Home page mobile','mobile')
        
    })

    it('Should open url deriv.com and check ROW HomePage opens in desktop', ()=> {
        Cypress.config('baseUrl',webflow_URL )
        cy.c_visitResponsive('', {size:'desktop', quickLoad:true}) 
        cy.c_captureScreenshot('ROW-Home page desktop','desktop')
    })
})
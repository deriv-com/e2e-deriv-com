import '@testing-library/cypress/add-commands'

describe('QATEST-1266 - deriv.com ROW home page should be opened with the url as same as deriv.com', () => {
    const checkDerivComROWLayout = (layout) => {
        cy.c_visitResponsive('', layout , true) 
        const baseUrl = Cypress.config('baseUrl').toLowerCase();
        cy.log('baseUrl', baseUrl)
        const urlToMatch = baseUrl.endsWith('/') ? baseUrl : baseUrl + "/"
        cy.url().should('eq', urlToMatch)
        cy.findByText('Trade CFDs and options on global financial markets, all in one place with 24/7 trading and worldwide support.').should('be.visible')
    }

    it('Should open url deriv.com and check ROW HomePage opens in mobile', ()=> {
        if (Cypress.env('skipROWTests') == false) {
            checkDerivComROWLayout('small')
        }
    })

    it('Should open url deriv.com and check ROW HomePage opens in desktop', ()=> {
        if (Cypress.env('skipROWTests') == false) {
            checkDerivComROWLayout('desktop')
        }
    })
})
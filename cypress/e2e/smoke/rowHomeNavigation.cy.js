import '@testing-library/cypress/add-commands'

describe('QATEST-1266 - deriv.com ROW home page should be opened with the url as same as deriv.com', () => {
    const checkDerivComROWLayout = (layout) => {
        cy.c_visitResponsive(Cypress.env('RegionROW'), layout , true) 
        const baseUrl = Cypress.config('baseUrl').toLowerCase();
        const urlToMatch = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
        cy.url().should('eq', urlToMatch + Cypress.env('RegionROW'))
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
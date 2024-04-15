import '@testing-library/cypress/add-commands'

describe('QATEST - deriv.com ROW home page should be opened with the url as same as deriv.com', () => {
    const webflow_URL = Cypress.env('webflow_URL')

    it('Should open url deriv.com and check ROW HomePage opens in mobile', ()=> {
        Cypress.config('baseUrl',webflow_URL )
        cy.c_visitResponsive('',) 
       
        cy.c_captureScreenshot('Home page mobile', 'mobile')
    })

    it('Should open url deriv.com and check ROW HomePage opens in desktop', ()=> {
        Cypress.config('baseUrl',webflow_URL )
        cy.c_visitResponsive('', {size:'desktop'}) 
       cy.c_captureScreenshot('Home page - desktop', 'desktop')
    })
})


describe('QATEST-1342 Trade Types - EU', () => {
  it('should check trade type section is visible and validate the navigation of learn more link in mobile for EU', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU') )
  })

  it('should check trade type section is visible and validate the navigation of learn more link in desktop for EU', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), {size:'desktop'})
  })
})

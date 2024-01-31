import '@testing-library/cypress/add-commands'

describe('QATEST-1742 - Location page - Dubai', () => {
    it('should check the content and links in dubai location page', () => {
       cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`)
       cy.findByRole('heading', { name: 'Dubai', exact: true }).should('be.visible')
       cy.findByRole('heading', { name: 'Deriv in Dubai' }).should('be.visible')
       cy.findByRole('heading', { name: 'Our office' }).should('be.visible')
       cy.findByRole('heading', { name: 'Working at Deriv DMCC' }).should('be.visible')
       cy.findByRole('link', { name: 'View open positions in Dubai' }).should('be.visible')
       //cy.get('div[aria-label="Map"]').should('be.visible')
       //cy.get('#mapDiv').should('be.visible')
       //*[@class="dc-text" 
       //cy.frameLoaded('._location-layout__Iframe-sc-17k1bne-12')
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').find('#mapDiv').should('be.visible');
       

    })
})
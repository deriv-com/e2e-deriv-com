import '@testing-library/cypress/add-commands'

function checkLocationPageDubai()
{
       cy.findByRole('heading', { name: 'Dubai', exact: true }).should('be.visible')
       cy.findByRole('heading', { name: 'Deriv in Dubai' }).should('be.visible')
       cy.findByRole('heading', { name: 'Our office' }).should('be.visible')
       cy.findByRole('heading', { name: 'Working at Deriv DMCC' }).should('be.visible')
       cy.findByRole('link', { name: 'View open positions in Dubai' }).should('be.visible')
       cy.findByText('Office 1902, Jumeirah Business').should('be.visible')
}

function checkMap(view)
{
       cy.findByRole('img', { name: "map pin"}).scrollIntoView({ force: true }).should('be.visible')
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').find('#mapDiv').should('be.visible')
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').contains("View larger map", { timeout: 10000 }).should('be.visible').click()
       if(view === 'desktop')
       {
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').find('[title="Zoom in"]').should('be.visible').click()
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').find('[title="Zoom out"]').should('be.visible').click()
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').contains("Directions").should('be.visible').click()
       }
}

describe('QATEST-1742 - Location page - Dubai in responsive', () => {
    it('should validate the dubai location page for ROW', () => {
       cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`)
       checkLocationPageDubai()
       checkMap()
    })

    it('should validate the dubai location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionEU')}`)
        checkLocationPageDubai()
        checkMap()
     })
})

describe('QATEST-1742 - Location page - Dubai in desktop', () => {
    it('should validate the dubai location page for ROW', () => {
       cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`, 'desktop');
       checkLocationPageDubai('desktop')
       checkMap()
    })

    it('should validate the dubai location page for EU', () => {
       cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`, 'desktop');
       checkLocationPageDubai('desktop')
       checkMap()
     })
})
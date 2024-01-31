import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'


function validate_AboutUs_whyChooseUs(region)

{
cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')

cy.findByRole('img', { name: 'Proven track record' }).should('be.visible')
cy.findByRole('heading', { name: 'Proven track record' }).should('be.visible')

cy.findByRole('img', { name: 'Licensed and regulated' }).should('be.visible')
cy.findByRole('heading', { name: 'Licensed and regulated' }).should('be.visible')

cy.findByRole('img', { name: 'Client money protection' }).should('be.visible')
cy.findByRole('heading', { name: 'Client money protection' }).should('be.visible')

cy.findByRole('img', { name: 'Risk awareness and management' }).should('be.visible')
cy.findByRole('heading', { name: 'Risk awareness and management' }).should('be.visible')

cy.findByRole('img', { name: 'Help when you need it' }).should('be.visible')
cy.findByRole('heading', { name: 'Help when you need it' }).should('be.visible')

cy.findByRole('img', { name: 'Customer-first trading experience' }).should('be.visible')
cy.findByRole('heading', { name: 'Customer-first trading experience' }).should('be.visible')

cy.findByRole('img', { name: 'Your safety, our priority' }).should('be.visible')
cy.findByRole('heading', { name: 'Your safety, our priority' }).should('be.visible')

cy.findByRole('link', { name: 'regulated' }).click()
cy.wait(1000)
cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')
cy.go('back')

cy.findByRole('link', { name: 'regulated' }).click()
cy.wait(1000)
cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')
cy.go('back')

cy.findByRole('link', { name: 'secure and responsible trading' }).click()
cy.wait(1000)
cy.findByRole('heading', { name: 'Secure and responsible trading' }).should('be.visible')
cy.go('back')

cy.contains('Help centre').first().click()
cy.wait(1000)
cy.findByRole('heading', { name: 'How can we help?' }).should('be.visible')
cy.go('back')

cy.contains('Community').first().should('have.attr', 'href').and('include', '/community.deriv.com')

cy.findByRole('link', { name: 'regulated' }).click()
cy.wait(1000)
cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')
cy.go('back')

cy.findByRole('heading', { name: 'Try Deriv at no risk' }).should('be.visible')

cy.findByRole('button', { name: "Sounds great. Let's get started." }).should('be.visible').click()
cy.url().should('include', '/signup/')

}

describe('QATEST-1647 - should validate the About Us - Why choose us', () => 
{

    it('should validate Why Choose Us page for EU', () => {
        cy.c_visitResponsive(`/why-choose-us/${Cypress.env('RegionEU')}`, 'desktop')

        validate_AboutUs_whyChooseUs('EU')
    })

    it('should validate Why Choose Us page for ROW', () => {
        cy.c_visitResponsive(`/why-choose-us/${Cypress.env('RegionROW')}`, 'desktop')
       
        validate_AboutUs_whyChooseUs('ROW')
    })

})

describe('QATEST-1647- Responsive - should validate the About Us - Why choose us', () => 
{
    
    it('should validate Why Choose Us page for EU', () => {
        cy.c_visitResponsive(`/why-choose-us/${Cypress.env('RegionEU')}`)
       
        validate_AboutUs_whyChooseUs('EU')
    })

    it('should validate Why Choose Us page for ROW', () => {
        cy.c_visitResponsive(`/why-choose-us/${Cypress.env('RegionROW')}`)
       
        validate_AboutUs_whyChooseUs('ROW')
    })

})
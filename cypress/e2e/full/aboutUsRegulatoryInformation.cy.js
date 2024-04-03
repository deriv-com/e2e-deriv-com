import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'
import { findByRole } from '@testing-library/dom'
import { elements } from '../../support/POM/commonPage'

function validate_AboutUs_regulatoryInformation()
{
    cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')

    cy.findByRole('heading', { name: 'Deriv Investments (Europe) Limited' }).should('be.visible')

    cy.findByRole('img', { name: 'Europe map' }).should('be.visible')
    cy.findByText('Italy' ).should('be.visible')

    cy.contains('Financial disclosure report').first().click()
    cy.findByText('Financial Disclosures Annual Report 2022').should('be.visible')

    cy.contains('Key information documents').first().click()
    cy.findByText('Multipliers - Synthetics: Crash 300 Index').should('be.visible').click()

    cy.contains('RTS').first().click()
    cy.findByText('RTS28 2022').should('be.visible').click()

    cy.findByRole('img', { name: 'Labuan Fintech Association' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (FX) Ltd' }).should('be.visible')
    //view link 
    cy.findByRole('link', { name: 'Labuan Fintech Association' }).invoke("removeAttr", "target").click()
    cy.url().should('include', 'labuanfintech')
    cy.go('back')

    cy.findByRole('img', { name: 'British Virgin Islands Financial Services Commission' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (BVI) Ltd' }).should('be.visible')

    cy.findByRole('img', { name: 'Vanuata Financial Services Commission' }).should('be.visible')
    cy.findByRole('img', { name: 'Vanuatu Financial Markets Association' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (V) Ltd' }).should('be.visible')
    //view link
    cy.findByRole('link', { name: 'Financial Markets Association' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/Financial_Markets_Association_Cert')
    cy.go('back')

    cy.findByRole('img', { name: 'Deriv SVG' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (SVG) LLC' }).should('be.visible')

    cy.findByRole('img', { name: 'Deriv Limited' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv.com Limited' }).should('be.visible')

    cy.findByRole('img', { name: 'The Financial Commission' }).should('be.visible')
    cy.findByRole('heading', { name: 'The Financial Commission' }).should('be.visible')
    //view membership
    cy.findByRole('link', { name: 'view membership' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/regulatory/deriv-com-ltd-membership')
    cy.go('back')
    
    
    
}

describe('QATEST-71097 - should validate the About Us - Regulatory Information - EU', () => 
{

    it('should validate Regulatory Information page for EU', () => {
        cy.c_visitResponsive(`/regulatory/${Cypress.env('RegionEU')}`, 'desktop')

        validate_AboutUs_regulatoryInformation()
    })

})


describe('QATEST-71097- Responsive - should validate the About Us - Regulatory Information - EU', () => 
{
    
    it('should validate Regulatory Information page for EU', () => {
        cy.c_visitResponsive(`/regulatory/${Cypress.env('RegionEU')}`)
       
        validate_AboutUs_regulatoryInformation()
    })

})
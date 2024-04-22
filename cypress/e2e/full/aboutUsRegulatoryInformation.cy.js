import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'
import { findByRole } from '@testing-library/dom'
import { elements } from '../../support/POM/commonPage'

function validate_AboutUs_regulatoryInformation()
{
    //check that the disclaimer is visible
    cy.get('div').contains('67.28% of retail investor accounts')

    //check on the page content
    cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')
    cy.contains('Since 1999').should('be.visible')

    cy.findByRole('heading', { name: 'Deriv Investments (Europe) Limited' }).should('be.visible')

    cy.contains('Here are the EU countries').should('be.visible')

    cy.findByRole('link', {name: 'Austria'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Austria')
    cy.go('back')

    cy.findByRole('link', {name: 'Spain'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Spain')
    cy.go('back')

    cy.contains('Financial disclosure report').first().click()
    cy.findByText('Financial Disclosures Annual Report 2022').should('be.visible').click()
    //check on pdf file WIP
    //cy.findByRole('link',{name:'Financial Disclosures Annual Report 2022'}).invoke("removeAttr", "target")
    //cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.findByText('Multipliers - Forex').should('be.visible').click()
    //cy.go('back')

    cy.contains('RTS').first().click()
    cy.findByText('RTS28 2022').should('be.visible').click()
    //cy.go('back')

    cy.findByRole('heading', { name: 'Deriv (FX) Ltd' }).should('be.visible')
    

    cy.findByRole('heading', {name: 'Deriv (BVI) Ltd'}).should('be.visible')


    cy.findByRole('heading', {name: 'Deriv (V) Ltd'}).should('be.visible')
    cy.findByRole('link', {name: 'member', exact: 'true'}).invoke("removeAttr", "target").click()
    cy.url().should('include', '/Financial_Markets_Association_Cert')
    cy.go('back')


    cy.findByRole('heading', {name: 'Deriv (SVG) LLC'}).should('be.visible')


    cy.findByRole('heading', {name: 'Deriv.com Limited'}).should('be.visible')


    cy.findByRole('heading', {name: 'The Financial Commission'}).should('be.visible')
    //view membership
    cy.findByRole('link', { name: 'view membership' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/regulatory/deriv-com-ltd-membership')
    cy.go('back')







/*
    //view license link 
    cy.findByRole('link', { name: 'Labuan Fintech Association' }).invoke("removeAttr", "target").click()
    cy.url().should('include', 'labuanfintech')
    cy.go('back')

    cy.findByRole('img', { name: 'British Virgin Islands Financial Services Commission' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (BVI) Ltd' }).should('be.visible')

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
    
    */
    
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
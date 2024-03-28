import '@testing-library/cypress/add-commands'
import signUpPage from '../../support/POM/signUpPage'

function checkSignUpPage () {
    cy.findByRole('heading', { name: 'Join over 2.5 million traders' }).should('be.visible')
    cy.findByPlaceholderText('Email').should('be.visible')
    cy.findByRole('checkbox').should('be.visible')
    cy.findByRole('link', { name: 'terms and conditions' }).should('be.visible')
    cy.findByRole('button', { name: 'Create demo account' }).should('be.visible')
    cy.findByRole('link', { name: 'Security and privacy policy' }).should('be.visible')
    cy.findByRole('button', { name: 'Google' }).should('be.visible')
    cy.findByRole('button', { name: 'Facebook' }).should('be.visible')
    cy.findByRole('button', { name: 'Apple' }).should('be.visible')
    cy.findByText('Log in').should('be.visible') 
}

function enterEmail(email)
{
    cy.findByPlaceholderText('Email').type(email)
    cy.findByRole('checkbox').click()
    cy.findByRole('button', { name: 'Create demo account' }). click ()
}

function verificationIsSent () {
    cy.findByRole('heading', { name: 'Check your email' }).should('be.visible')
    cy.contains ('We\'ve sent a message to').should('be.visible')
    cy.findByRole('link', { name: 'Didn\'t receive your email?' }).should('be.visible')
}

describe('QATEST-1613 - should validate the Sign Up page on for ROW on desktop', () => {

    it('should be able to navigate to Sign Up page for ROW', () => {
        cy.c_visitResponsive(`signup/${Cypress.env('RegionROW')}`,'desktop')
        checkSignUpPage ()
        cy.c_generateRandomEmail('@test.com').then((email) => {
        enterEmail(email)
        verificationIsSent ()
    })
})
})

describe('QATEST-1613 - should validate the Sign Up page on for EU on desktop', () => {

    it('should be able to navigate to Sign Up page for EU', () => {
        cy.c_visitResponsive(`signup/${Cypress.env('RegionEU')}`,'desktop')
        checkSignUpPage ()
        cy.c_generateRandomEmail('@test.com').then((email) => {
        enterEmail(email)
        verificationIsSent ()
    })
})
})

describe('QATEST-1613 - should validate the Sign Up page for ROW on mobile', () => {

    it('should be able to navigate to Sign Up page for ROW', () => {
        cy.c_visitResponsive(`signup/${Cypress.env('RegionROW')}`)
        checkSignUpPage ()
        cy.c_generateRandomEmail('@test.com').then((email) => {
        enterEmail(email)
        verificationIsSent ()
        })
    })
})

describe('QATEST-1613 - should validate the Sign Up page for EU on mobile', () => {

    it('should be able to navigate to Sign Up page for EU', () => {
        cy.c_visitResponsive(`signup/${Cypress.env('RegionEU')}`)
        checkSignUpPage ()
        cy.c_generateRandomEmail('@test.com').then((email) => {
        enterEmail(email)
        verificationIsSent ()
    })
})
})
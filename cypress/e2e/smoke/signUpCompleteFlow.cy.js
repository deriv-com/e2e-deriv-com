import '@testing-library/cypress/add-commands'
import { findByRole } from '@testing-library/dom';


function enterValidEmail(email)
{
  cy.findByPlaceholderText('Email address').should('be.visible').type(email)
  cy.findByRole('checkbox').click()
  cy.get('.error').should('not.exist')
  cy.findByRole('button', { name: 'Sign up' }).should('not.be.disabled')
  cy.findByRole('button', { name: 'Sign up' }).click()
  cy.findByRole('heading', { name: 'Check your email' }).should('be.visible')
}

function generate_epoch(){
    return Math.floor(new Date().getTime() / 100000)
}

describe('Cypress test for full sign up flow', () => {

    const epoch = generate_epoch()
    const sign_up_mail =  'shariqhe' /*+ `${epoch}`*/ + '@mailinator.com';

    it('enter mail id to signup ', () => {
      cy.c_visitResponsive(Cypress.env('RegionROW'),'desktop')
      enterValidEmail(sign_up_mail);
    })

    it('open QAbox events', () =>{
       
    })

})


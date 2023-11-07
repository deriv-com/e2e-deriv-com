import '@testing-library/cypress/add-commands'
import 'cypress-iframe'

describe('Live chat', () => {

  it('Validate live chat', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'))
    cy.findByRole('button', { name: 'livechat icon' }).click();
    cy.frameLoaded('#chat-widget');
    cy.iframe('#chat-widget').findByLabelText('Name:').type('Jack');
    cy.iframe('#chat-widget').findByLabelText('E-mail:').type('jack@gmail.com');
    cy.iframe('#chat-widget').findByRole('button', { name: 'Start the chat' }).click();
    cy.iframe('#chat-widget').findByText('Hello! I’m Deriv, your virtual support.').should('be.visible');
    
  })
})
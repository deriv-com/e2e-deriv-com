import '@testing-library/cypress/add-commands'


describe('QATEST-2099 - should be navigated to the correct page- Responsible page on desktop', () => {
    it(
      'should be navigated to the correct page- Responsible page for ROW',
      { tags: ['@full-tests', '@row-tests'] },
      () => {
        cy.c_visitResponsive(`/responsible/`, { size: 'desktop' })

        cy.findByRole('heading', { name: 'Secure and responsible trading' }).should('be.visible')
        cy.findByRole('link', { name: 'enable two-factor authentication' }).should('be.visible').invoke('attr', 'href')
        .should('eq', 'https://app.deriv.com/account/two-factor-authentication?lang=EN');
        cy.findByRole('link', { name: 'go to account settings' }).should('be.visible').invoke('attr', 'href')
        .should('eq', 'https://app.deriv.com/account/self-exclusion?lang=EN');
        cy.findByRole('link', { name: 'Customer Support' }).should('be.visible').invoke('attr', 'href')
        .then((href) => {
            const normalizedHref = href.replace(/-/g, '_'); // Replace hyphens with underscores
            expect(normalizedHref).to.equal('/contact_us/');
        })

        cy.contains('Create free demo account').trigger('click')
        cy.url().should('include', '/signup/')
        /*cy.findByRole('button',{ name: 'Create free demo account' }).scrollIntoView().should('be.visible').click()
        //cy.findAllByText('Create free demo account', { timeout: 5000 }).scrollIntoView().should('be.visible').click()
        cy.url().should('include', '/signup/')*/

       /* cy.findByRole('button', { name: 'Create free demo account' }).then(($link) => {
            const url = $link.prop('href')
            cy.visit(url, {
              onBeforeLoad: (win) => {
                cy.stub(win, 'open').as('windowOpen')
              },
            })
           // cy.url().should('include', '/signup/')
        })*/
      }
    )
  })
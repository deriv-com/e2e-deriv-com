import '@testing-library/cypress/add-commands'

function checkRegulatorySection()
{
    cy.findByRole('heading', { name: 'Deriv Investments (Europe) Limited' }).should('be.visible')
    cy.findByRole("heading", { name: "Deriv (FX) Ltd" }).should("be.visible")
    cy.findByRole('heading', { name: 'Deriv (BVI) Ltd' }).should('be.visible')
    cy.findByRole('img', { name: 'British Virgin Islands Financial Services Commission' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (V) Ltd' }).should('be.visible')
    cy.findByRole('img', { name: 'Vanuata Financial Services Commission' }).should('be.visible')
    cy.findByRole('img', { name: 'Vanuatu Financial Markets Association' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv (SVG) LLC' }).should('be.visible')
    cy.findByRole('img', { name: 'Deriv SVG' }).should('be.visible')
    cy.findByRole('heading', { name: 'Deriv.com Limited' }).should('be.visible')
    cy.findByRole('img', { name: 'Deriv Limited' }).should('be.visible')
    cy.findByRole("heading", { name: "The Financial Commission" }).should( "be.visible")
    cy.findByRole("img", { name: "The Financial Commission" }).should("be.visible")
}

function checkViewLicenseLink()
{
  const licenceLinks = cy.findAllByRole('link', { name: '(view licence)' });
  licenceLinks.each(($link, index) => {
    const href = {
      0: '/regulatory/Deriv_Investments_(Europe)_Limited.pdf',
      1: '/regulatory/Deriv_(FX)_Ltd.pdf',
      2: '/regulatory/Deriv_(BVI)_Ltd.pdf',
      3: '/regulatory/Deriv_(V)_Ltd.pdf'
    };
    cy.wrap($link).should('have.attr', 'href', href[index]).click();
    cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible');
  });
  cy.findByRole('link', { name: 'Labuan Fintech Association' }).should('have.attr', 'href', 'https://www.labuanfintech.org/').click();
  cy.findByRole('link', { name: 'Financial Markets Association' }).should('have.attr', 'href', '/regulatory/Financial_Markets_Association_Cert.pdf').click();
}

describe('QATEST-1644 - Regulatory page', () => {
    it('should validate the content and links in regulatory page for ROW', () => {
       cy.c_visitResponsive(`/regulatory/${Cypress.env('RegionROW')}`)
       cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')
       checkRegulatorySection()
       checkViewLicenseLink()
       
    })
})
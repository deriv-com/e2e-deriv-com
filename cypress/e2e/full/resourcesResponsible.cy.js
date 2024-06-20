import '@testing-library/cypress/add-commands'

const differencesForRow = [
    {
      element: 'Customer Support',
      attribute: 'href',
      expectedValue: '/contact_us/'
    }
  ];
  const differencesForEU = [
    {
      element: 'key information documents (KIDs)',
      attribute: 'href',
      expectedValue: '/regulatory/#kid'
    }
  ];

// Custom command to visit responsible page based on region with differences
function visitResponsiblePageWithDifferences(differences) {
  cy.findByRole('heading', { name: 'Secure and responsible trading' }).should('be.visible')
  cy.findByRole('link', { name: 'enable two-factor authentication' }).should('be.visible').invoke('attr', 'href')
    .should('eq', 'https://app.deriv.com/account/two-factor-authentication?lang=EN');
  cy.findByRole('link', { name: 'go to account settings' }).should('be.visible').invoke('attr', 'href')
    .should('eq', 'https://app.deriv.com/account/self-exclusion?lang=EN');
  cy.c_waitForPageLoad()
  cy.findAllByText('Create free demo account', { timeout: 5000 }).scrollIntoView().should('be.visible').click()
  cy.url().should('include', '/signup/')
  // Check for differences based on region
  differences.forEach(difference => {
    const { element, expectedText, attribute, expectedValue } = difference;
    cy.findByRole('link', { name: element }).should('be.visible').invoke('attr', attribute)
      .then((href) => {
        const normalizedHref = href.replace(/-/g, '_'); // Replace hyphens with underscores
        expect(normalizedHref).to.equal(expectedValue);
  });
})
}

describe('QATEST-2099 - should be navigated to the correct page- Responsible page on desktop', () => {
  it(
    'should be navigated to the correct page- Responsible page for ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
        cy.c_visitResponsive(`/responsible/`, { size: 'desktop' })
      visitResponsiblePageWithDifferences(differencesForRow);
    }
  )

  it(
    'should be navigated to the correct page- Responsible page for EU',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/responsible/`, { size: 'desktop' })
      visitResponsiblePageWithDifferences(differencesForEU);
    })
})
describe('QATEST-2099 - should be navigated to the correct page- Responsible page on Mobile', () => {
    it(
      'should be navigated to the correct page- Responsible page for ROW',
      { tags: ['@full-tests', '@row-tests'] },
      () => {
        cy.c_visitResponsive('/responsible/', { waitLoad: true })
        visitResponsiblePageWithDifferences(differencesForRow);
      }
    )
  
    it(
      'should be navigated to the correct page- Responsible page for EU',
      { tags: ['@full-tests', '@row-tests'] },
      () => {
          cy.c_visitResponsive(`${Cypress.env('RegionEU')}/responsible/`, { waitLoad: true })
        visitResponsiblePageWithDifferences(differencesForEU);
      }
    )
  
  })
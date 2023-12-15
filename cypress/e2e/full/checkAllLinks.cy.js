import '@testing-library/cypress/add-commands'
describe('check deriv.com URLs', () => {
  const capturedUrls = [];
  it('retrieve all URLs and check for broken links', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    cy.get('.disclaimer-module--risk_warning_container--7005e > .text-small').should('be.visible');
    cy.get('a').each(($link) => {
      const url = $link.prop('href');
      if (url.includes('deriv.com') && !url.includes('.exe')) {
        capturedUrls.push(url);
        console.log("Captured URLs:", url);
        cy.request({
          url,
          failOnStatusCode: false,
        }).then((response) => {
          if (response.status !== 200) {
            cy.log(`Broken link found: ${url}`);
          }
        });
      }
    }).then(() => {
      cy.log('Captured URLs:');
      capturedUrls.forEach((url) => {
        cy.log(url);
      });
    });
  });

  it('visit URLs, Capture Child Links, and Display', () => {
    // Visit each captured URL, capture child links, and display them
    capturedUrls.forEach((url, index) => {
      cy.log(`Visiting URL ${index + 1}/${capturedUrls.length}: ${url}`);
      cy.visit(url);
      cy.get('a').each(($link) => {
        const childUrl = $link.prop('href');
        if (childUrl.includes('deriv.com') && !childUrl.includes('.pdf')) {
          cy.request({
            url: childUrl,
            failOnStatusCode: false,
          }).then((response) => {
            if (response.status !== 200) {
              cy.log(`Broken link found: ${childUrl}`);
            }
            else {
              cy.log(`Child Link with "staging.deriv": ${childUrl}`);
              console.log('childCaptured URLs:' , childUrl);
            }
          });
        }
      });
    });
  });
});


import '@testing-library/cypress/add-commands'

describe('check deriv.com URLs', () => {
  const capturedUrls = [];
  it('retrieve all URLs and check for broken links', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    cy.get('a').each(($link) => {
      const url = $link.prop('href');
      if (url.includes('deriv.com')) {
        capturedUrls.push(url);
        console.log("Captured URLs:", url);
        cy.request({
          url,
          failOnStatusCode: false,

        }).then((response) => {
          if (response.status !== 200) {
            cy.log("Broken link found:"(url));
          }
          else if (response.headers['content-type'].includes('application/pdf')) {
            cy.request({
              url: url,
              encoding: 'binary',
              responseType: 'blob',
            }).then((pdfResponse) => {
              expect(pdfResponse.status).to.eq(200);
              expect(pdfResponse.headers['content-type']).to.include('application/pdf');
            });
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

  it('visit all captured URLs, and capture their child links', () => {
    const uniqueLinks = [...new Set(capturedUrls)];
    console.log(uniqueLinks);
    const excludedTerms = ['.exe', 'trustpilot', 'blog.deriv.com', 'api.deriv.com', 'community.deriv.com', '.pdf'];
    const applink = ["app.deriv.com", "smarttrader"]
    uniqueLinks.forEach((url, index) => {
      cy.log(`Visiting URL ${index + 1}/${uniqueLinks.length}: ${url}`);
      if (!excludedTerms.some(term => url.includes(term))) {
        if (applink.some(term => url.includes(term))) {
          cy.visit(url);
        }
        else {
          cy.visit(url);
          cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible');
        }
      }

      cy.get('a').each(($link) => {
        const childUrl = $link.prop('href');
        if (childUrl.includes('deriv.com')) {
          cy.request({
            url: childUrl,
            failOnStatusCode: false,
          }).then((response) => {
            if (response.status !== 200) {
              cy.log("Broken link found:", (childUrl));
            }
            else {
              cy.log("Child Link with deriv.com:", (childUrl));
              console.log('childCaptured URLs:', childUrl);
            }
          });
        }
      });
    });
  });





});

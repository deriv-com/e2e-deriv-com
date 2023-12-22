import '@testing-library/cypress/add-commands'
describe('check deriv.com URLs', () => {
  const capturedUrls = [];
  const derivLinks = ["deriv.com", "derivdotcom", "@deriv", "deriv_official"]
  it('retrieve all urls and check for broken links', () => {
    cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
    cy.get('a').each(($link) => {
      const url = $link.prop('href');
      if (derivLinks.some(term => url.includes(term))) {
        capturedUrls.push(url);
        console.log(url);
        cy.request({
          url,
          failOnStatusCode: false,
        })
          .then((response) => {
            if (response.status !== 200) {
              cy.log("Broken link found:"(url));
            }
            else if (response.headers['content-type'].includes('application/pdf')) {
              cy.request({
                url: url,
                encoding: 'binary',
                responseType: 'blob',
              })
                .then((pdfResponse) => {
                  expect(pdfResponse.status).to.eq(200);
                  expect(pdfResponse.headers['content-type']).to.include('application/pdf');
                });
            }
          });
      }
    })
      .then(() => {
        cy.log('Captured URLs:');
        capturedUrls.forEach((url) => {
          cy.log(url);
        });
      });
  });

  it('visit all captured urls, and capture their child links', () => {
     const uniqueLinks = [...new Set(capturedUrls)];
    console.log(uniqueLinks);
    const excludedLinks = ['.exe', 'trustpilot', 'blog.deriv.com', 'api.deriv.com', 'community.deriv.com', '.pdf', "twitter", "www."];
    const applink = ["app.deriv.com", "smarttrader.deriv.com", "bot.deriv.com", "p2p"];
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of null")) {
        return true;
      }
      return false;
    });
    uniqueLinks.forEach((url, index) => {
      cy.log(`Visiting URL ${index + 1}/${uniqueLinks.length}: ${url}`);

      if (!excludedLinks.some(term => url.includes(term))) {
        if (applink.some(term => url.includes(term))) {
          cy.visit(url);
        }
        else {
          cy.visit(url);
          cy.findByRole('button', { name: 'whatsapp icon' }).should('be.visible');
          cy.findByRole('heading', { name: 'The requested URL was not found' }).should('not.exist');
        }
      }
      const derivAllowed= ["deriv.com"]
      function containsDerivSubstring(url) {
        return url.includes(derivAllowed);
      }

      cy.get('a').each(($link) => {
        const childUrl = $link.prop('href');
        if (containsDerivSubstring(childUrl) && !capturedUrls.includes(childUrl)) {
          cy.request({
            url: childUrl,
            failOnStatusCode: false,
          }).then((response) => {
            if (response.status !== 200) {
              cy.log("Broken link found:", (childUrl));

            }

            else {
              cy.log("Child Links with deriv:", (childUrl));
              console.log('childCaptured URLs:', childUrl);
            }
          });
        }
      });
    });
  });
});
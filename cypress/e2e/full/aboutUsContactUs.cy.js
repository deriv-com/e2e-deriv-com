import '@testing-library/cypress/add-commands';
import homeBanner from '../../support/POM/homePage';

function validateAboutUsContactUs() {
    // Validate main headings
    cy.findByRole('heading', { name: 'Contact us' }).should('be.visible');
    cy.findByRole('heading', { name: 'Ask everyone' }).should('be.visible');
    cy.findByRole('heading', { name: 'We’re here to help' }).should('be.visible');

    // Validate 'Visit our Help centre' link
    cy.findByRole('link', { name: 'Visit our Help centre' }).should('have.attr', 'href', '/help-centre/').click();
    cy.findByRole('heading', { name: 'How can we help?' }).should('be.visible');
    cy.go('back');

    // Validate 'Ask the community' link
    cy.findByRole('link', { name: 'Ask the community' }).should('have.attr', 'href', 'https://community.deriv.com').invoke('removeAttr', 'target').click();
    cy.findByRole('heading', { name: 'Welcome to our community' }).should('be.visible');
    cy.go('back');

    // Validate 'Our offices' section
    cy.findByRole('heading', { name: 'Our offices' }).should('be.visible');

    // Validate the number of maps
    cy.get('[class*="_offices__MapContainer"]').should('have.length', 21);

    // Validate titles of continents
    ['Europe', 'Asia', 'Middle East', 'Africa', 'Latin America', 'Caribbean', 'Oceania'].forEach((continent) => {
        cy.findByRole('heading', { name: continent }).should('be.visible');
    });

    // Validate titles of countries
    [
        'United Kingdom', 'France', 'Malta', 'Cyprus', 'Guernsey', 'Berlin', 'Malaysia', 'Singapore',
        'Hong Kong', 'Dubai', 'Jordan', 'Rwanda', 'Paraguay', 'Cayman Islands', 'British Virgin Islands', 'Vanuatu',
    ]
        .forEach((country) => {
            cy.findByRole('heading', { name: country }).should('be.visible');
        });

    // Validate titles of cities in Malaysia
    ['Cyberjaya', 'Labuan', 'Ipoh', 'Melaka'].forEach((city) => {
        cy.findByText(city).should('be.visible');
    });

    // Validate Google Maps links
    cy.get('a[href*="/maps/"]').each(($link) => {
        cy.wrap($link).invoke('attr', 'href').should('include', '/maps/');
    });

    cy.findByRole('heading', { name: 'Business Partnership' }).should('be.visible');
    cy.findByText('Contact us via live chat').should('be.visible');
}


describe('QATEST-1651 - should validate the About Us - Contact us', () => {
    it(
      'should validate Contact Us page for EU',
      { tags: ['@full-tests', '@eu-tests'] },
      () => {
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/contact-us`, {
          size: 'desktop',
        })
  
        validateAboutUsContactUs()
      }
    )
  
    it(
      'should validate Contact Us page for ROW',
      { tags: ['@full-tests', '@row-tests'] },
      () => {
        cy.c_visitResponsive(`/contact-us`, { size: 'desktop' })
  
        validateAboutUsContactUs()
      }
    )
  })
  
  describe('QATEST-1651- Responsive - should validate the About Us - Contact us', () => {
    it(
      'should validate Contact Us page for EU',
      { tags: ['@full-tests', '@eu-tests'] },
      () => {
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/contact-us`)
  
        validateAboutUsContactUs();
      }
    )
  
    it(
      'should validate Contact Us page for ROW',
      { tags: ['@full-tests', '@row-tests'] },
      () => {
        cy.c_visitResponsive(`/contact-us`)
  
        validateAboutUsContactUs()
      }
    )
  })

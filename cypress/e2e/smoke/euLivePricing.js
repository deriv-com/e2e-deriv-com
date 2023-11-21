import "@testing-library/cypress/add-commands";

describe("QATEST-1328 - Live Pricing table EU", () => {
  it("Should click on all the 5 different markets and check whether the live pricing table for each is displayed.", () => {
    cy.c_visitResponsive(Cypress.env("RegionEU"));
    cy.validate_markets("eu");
  });

  it("Should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - EU desktop.", () => {
    cy.forex_viewall("eu", "desk");
    cy.derivedindices_viewall("eu", "desk");
    cy.stockindices_viewall("eu", "desk");
    cy.cryptocurrencies_viewall("eu", "desk");
    cy.commodities_viewall("eu", "desk");
  });

  it("Should click on View All link on all the 5 markets and check whether all instruments for the particular market is displayed - EU mobile.", () => {
    cy.forex_viewall("eu", "mob");
    cy.derivedindices_viewall("eu", "mob");
    cy.stockindices_viewall("eu", "mob");
    cy.cryptocurrencies_viewall("eu", "mob");
    cy.commodities_viewall("eu", "mob");
  });
});

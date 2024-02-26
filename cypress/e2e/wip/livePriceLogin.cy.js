import "@testing-library/cypress/add-commands"

const username = Cypress.env("loginEmailProd")
const password = Cypress.env("loginPasswordProd")

describe("Verify deriv app login", () => {
  
  it("QATEST-103970: I should be able to successfully login and logout from deriv app", () => {
      
    cy.c_visitResponsive(Cypress.env("derivAppUrl") ,"desktop")
    cy.findByRole("button", { name: "Log in" }).click({ force: true })
    cy.findByLabelText("Email").type(username)
    cy.findByLabelText("Password").type(password, { log: false })
    cy.findByRole("button", { name: "Log in" }).click()
    // Verify home page has successfully loaded
    cy.findByTestId("dt_div_100_vh")
      .findByTestId("dt_popover_wrapper")
      .findByTestId("dt_balance_text_container")
      .should("be.visible", {
        timeout: 30000,
      })

    cy.get('.traders-hub-header__logo-wrapper a')
    .should('have.attr', 'href')
    .then(href => {
      // Modify the href attribute to open the link in the same tab
      cy.get('.traders-hub-header__logo-wrapper a')
        .should('have.attr', 'href', 'https://deriv.com/')
        .invoke('removeAttr', 'target') // Remove any existing target attribute
        .click()
  })

    cy.findAllByRole('button', { name: 'Buy' }).first().click()
    cy.url().should('include', '/traders-hub/')
    cy.go('back');

  
  })
})

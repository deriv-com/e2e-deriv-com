import "./livepricing"
import "./location"
import 'cypress-iframe'


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test on uncaught:exception
  return false
})


Cypress.Commands.add('c_waitForPageLoad',()=>{
  cy.get('button[name="whatsapp icon"]',{timeout:30000}).should("be.visible")
})

Cypress.Commands.add("c_visitResponsive", (path, size, quickLoad ) => {
  //Custom command that allows us to use baseUrl + path and detect with this is a responsive run or not.
  cy.log(path);
  if (size === undefined) size = Cypress.env("viewPortSize");

  if (size == "small") cy.viewport("iphone-xr");
  else if (size == "medium") cy.viewport("ipad-2");
  else if (size == "desktop") cy.viewport("macbook-16");

  cy.visit(path);
  if (quickLoad === undefined){
  if (path.includes("region")) {
    //Wait for relevent elements to appear (based on page)
    cy.log("Home page Selected");
    cy.c_waitForPageLoad() //For the home page, this seems to be the best indicator that a page has fully loaded. It may change in the future.
  }

  if (path.includes("help-centre")) {
    //Wait for relevent elements to appear (based on page)
    cy.log("Help Centre Selected");
    cy.findByRole("heading", {
      name: "Didn’t find your answer? We can help.",
    }).should("be.visible", { timeout: 30000 });
  }
}
});

Cypress.Commands.add('c_go',(direction ,quickLoad)=>{
  cy.go(direction)
  if(quickLoad===undefined){
    cy.c_waitForPageLoad()
  }
})

Cypress.Commands.add('c_generateRandomEmail', (domain) => {
  return `user${Math.floor(Math.random() * 100000)}${domain}`
})

let recallCounter = 0;
Cypress.Commands.add('c_emailVerification', (verification_code, event_email_url, epoch) => {

  cy.visit(`https://${Cypress.env("emailUser")}:${Cypress.env("emailPassword")}@${event_email_url}`)

  cy.origin(`https://${event_email_url}`,{ args: { epoch } },  ({ epoch }) => {     

    cy.get('a[href*="account_opening_new"]').last().click()
    cy.contains('p', "sanity"+epoch).should('be.visible')
    cy
      .get("a")
      .eq(1)
        .invoke("attr", "href")
        .then((href) => {
          const code = href.match(/code=([A-Za-z0-9]{8})/)
          if (code) {
            verification_code = code[1]
            Cypress.env("emailVerificationCode", verification_code)
          } else {
            cy.log("Unable to find code in the URL")
          }
        })
    }
  )
})



import './livepricing'
import './location'
import 'cypress-iframe'
import registerCypressGrep from '@bahmutov/cy-grep/src/support'
import '@percy/cypress'
registerCypressGrep()

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test on uncaught:exception
  return false
})

Cypress.Commands.add('c_waitForPageLoad', (options = {}) => {
  const { logging = true } = options
  cy.findByRole('button', {
    name: 'whatsapp icon',
    timeout: 35000,
    log: logging,
  }).should('be.visible', { log: logging })
})

Cypress.Commands.add('c_visitResponsive', (path, options = {}) => {
  //Custom command that allows us to use baseUrl + path and detect with this is a responsive run or not.
  const {
    size = Cypress.env('viewPortSize'),
    waitLoad = false,
    quickLoad = false,
    logging = true,
    failNotAllowed = true,
  } = options
  if (logging == true) cy.log(path)

  if (size == 'small') cy.viewport('iphone-xr', { log: logging })
  else if (size == 'medium') cy.viewport('ipad-2', { log: logging })
  else if (size == 'desktop') cy.viewport('macbook-16', { log: logging })

  cy.visit(path, { failOnStatusCode: failNotAllowed, log: logging })
  if (quickLoad === false) {
    if (waitLoad == true || path.includes('region')) {
      if (path.includes('region')) {
        if (logging == true) cy.log('Home page Selected')
      }
      cy.c_waitForPageLoad({ logging: logging })
    }
    if (path.includes('help-centre')) {
      //Wait for relevent elements to appear (based on page)
      if (logging == true) cy.log('Help Centre Selected')
      cy.findByRole('heading', {
        name: 'Didn’t find your answer? We can help.',
        log: logging,
      }).should('be.visible', { timeout: 30000 })
    }
  }
})

Cypress.Commands.add('c_go', (direction, quickLoad) => {
  cy.go(direction)
  if (quickLoad === undefined) {
    cy.c_waitForPageLoad()
  }
})

Cypress.Commands.add('c_generateRandomEmail', (domain) => {
  return `user${Math.floor(Math.random() * 100000)}${domain}`
})

let recallCounter = 0
Cypress.Commands.add(
  'c_emailVerification',
  (verification_code, event_email_url, epoch) => {
    cy.visit(
      `https://${Cypress.env('emailUser')}:${Cypress.env('emailPassword')}@${event_email_url}`
    )

    cy.origin(
      `https://${event_email_url}`,
      { args: { epoch } },
      ({ epoch }) => {
        cy.get('a[href*="account_opening_new"]').last().click()
        cy.contains('p', 'sanity' + epoch).should('be.visible')
        cy.get('a')
          .eq(1)
          .invoke('attr', 'href')
          .then((href) => {
            const code = href.match(/code=([A-Za-z0-9]{8})/)
            if (code) {
              verification_code = code[1]
              Cypress.env('emailVerificationCode', verification_code)
            } else {
              cy.log('Unable to find code in the URL')
            }
          })
      }
    )
  }
)

Cypress.Commands.add('c_checkAllPlatformLinks', (urlDetails) => {
  urlDetails.forEach((details) => {
    cy.contains(`a[href="${details.url}"]`, 'Learn more').click()
    cy.c_waitForPageLoad()
    cy.title().should('equal', details.title)
    cy.contains('h1', details.content)
    cy.url().should('contain', details.url)
    cy.c_go('back')
    cy.c_waitForPageLoad()
  })
})

Cypress.Commands.add('c_checkAllPartnerLinks', (urlDetails) => {
  urlDetails.forEach((details) => {
    cy.get(`a[href="${details.url}"]`)
      .eq(2)
      .invoke('removeAttr', 'target')
      .click({ force: true })
    cy.title().should('equal', details.title)
    cy.get('h1').should('contain', details.content)
    cy.url().should('contain', details.url)
    cy.go('back')
  })
})

Cypress.Commands.add('c_proceedEU', (region) => {
  if (region === 'EU') {
    cy.findByText('Redirect notice').should('be.visible')
    cy.findByRole('link', { name: 'Proceed' }).click()
  }
})

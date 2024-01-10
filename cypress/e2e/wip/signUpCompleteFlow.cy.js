import '@testing-library/cypress/add-commands'

function enterValidEmail(email)
{
  cy.findByPlaceholderText('Email address').should('be.visible').type(email)
  cy.findByRole('checkbox').click()
  cy.get('.error').should('not.exist')
  cy.findByRole('button', { name: 'Sign up' }).should('not.be.disabled')
  cy.findByRole('button', { name: 'Sign up' }).click()
  cy.findByRole('heading', { name: 'Check your email' }).should('be.visible')
}

function generate_epoch(){
    return Math.floor(new Date().getTime() / 100000)
}

describe('Cypress test for full sign up flow', () => {

    const epoch = generate_epoch()
    const sign_up_mail =  'sanity' + `${epoch}` + '@binary.com'
    let verification_code

    beforeEach(() => {
      cy.c_visitResponsive("/endpoint","large")
      localStorage.setItem("config.server_url", Cypress.env("configServer"))
      localStorage.setItem("config.app_id", Cypress.env("configAppId"))
      cy.c_visitResponsive("/endpoint","large")
      cy.c_visitResponsive(Cypress.env('RegionEU'),"large")
      cy.log('Server' + Cypress.env("configServer"))
      cy.log('AppId' + Cypress.env("configAppId"))
      enterValidEmail(sign_up_mail)
    })

    function selectCountryOfResidence(){
      cy.findByLabelText('Country of residence').should('be.visible')
      cy.findByLabelText('Country of residence').clear().type(Cypress.env("country_of_residence"))
      cy.findByText(Cypress.env("country_of_residence")).click()
    }

    function selectCitizenship(){
      cy.findByLabelText('Citizenship').type(Cypress.env("citizenship")) 
      cy.findByText(Cypress.env("citizenship")).click()
      cy.findByRole('button', { name: 'Next' }).click()
    }

    function enterPassword(){
      cy.findByLabelText('Create a password').should('be.visible')
      cy.findByLabelText('Create a password').type(Cypress.env("user_password"))
      cy.findByRole('button', { name: 'Start trading' }).click()
    }

    function tradingPreference(){
      cy.get('.dc-btn.dc-btn--transparent').then(($element) => {
        if ($element.is(':visible')) {
            cy.get('.dc-btn.dc-btn--transparent').eq(1).click()
        } 
      })
    }

    function completeOnboarding(){
      for (let next_button_count = 0; next_button_count < 5; next_button_count++) {
        cy.contains('button', 'Next').should('be.visible')
        cy.contains('button', 'Next').click()
      }
      cy.contains('Start trading').should('be.visible')
      cy.contains('button', 'Start trading').click()   
      cy.contains('Switch accounts').should('be.visible')
      cy.contains('button', 'Next').click()
      if(Cypress.env("diel_country_list").includes(Cypress.env("citizenship")) ){
        cy.contains('Choice of regulation').should('be.visible')
        cy.contains('button', 'Next').click()
      }
      cy.contains("Trader's Hub tour").should('be.visible')
      cy.contains('button', 'OK').click()
    }


    it('enter mail id to signup on deriv.com', () => {
      cy.wait(20000)
      cy.c_emailVerification(verification_code,Cypress.env("event_email_url"), epoch)
      cy.then(() => {
        cy.c_visitResponsive(Cypress.env("derivAppUrl"), "desktop")
        //cy.c_visitResponsive(Cypress.env("derivAppUrl") + '/endpoint', "desktop")
        localStorage.setItem('config.server_url', Cypress.env("configServer"))
        localStorage.setItem('config.app_id', Cypress.env("configAppId"))

        verification_code = Cypress.env("emailVerificationCode")
        cy.log('verification code' + verification_code)
        const today = new Date()
        const signupUrl = `${Cypress.env("derivAppUrl")}/redirect?action=signup&lang=EN_US&code=${verification_code}&date_first_contact=${today.toISOString().split('T')[0]}&signup_device=desktop`

        cy.c_visitResponsive(signupUrl, "desktop")
   
        cy.get('h1').contains('Select your country and').should('be.visible')

        selectCountryOfResidence()
        selectCitizenship()
        enterPassword()
        tradingPreference() // stuck at this point where we are not able to perform click on options from model
        completeOnboarding()

      })
    })

})


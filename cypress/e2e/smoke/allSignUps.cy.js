import '@testing-library/cypress/add-commands'
import signUpPage from '../../support/POM/signUpPage'
import footer from '../../support/POM/commonPage'

describe('QATEST-1378 - should validate signup page', () => {
  const validateSignUpPage = () => {
    signUpPage.elements.headerTxt().should('be.visible')
    signUpPage.elements.googleButton().should('be.visible')
    signUpPage.elements.facebookButton().should('be.visible')
    signUpPage.elements.appleButton().should('be.visible')
    signUpPage.elements.appleButton().should('be.visible')
    signUpPage.elements.emailPlaceHolderTxt().should('be.visible')
    signUpPage.elements.tncLink().should('be.visible')
    signUpPage.elements.alreadyHaveAccountTxt().should('be.visible')
    signUpPage.elements.logInTxt().should('be.visible')
  }

  it('should be able to sign up on a ROW mobile', () => {
    cy.c_visitResponsive('/signup' + String(Cypress.env('RegionROW')))
    validateSignUpPage()
  })

  it('should be able to sign up on a EU mobile', () => {
    cy.c_visitResponsive('/signup' + String(Cypress.env('RegionEU')))
    validateSignUpPage()
    footer.elements.cfdFloatingBannerLink().should('exist')
  })

  it('should be able to sign up on a ROW desktop', () => {
    cy.c_visitResponsive('/signup/' + Cypress.env('RegionROW'), 'desktop');
    validateSignUpPage()
  })

  it('should be able to sign up on a EU desktop', () => {
    cy.c_visitResponsive('/signup/' + Cypress.env('RegionEU'), 'desktop');
    validateSignUpPage()
    footer.elements.cfdFloatingBannerLink().should('exist')
  })
})

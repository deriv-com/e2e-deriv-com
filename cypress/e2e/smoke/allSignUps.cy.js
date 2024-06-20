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

  function validateBannerContentImage() {
    cy.findByRole('heading', {
      name: 'Join over 2.5 million online traders',
    }).should('be.visible')
    cy.findByRole('img', { name: 'call to action background' }).should(
      'be.visible'
    )
  }

  it(
    'should be able to sign up on a ROW mobile',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive('/', { waitLoad: true })
      validateBannerContentImage()
      cy.get('#cta-container')
        .contains('Open demo account')
        .should('not.be.visible')
      cy.findAllByRole('button', { name: 'Open demo account' })
        .eq(0)
        .should('be.visible')
        .click({ force: true })
      validateSignUpPage()
    }
  )

  it(
    'should be able to sign up on a EU mobile',
    { tags: ['@smoke-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU') + '/', {
        waitLoad: true,
      })
      validateBannerContentImage()
      cy.get('#cta-container')
        .contains('Open demo account')
        .should('not.be.visible')
      cy.findAllByRole('button', { name: 'Open demo account' })
        .eq(0)
        .should('be.visible')
        .click({ force: true })
      validateSignUpPage()
      footer.elements.cfdFloatingBannerLink().should('exist')
    }
  )

  it(
    'should be able to sign up on a ROW desktop',
    { tags: ['@smoke-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive('/', { waitLoad: true, size: 'desktop' })
      validateBannerContentImage()
      cy.findAllByRole('button', { name: 'Open demo account' })
        .eq(3)
        .should('be.visible')
        .click({ force: true })
      validateSignUpPage()
    }
  )

  it(
    'should be able to sign up on a EU desktop',
    { tags: ['@smoke-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU') + '/', {
        size: 'desktop',
        waitLoad: true,
      })
      validateBannerContentImage()
      cy.findAllByRole('button', { name: 'Open demo account' })
        .eq(3)
        .should('be.visible')
        .click({ force: true })
      validateSignUpPage()
      footer.elements.cfdFloatingBannerLink().should('exist')
    }
  )
})

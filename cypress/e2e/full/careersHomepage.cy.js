import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

function redirectPopup(region) {
  if (region === 'EU') {
    cy.findByText('Redirect notice').should('be.visible')
    cy.findByRole('link', { name: 'Proceed' }).click()
  }
}
function careersHomepage(size, region) {
  cy.url().should('include', '/careers/')
  cy.findByRole('heading', { name: 'We are Deriv' }).click()
  cy.findByRole('img', { name: 'deriv careers' }).should('be.visible', {
    timeout: 50000,
  })

  if (size == 'desktop') {
    cy.findByRole('link', { name: 'Locations' }).click()
    cy.findByRole('link', { name: 'Home' }).click()
    cy.get('.carousel-style__ChevronRight-sc-1wwuyp8-8').click()
  } else {
    cy.findByRole('button', { name: 'Explore jobs' })
      .parent()
      .find('svg')
      .click({ force: true })
    cy.findByRole('link', { name: 'Locations' }).click({ force: true })
    cy.findByRole('button', { name: 'Explore jobs' })
      .parent()
      .find('svg')
      .click({ force: true })
    cy.findByRole('link', { name: 'Home' }).click({ force: true })
  }

  cy.findByRole('link', { name: 'See our open positions' }).click()
  redirectPopup(region)
  cy.findByRole('button', { name: 'Explore jobs' }).click()
  cy.c_waitForPageLoad()
  cy.findByRole('heading', { name: "Who we're looking for" }).should(
    'be.visible'
  )
  cy.findByRole('heading', {
    name: 'What’s different about working at Deriv?',
  }).should('be.visible')
  //TODO Capturing image element will be improved later

  /*cy.findByRole('img', { name: 'Team discussing ideas' }).should('be.visible', {
    timeout: 50000,
  })*/

  cy.findByRole('heading', { name: 'Join your team' }).should('be.visible')
  const imageNavigation = (imageName) => {
    cy.findByRole('img', { name: imageName })
      .should('exist')
      .click()
      .then(() => {
        cy.wait(2000)
        cy.go('back')
      })
  }
  imageNavigation('Back-end development jobs at Deriv')
  imageNavigation('Marketing and global partnership jobs at Deriv')
  imageNavigation('Cyber security and IT jobs at Deriv')
  imageNavigation('Customer support jobs at Deriv')
  imageNavigation('Human Resources jobs at Deriv')
  imageNavigation('Product design and UX jobs at Deriv')
  imageNavigation('Legal and compliance jobs at Deriv')
  imageNavigation('Payment solutions and integration jobs at Deriv')
  imageNavigation('Front-end development jobs at Deriv')
  imageNavigation('Trading operations jobs at Deriv')
  imageNavigation('Software testing jobs at Deriv')
  imageNavigation('Business excellence jobs at Deriv')
  imageNavigation('Internal audit jobs at Deriv')
  imageNavigation('Project management jobs at Deriv')
  imageNavigation('Business Intelligence jobs at Deriv')
  cy.findByRole('heading', {
    name: 'Everything is built around our values',
  }).should('be.visible')

  //TODO Capturing image element will be improved later

  /*cy.findByRole('img', { name: 'Integrity' }).should('be.visible', {
    timeout: 50000,
  })
  cy.findByRole('img', { name: 'Teamwork' }).should('be.visible', {
    timeout: 50000,
  })*/

  cy.findByRole('heading', { name: 'Life at Deriv' }).should('be.visible')

  //TODO Capturing image element will be improved later

  /*cy.findByRole('img', { name: 'Group of people doing yoga' }).should(
    'be.visible',
    { timeout: 50000 }
  )
  cy.findByRole('img', { name: 'Water rafting team building activity' }).should(
    'be.visible',
    { timeout: 50000 }
  )*/

  cy.findByRole('heading', { name: 'In the words of our employees' }).should(
    'be.visible'
  )
  cy.get('.swiper-slide').should('exist')
  cy.findByRole('heading', { name: 'Our hiring process' }).should('be.visible')
  cy.findByRole('heading', { name: 'Apply' }).should('be.visible')
  cy.findByRole('heading', { name: 'Decision' }).should('be.visible')
  cy.findByRole('heading', {
    name: 'Make an impact. Start your Deriv journey now.',
  }).should('be.visible')
  cy.findByRole('link', { name: 'See all jobs' }).click()
  redirectPopup(region)
}

describe('QATEST-1659 - should validate the Career Home page in desktop', () => {
  it(
    'should be able to navigate to Dbot page from home page and validate the page content and links in Desktop for ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive('', { size: 'desktop' })
      homeBanner.elements.aboutUsMenu().should('be.visible').click()
      homeBanner.elements.careers().should('be.visible').first().click()
      careersHomepage('desktop', 'ROW')
    }
  )

  it(
    'should be able to navigate to Dbot page from home page and validate the page content and links in Desktop for EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'), { size: 'desktop' })
      homeBanner.elements.aboutUsMenu().should('be.visible').click()
      homeBanner.elements.careers().should('be.visible').first().click()
      careersHomepage('desktop', 'EU')
    }
  )
})
describe('QATEST-1659 - should validate the Career Home page in Responsive', () => {
  it(
    'should be able to navigate to Dbot page from home page and validate the page content and links in Responsive for ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive('', { waitLoad: true })
      homeBanner.elements.hamBurgerMenu().should('be.visible').click()
      homeBanner.elements.aboutUsMenu().click()
      homeBanner.elements.careers().should('be.visible').click()
      careersHomepage('mobile', 'ROW')
    }
  )

  it(
    'should be able to navigate to Dbot page from home page and validate the page content and links in Responsive for EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'), { waitLoad: true })
      homeBanner.elements.hamBurgerMenu().should('be.visible').click()
      homeBanner.elements.aboutUsMenu().click()
      homeBanner.elements.careers().should('be.visible').click()
      careersHomepage('mobile', 'EU')
    }
  )
})

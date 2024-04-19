import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'

function Partner_page(region) {
  cy.url().should('include', '/partners/')
  cy.title().should('eq', 'Be our partner | Partnership programmes | Deriv')
  cy.findByRole('heading', {
    name: 'Deriv partnership programmes',
    exact: true,
  }).should('be.visible')
  cy.findByRole('heading', {
    name: 'Partner with a trusted online trading provider.',
  }).should('be.visible')
  cy.findByRole('heading', { name: 'About Deriv' }).should('be.visible')
  cy.findByRole('heading', { name: 'Deriv in numbers' }).should('be.visible')
  cy.findByRole('heading', { name: 'Why choose us' }).should('be.visible')
  const partnershipHeading =
    region === 'EU' ? 'Partnership opportunity' : 'Partnership opportunities'
  cy.findByRole('heading', { name: partnershipHeading }).should('be.visible')

  const urlDetails =
    region === 'EU'
      ? [
          {
            url: '/partners/deriv-prime/',
            name: 'Deriv Prime Specialised',
            title: 'Liquidity solutions provider | Deriv Prime',
            content: 'Global liquidity for all',
          },
          {
            url: '/partners/affiliate-ib/',
            name: 'Affiliate Programme Earn 100',
            title:
              'Affiliate and IB programmes | Partnership programmes | Deriv',
            content: 'Partner with a trusted online trading provider',
          },
          {
            url: 'https://api.deriv.com',
            name: "API Leverage Deriv's",
            title: 'Deriv API | Customise your trading app',
            content: 'Deriv API',
          },
        ]
      : [
          {
            url: '/partners/deriv-prime/',
            name: 'Deriv Prime Specialised',
            title: 'Liquidity solutions provider | Deriv Prime',
            content: 'Global liquidity for all',
          },
          {
            url: '/partners/affiliate-ib/',
            name: 'Affiliate and IBs For',
            title:
              'Affiliate and IB programmes | Partnership programmes | Deriv',
            content: 'Partner with a trusted online trading provider',
          },
          {
            url: '/partners/payment-agent/',
            name: 'Payment agents Expand your',
            title: 'Payment agents | Partnership programmes | Deriv',
            content: 'Become a payment agent on Deriv',
          },
          {
            url: 'https://api.deriv.com',
            name: "API Leverage Deriv's",
            title: 'Deriv API | Customise your trading app',
            content: 'Deriv API',
          },
        ]

  cy.findByText(partnershipHeading).scrollIntoView()

  cy.c_checkAllPartnerLinks(urlDetails)
}

describe('QATEST-2036 - should validate the Partners main page', () => {
  it(
    'should be able to navigate to Partners main page from home page and validate the page content in responsive for ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive('', { waitLoad: true })
      homeBanner.elements.hamBurgerMenu().should('be.visible').click()
      homeBanner.elements.aboutUsMenu().should('be.visible').click()
      homeBanner.elements.partnershipProgrammes().should('be.visible').click()
      Partner_page('ROW')
    }
  )

  it(
    'should be able to navigate to Partners main page from home page and validate the page content in responsive for EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'), { waitLoad: true })
      homeBanner.elements.hamBurgerMenu().should('be.visible').click()
      homeBanner.elements.aboutUsMenu().should('be.visible').click()
      homeBanner.elements.partnershipProgrammes().should('be.visible').click()
      Partner_page('EU')
    }
  )
})

describe('QATEST-2036 - should validate the Partners main page', () => {
  it('should be able to navigate to Partners main page from home page and validate the page content in desktop for ROW', () => {
    cy.c_visitResponsive('/', { size: 'desktop' })
    homeBanner.elements.aboutUsMenu().should('be.visible').click()
    cy.findAllByText('Partnership programmes')
      .eq(0)
      .should('be.visible')
      .click()
    Partner_page('ROW')
  })

  it('should be able to navigate to Partners main page from home page and validate the page content in desktop for EU', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), { size: 'desktop' })
    homeBanner.elements.aboutUsMenu().should('be.visible').click()
    cy.findAllByText('Partnership programmes')
      .eq(0)
      .should('be.visible')
      .click()
    Partner_page('EU')
  })
})

import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'
import { elements } from '../../support/POM/commonPage'

function check_on_regulatory_information_page() {
  cy.findByRole('heading', { name: 'Regulatory information' }).should(
    'be.visible'
  )
  cy.contains('Since 1999').should('be.visible')

  const regulatoryEntities = [
    'Deriv Investments (Europe) Limited',
    'Deriv (FX) Ltd',
    'Deriv (BVI) Ltd',
    'Deriv (V) Ltd',
    'Deriv (SVG) LLC',
    'Deriv.com Limited',
    'The Financial Commission',
  ]
  regulatoryEntities.forEach((entity) => {
    cy.findByRole('heading', { name: entity }).should('be.visible')
  })
}

function check_on_links_text() {
  // Check on "view license" link
  cy.get('p')
    .find('a[href="/regulatory/Deriv_Investments_(Europe)_Limited.pdf"]')
    .invoke('removeAttr', 'target')
    .click()
  cy.url().should('include', '/regulatory/Deriv_Investments_(Europe)_Limited')
  cy.go('back')

  cy.get('p')
    .find('a[href="/regulatory/Deriv_(FX)_Ltd.pdf"]')
    .invoke('removeAttr', 'target')
    .click()
  cy.url().should('include', '/regulatory/Deriv_(FX)_Ltd')
  cy.go('back')

  cy.get('p')
    .find('a[href="/regulatory/Deriv_(BVI)_Ltd.pdf"]')
    .invoke('removeAttr', 'target')
    .click()
  cy.url().should('include', '/regulatory/Deriv_(BVI)_Ltd')
  cy.go('back')

  cy.get('p')
    .find('a[href="/regulatory/Deriv_(V)_Ltd.pdf"]')
    .invoke('removeAttr', 'target')
    .click()
  cy.url().should('include', '/regulatory/Deriv_(V)_Ltd')
  cy.go('back')

  // Check on "member" link
  cy.findByRole('link', { name: 'member', exact: 'true' })
    .invoke('removeAttr', 'target')
    .click()
  cy.url().should('include', '/Financial_Markets_Association_Cert')
  cy.go('back')

  // Check on "view membership"
  cy.findByRole('link', { name: 'view membership' })
    .invoke('removeAttr', 'target')
    .click()
  cy.url().should('include', '/regulatory/deriv-com-ltd-membership')
  cy.go('back')

  //live chat
  cy.contains('live chat').click()
  //cy.get('iframe[name="chat-widget"]', { timeout: 30000 })

  //complaint policy
  cy.get('a[href="https://app.deriv.com/complaints-policy"]')
    .should('have.attr', 'href', 'https://app.deriv.com/complaints-policy')
    .and('not.be.empty')
  // Check if the link is not returning a 404 status
  cy.request('https://app.deriv.com/complaints-policy').then((response) => {
    expect(response.status).to.not.equal(404)
  })
}

function check_on_country_links(country_names) {
  country_names.forEach((country) => {
    cy.findByRole('link', { name: country })
      .invoke('removeAttr', 'target')
      .click()
    cy.url().should('include', 'countries/' + country.replace(' ', ''))
    cy.go('back')
  })
  //expected no link
  cy.findByText('Ireland').should('be.visible')
}

function check_on_pdf_documents() {
  const documents = [
    {
      section: 'Financial disclosure report',
      text: 'Financial Disclosures Annual Report 2023',
      url: '/regulatory/Financial_Disclosures_Annual_Report_2023.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Forex',
      name: 'pdf icon black CFDs - Forex',
      url: '/regulatory/kid/kid_deriv_forex.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Stocks',
      name: 'pdf icon black CFDs - Stocks',
      url: '/regulatory/kid/kid_deriv_Stocks.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Stock indices',
      name: 'pdf icon black CFDs - Stock indices',
      url: '/regulatory/kid/kid_deriv_Stock_Indices.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Cryptocurrencies',
      name: 'pdf icon black CFDs - Cryptocurrencies',
      url: '/regulatory/kid/kid_deriv_crypto.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Commodities',
      name: 'pdf icon black CFDs - Commodities',
      url: '/regulatory/kid/kid_deriv_commodities.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Derived indices: Volatility Indices',
      name: 'pdf icon black CFDs - Derived',
      url: '/regulatory/kid/kid_deriv_volatility.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Synthetics: Crash 300 Index',
      name: 'pdf icon black CFDs - Synthetics: Crash 300 Index',
      url: '/regulatory/kid/kid_deriv_CFD_synthetic_crash_300.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - ETFs',
      name: 'pdf icon black CFDs - ETFs',
      url: '/regulatory/kid/kid_deriv_cfds_etfs.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Synthetics: DEX',
      name: 'pdf icon black CFDs - Synthetics: DEX',
      url: '/regulatory/kid/kid_deriv_cfds_dex.pdf',
    },
    {
      section: 'Key information documents',
      text: 'CFDs - Synthetics: Drift Switch Index',
      name: 'pdf icon black CFDs - Synthetics: Drift Switch Index',
      url: '/regulatory/kid/kid_deriv_cfds_dsi.pdf',
    },
    {
      section: 'Key information documents',
      text: 'Multipliers - Forex',
      name: 'pdf icon black Multipliers - Forex',
      url: '/regulatory/kid/kid_deriv_multipliers_forex.pdf',
    },
    {
      section: 'Key information documents',
      text: 'Multipliers - Cryptocurrencies',
      name: 'pdf icon black Multipliers - Cryptocurrencies',
      url: '/regulatory/kid/kid_deriv_multipliers_cryptocurrencies.pdf',
    },
    {
      section: 'Key information documents',
      text: 'Multipliers - Synthetics: Volatility 250 (1s) Index',
      name: 'pdf icon black Multipliers - Synthetics: Volatility 250 (1s) Index',
      url: '/regulatory/kid/kid_deriv_multipliers_synthetics_vol_250.pdf',
    },
    {
      section: 'Key information documents',
      text: 'Multipliers - Synthetics: Crash 300 Index',
      name: 'pdf icon black Multipliers - Synthetics: Crash 300 Index',
      url: '/regulatory/kid/kid_deriv_multipliers_synthetics_crash_300.pdf',
    },
    {
      section: 'RTS',
      text: 'RTS28 2022',
      name: 'pdf icon black RTS28 2022',
      url: '/regulatory/RTS28-2022.pdf',
    },
    {
      section: 'RTS',
      text: 'RTS28 2021',
      name: 'pdf icon black RTS28 2021',
      url: '/regulatory/RTS28-2021.pdf',
    },
  ]

  documents.forEach(({ section, text, name, url }) => {
    cy.contains(section).first().click()
    cy.contains('div', text).click()
    cy.get('div')
      .find(`a[href="${url}"]`)
      .invoke('removeAttr', 'target')
      .click()
    cy.url().should('include', url.split('/')[2]) // Check if URL includes the relevant part
    cy.go('back')
  })
}

describe(
  'QATEST-71097 - should validate the About Us - Regulatory Information - EU',
  { tags: ['@full-tests', '@eu-tests'] },
  () => {
    const country_names = [
      'Austria',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hungary',
      'Italy',
      'Latvia',
      'Lithuania',
      'Luxembourg',
      'Netherlands',
      'Poland',
      'Portugal',
      'Romania',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden',
    ]
    it('should validate Regulatory Information page for EU', () => {
      cy.c_visitResponsive(`${Cypress.env('RegionEU')}/regulatory/`, {
        size: 'desktop',
      })
      check_on_regulatory_information_page()
      check_on_country_links(country_names)
      check_on_pdf_documents()
      check_on_links_text()
    })
  }
)

describe(
  'QATEST-71097- Responsive - should validate the About Us - Regulatory Information - EU',
  { tags: ['@full-tests', '@eu-tests'] },
  () => {
    const country_names = [
      'Austria',
      'Bulgaria',
      'Croatia',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Estonia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Hungary',
      'Italy',
      'Latvia',
      'Lithuania',
      'Luxembourg',
      'Netherlands',
      'Poland',
      'Portugal',
      'Romania',
      'Slovakia',
      'Slovenia',
      'Spain',
      'Sweden',
    ]
    it('should validate Regulatory Information page for EU', () => {
      cy.c_visitResponsive(`${Cypress.env('RegionEU')}/regulatory/`)
      check_on_regulatory_information_page()
      check_on_country_links(country_names)
      check_on_pdf_documents()
      check_on_links_text()
    })
  }
)

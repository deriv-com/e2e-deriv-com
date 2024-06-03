import '@testing-library/cypress/add-commands'

function redirectPopup() {
  cy.findByText('Redirect notice', { timeout: 10000 }).should('be.visible')
  cy.findByRole('link', { name: 'Proceed' })
    .should('exist')
    .should('have.attr', 'href', 'https://app.deriv.com/appstore/traders-hub')
    .then((link) => {
      cy.request(link.prop('href')).its('status').should('eq', 200)
    })
}

function checkTradersToolPage() {
  cy.findByRole('heading', { name: 'Traders’ tools' }).should('be.visible')
  cy.findByRole('heading', { name: 'Margin calculator' }).should('be.visible')
  cy.findByRole('link', { name: 'Try margin calculator' }).click()
  cy.findByRole('link', { name: "Traders' tools" }).click()
  cy.findByRole('heading', { name: 'Swap calculator' }).should('be.visible')
  cy.findByRole('link', { name: 'Try swap calculator' }).click()
  cy.findByRole('link', { name: "Traders' tools" }).click()
  cy.findByRole('heading', { name: 'Pip calculator' }).should('be.visible')
  cy.findByRole('link', { name: 'Try pip calculator' }).click()
  cy.findByRole('link', { name: "Traders' tools" }).click()
  cy.findByRole('heading', { name: 'PnL for margin' }).should('be.visible')
  cy.findByRole('link', { name: 'Try PnL for margin calculator' }).click()
  cy.findByRole('link', { name: "Traders' tools" }).click()
  cy.findByRole('heading', {
    name: 'Stop loss and take profit for multipliers',
  }).should('be.visible')
  cy.findByRole('link', { name: 'Try multipliers calculator' }).click()
  cy.findByRole('link', { name: "Traders' tools" }).click()
}

function marginCalculatorPage(region) {
  cy.title().should('eq', 'Margin Calculator')
  cy.findByRole('link', { name: 'Learn more about margin' }).click()
  cy.findByRole('heading', { name: 'CFD trading' }).should('be.visible')
  cy.go(-1)
  cy.c_waitForPageLoad()
  cy.findByText('Synthetic').click({ force: true })
  calculator()
  cy.findByText('Financial').click({ force: true })
  calculator()
  cy.findByRole('img', { name: 'Plus' }).click()
  cy.get('[class^="accordion__AccordionHeaderItem"]').should('be.visible')
  cy.findByText(
    'Let’s say you want to trade two lots of EUR/USD with an asset price of 1.10 USD and leverage of 100.'
  ).should('be.visible')
  cy.findByRole('img', { name: 'Minus' }).should('be.visible').click()
  cy.get('[class^="accordion__AccordionHeaderItem"]').should('not.be.visible')
  calculatorValidation()
  cy.findByRole('link', { name: 'Go to Deriv MT5 dashboard' })
    .invoke('attr', 'target', '_self')
    .click()
    .then(() => {
      if (region === 'EU') {
        redirectPopup()
      } else {
        cy.url().should('contain', 'app.deriv.com')
      }
    })

  function calculator() {
    cy.get('[placeholder="Symbol"]').click()
    cy.get('[class^="dropdown__ListItem"]').eq(0).click({ force: true })
    cy.get('#volume').click().type('10')
    cy.get('#assetPrice').click().type('10')
    cy.get('#leverage').click()
    cy.get('#4000').click({ force: true })
    cy.findByRole('button', { name: 'Calculate' }).click({ force: true })
  }

  function calculatorValidation() {
    cy.findByText('Synthetic').click({ force: true })
    cy.get('#volume').scrollIntoView().click().type('2').clear()
    cy.get('#assetPrice').click()
    cy.findByText('Volume is required').should('be.visible')
    cy.findByRole('img', { name: 'error icon' }).click({ force: true })
    cy.get('#assetPrice').click().type('10').clear()
    cy.get('#leverage').click()
    cy.findByText('Asset Price is required').should('be.visible')
    cy.findByRole('img', { name: 'error icon' }).click({ force: true })
    cy.get('#volume').click().type('abcdef')
    cy.get('#assetPrice').click()
    cy.findByText(
      'Please enter a valid amount, including the decimal point (.), in this format: ####.#'
    ).should('be.visible')
    cy.findByRole('img', { name: 'error icon' }).click({ force: true })
    cy.get('#assetPrice').click().type('abc')
    cy.contains(
      'Please enter a valid amount, including the decimal point (.), in this format: ####.#'
    ).should('be.visible')
    cy.findByRole('img', { name: 'error icon' }).click({ force: true })
  }
}

describe('QATEST-2105 - Traders tool - Main Page', () => {
  it(
    'should validate the traders tool main page in EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(`${Cypress.env('RegionEU')}/trader-tools`, {
        size: 'desktop',
      })
      checkTradersToolPage()
      cy.c_visitResponsive(`${Cypress.env('RegionEU')}/trader-tools`)
      checkTradersToolPage()
    }
  )

  it(
    'should validate the traders tool main page in ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive(`trader-tools`, { size: 'desktop' })
      checkTradersToolPage()
      cy.c_visitResponsive(`trader-tools`)
      checkTradersToolPage()
    }
  )
})

describe('QATEST-2119 - Traders tool - Margin calculator', () => {
  it(
    'should validate the traders tool margin calculator page in ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive(`trader-tools/margin-calculator`, {
        size: 'desktop',
      })
      marginCalculatorPage('ROW')
      cy.c_visitResponsive(`trader-tools/margin-calculator`)
      marginCalculatorPage('ROW')
    }
  )

  it(
    'should validate the traders tool margin calculator page in EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(
        `${Cypress.env('RegionEU')}/trader-tools/margin-calculator`,
        { waitLoad: true }
      )
      marginCalculatorPage('EU')
      cy.c_visitResponsive(
        `${Cypress.env('RegionEU')}/trader-tools/margin-calculator`,
        { waitLoad: true, size: 'desktop' }
      )
      marginCalculatorPage('EU')
    }
  )
})

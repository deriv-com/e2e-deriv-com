import '@testing-library/cypress/add-commands'

const paymentMethodListRow = ["Oxxo","Zing Pay", "Mastercard", "MTN", "Vodafone", "PayLivre", "StickPay", "BitcoinCash", "BNB", "paysafecard", "Maestro", "M-Pesa", "AirTm", "Skrill 1-Tap", "etherium", "DogeCoin", "SPEI", "Visa", "AstroPay", "Jeton", "bitcoin", "Cardano", "Pago Efectivo", "ozow", "Visa Electron", "MiFinity", "derivP2P", "Pix", "Pago Efectivo", "Maestro"]
const paymentMethodListEU = ["giropay", "iDeal", "Rapid Transfer", "eps", "przelewy24", "Jeton", "Mastercard", "Maestro", "Visa", "Visa Electron", "Netteler", "Skrill"]
const paymentMethodListNotExistRow = ["giropay","eps","Rapid Transfer","iDeal"]
const paymentMethodListNotExistEU = ["Pix","Zing Pay","MTN","Oxxo"]

function c_validatePaymentSection(region)
{
    cy.findByRole('heading', { name: 'Fast, hassle-free deposits and withdrawals' }).should('be.visible')
    cy.findByTestId('fast-payment-container').should('be.visible')

    if(region === 'ROW')
    {
    paymentMethodListRow.forEach((method) => {
      cy.findAllByRole('img', { name: method }).first().should('exist')
    })
    paymentMethodListNotExistRow.forEach((method) => {
      cy.get('img[alt="' + method + '"]').should('not.exist')
    })
  }
    else{
     paymentMethodListEU.forEach((method) => {
      cy.findAllByRole('img', { name: method }).first().should('exist')
    })
      paymentMethodListNotExistEU.forEach((method) => {
        cy.get('img[alt="' + method + '"]').should('not.exist')
      })
    
  }
    cy.findByTestId('fast-payment-link').click()
    cy.url().should('include', '/payment-methods/')
    cy.findByRole('heading', { name: 'Payment methods' }).should('be.visible')
}

describe('QATEST-118896 - Validate Homepage Payment methods for ROW', () => {
    it('should check whether the payment method section is visible and learn more link is working in ROW.', () => {
        cy.c_visitResponsive('')
        c_validatePaymentSection('ROW')
      })
  })

describe('QATEST-118897 - Validate Homepage Payment methods for EU', () => {
    it('should check whether the payment method section is visible and learn more link is working in EU.', () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      c_validatePaymentSection('EU')
    })
  })

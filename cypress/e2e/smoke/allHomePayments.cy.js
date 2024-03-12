import '@testing-library/cypress/add-commands'

const paymentMethodListRow = ["Oxxo","Zing Pay", "Mastercard", "MTN", "Vodafone", "PayLivre", "StickPay", "BitcoinCash", "BNB", "paysafecard", "Maestro", "M-Pesa", "AirTm", "Skrill 1-Tap", "etherium", "DogeCoin", "SPEI", "Visa", "AstroPay", "Jeton", "bitcoin", "Cardano", "Pago Efectivo", "ozow", "Visa Electron", "MiFinity", "derivP2P", "Pix", "Pago Efectivo", "Maestro"]
const paymentMethodListEU = ["giropay", "iDeal", "Rapid Transfer", "eps", "przelewy24", "Jeton", "Mastercard", "Maestro", "Visa", "Visa Electron", "Netteler", "Skrill"]

function c_validatePaymentSection(region)
{
    cy.findByRole('heading', { name: 'Fast, hassle-free deposits and withdrawals' }).should('be.visible')
    cy.findByTestId('fast-payment-container').should('be.visible')

    if(region === 'ROW')
    {
    paymentMethodListRow.forEach((method) => {
      cy.findAllByRole('img', { name: method }).first().should('exist')
    })
  }
    else{
      paymentMethodListEU.forEach((method) => {
      cy.findAllByRole('img', { name: method }).first().should('exist')
    }) 
  }
    cy.findByTestId('fast-payment-link').click()
    cy.url().should('include', '/payment-methods/')
    cy.findByRole('heading', { name: 'Payment methods' }).should('be.visible')
}

describe('Validate payment methods section in home page', () => {
    it('should check whether the payment method section is visible and learn more link is working in EU.', () => {
      cy.c_visitResponsive(Cypress.env('RegionEU'))
      c_validatePaymentSection('EU')

    })

    it('should check whether the payment method section is visible and learn more link is working in ROW.', () => {
        cy.c_visitResponsive(Cypress.env('RegionROW'))
        c_validatePaymentSection('ROW')

      })


  })


import '@testing-library/cypress/add-commands';

function checkAndUpdateValues(itr, maxWaitTime) {
  
  let firstBidValue
  let firstAskValue

  cy.findAllByText('Bid').eq(itr).should('be.visible')
  cy.findAllByText('Ask').eq(itr).should('be.visible')

  cy.findAllByText('Bid').eq(itr).next().invoke('text').then((text) => {
    cy.log(`Bid value is: ${text}`)
    firstBidValue = text
  })

  cy.findAllByText('Ask').eq(itr).next().invoke('text').then((text) => {
    cy.log(`Ask value is: ${text}`)
    firstAskValue = text
  })

  let elapsedTime = 0

function checkValues() {
  
  cy.findAllByText('Bid').eq(itr).next().invoke('text').then((text) => {
  cy.log(`New Bid value is: ${text}`)
    if (text !== firstBidValue) {
        expect(text).to.not.eq(firstBidValue);
    }
    
    else {
        elapsedTime += 1000;
        if (elapsedTime < maxWaitTime) {
          cy.wait(1000).then(checkValues)
        } else {
          cy.log('Max wait time reached, values did not change.')
        }
    }
    });

  cy.findAllByText('Ask').eq(itr).next().invoke('text').then((text) => {
  cy.log(`New Ask value is: ${text}`)
    if (text !== firstAskValue) {
        expect(text).to.not.eq(firstAskValue);
    } 
    
    else {
        elapsedTime += 1000;
        if (elapsedTime < maxWaitTime) {
          cy.wait(1000).then(checkValues)
        } else {
          cy.log('Max wait time reached, values did not change.')
        }
    }
    })
  }
  checkValues()
}

function checkForexPricing() {
const maxWaitTime = 5000;

for (let itr = 1; itr <= 3; itr++) {
    checkAndUpdateValues(itr, maxWaitTime)}
}

describe('QATEST1320 - Validating the updates of pricing table - ROW & EU', () => {

it('should navigate to forex pricing table and check whether the values are getting updated - ROW.', () => {
    cy.c_visitResponsive('', 'desktop')
    checkForexPricing()
})

it('should navigate to forex pricing table and check whether the values are getting updated - EU.', () => {
    cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
    checkForexPricing()
})
})
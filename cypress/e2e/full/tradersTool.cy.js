import '@testing-library/cypress/add-commands'

function checkTradersToolPage()
{
    cy.findByRole('heading',{ name: 'Traders’ tools' }).should('be.visible')
    cy.findByRole('heading', { name: 'Margin calculator' }).should('be.visible')
    cy.findByRole('link', { name: 'Try margin calculator' }).click()
    cy.findByRole('link', { name: 'Traders\' tools' }).click();
    cy.findByRole('heading', { name: 'Swap calculator' }).should('be.visible')
    cy.findByRole('link', { name: 'Try swap calculator' }).click()
    cy.findByRole('link', { name: 'Traders\' tools' }).click()
    cy.findByRole('heading', { name: 'Pip calculator' }).should('be.visible')
    cy.findByRole('link', { name: 'Try pip calculator' }).click()
    cy.findByRole('link', { name: 'Traders\' tools' }).click()
    cy.findByRole('heading', { name: 'PnL for margin' }).should('be.visible')
    cy.findByRole('link', { name: 'Try PnL for margin calculator' }).click()
    cy.findByRole('link', { name: 'Traders\' tools' }).click()
    cy.findByRole('heading', { name: 'Stop loss and take profit for multipliers' }).should('be.visible')
    cy.findByRole('link', { name: 'Try multipliers calculator' }).click()
    cy.findByRole('link', { name: 'Traders\' tools' }).click()  
}

function marginCalculatorPage()
{
    cy.title().should('eq', 'Margin Calculator')
    cy.findByText('Synthetic').click({force: true})
    calculator()
    cy.findByText('Financial').click({force: true})
    calculator()
    cy.findByRole('img', {name: 'Plus'}).click()
    cy.get('[class^="accordion__AccordionHeaderItem"]').should('be.visible')
    cy.wait(1000)
    cy.findByRole('img', {name: 'Minus'}).click()
    cy.get('[class^="accordion__AccordionHeaderItem"]').should('not.be.visible')
    cy.findByRole('link', {name: 'Go to Deriv MT5 dashboard'}).click()
    calculatorValidation()
    cy.findByRole('link', {name: 'Learn more about margin'}).click()

    function calculator()
    {
     cy.get('[placeholder="Symbol"]').click()
     cy.get('[class^="dropdown__ListItem"]').eq(0).click({force: true})
     cy.get('#volume').click().type('10')
     cy.get('#assetPrice').click().type('10')
     cy.get('#leverage').click()
     cy.get('#4000').click({force: true})
     cy.findByRole('button', { name: 'Calculate' }).click({force: true}) 
    }

    function calculatorValidation()
    {
     cy.findByText('Synthetic').click({force: true})
     cy.get('#volume').scrollIntoView().click().type('2').clear()
     cy.get('#assetPrice').click()
     cy.findByText('Volume is required').should('be.visible')
     cy.findByRole('img', { name: 'error icon' }).click({force: true})
     cy.get('#assetPrice').click().type('10').clear()
     cy.get('#leverage').click()
     cy.findByText('Asset Price is required').should('be.visible')
     cy.findByRole('img', { name: 'error icon' }).click({force: true})
     cy.get('#volume').click().type('abcdef')
     cy.get('#assetPrice').click()
     cy.findByText('Please enter a valid amount, including the decimal point (.), in this format: ####.#').should('be.visible')
     cy.findByRole('img', { name: 'error icon' }).click({force: true})
     cy.get('#assetPrice').click().type('abc')
     cy.contains('Please enter a valid amount, including the decimal point (.), in this format: ####.#').should('be.visible')

    }
}


describe('QATEST-2105 - Traders tool - Main Page', () => {
    it('should validate the traders tool main page in mobile', () => {
        cy.c_visitResponsive(`trader-tools/${Cypress.env('RegionROW')}`)
        checkTradersToolPage()
        cy.c_visitResponsive(`trader-tools/${Cypress.env('RegionEU')}`)
        checkTradersToolPage()
     })

     it('should validate the traders tool main page in desktop', () => {
        cy.c_visitResponsive(`trader-tools/${Cypress.env('RegionROW')}`, 'desktop')
        checkTradersToolPage()
        cy.c_visitResponsive(`trader-tools/${Cypress.env('RegionEU')}`, 'desktop')
        checkTradersToolPage()
     })
})

describe('QATEST-2119 - Traders tool - Margin calculator', () => {
    it('should validate the traders tool margin calculator page in mobile', () => {
        cy.c_visitResponsive(`trader-tools/margin-calculator/${Cypress.env('RegionROW')}`)
        marginCalculatorPage()
        cy.c_visitResponsive(`trader-tools/margin-calculator/${Cypress.env('RegionEU')}`)
        marginCalculatorPage()
    })
    
    it('should validate the traders tool margin calculator page in desktop', () => {
        cy.c_visitResponsive(`trader-tools/margin-calculator/${Cypress.env('RegionROW')}`, 'desktop')
        marginCalculatorPage()
        cy.c_visitResponsive(`trader-tools/margin-calculator/${Cypress.env('RegionEU')}`, 'desktop')
        marginCalculatorPage()
    })
})
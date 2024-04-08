import '@testing-library/cypress/add-commands'

describe('QATEST-1350 - Our Platform ROW', () => {
    it('should be able to navigate to Dbot page from home page and validate the page content and links in Desktop for ROW', () => {
        cy.c_visitResponsive('', { size: 'desktop' })
        cy.findByText("User-friendly trading platforms, on any device").click()
        cy.findByText("All").click();

        // //Check CFDs tab
        cy.findByRole('tab', { name: 'CFDs' })
        // // Check Deriv MT5 
        cy.findByRole("heading", { name: "Deriv MT5" }).should('be.visible');
        cy.findAllByText('Deriv MT5').eq(0).should('be.visible').click()
        cy.findByText("The most popular and comprehensive CFDs platform.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv MT5' }).click();
        cy.findByText("Why trade with Deriv MT5").should('be.visible')
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        //Check Ctrader
        cy.findByRole("heading", { name: "Deriv cTrader" }).should('be.visible');
        cy.findByRole('img', { name: "deriv ctrader" }).click();
        cy.findByText("Fast CFDs platform with inbuilt copy trading.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv cTrader' }).click();
        cy.findByRole('img', { name: '_t_Deriv ctrader logo_t_' }).click();
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        //Check Deriv X
        cy.findByRole("heading", { name: "Deriv X" }).should('be.visible');
        cy.findByRole('img', { name: "deriv x" }).click();
        cy.findByText("User-friendly and customisable CFDs platform.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv X' }).click();
        cy.findByRole('img', { name: "Deriv X" }).click();
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        // Check Options tab
        cy.contains('[role="tab"][id="platformtab-trigger-2"]', 'Options').click();
        // Find an element by its label containing "Options"
        cy.findByLabelText("Options").within(() => {
            cy.findByRole("heading", { name: "Deriv GO" }).should('be.visible');
            cy.findByRole("heading", { name: "Deriv Trader" }).should('be.visible');
            cy.findByRole("heading", { name: "Deriv Bot" }).should('be.visible');
        });
        cy.findByRole('img', { name: "deriv go" }).click();
        cy.findByRole('img', { name: "deriv trader" }).click();
        cy.findByRole('img', { name: "deriv bot" }).click();
        cy.findByText("Mobile app for multipliers trading on the go.").should('be.visible')
        cy.findByText("Flagship options, accumulators, and multipliers trading platform.").should('be.visible')
        cy.findByText("Automated trading. No coding required.").should('be.visible')
        //Check DerivGo
        cy.findByRole('link', { name: 'Learn more About Deriv GO' }).click();
        cy.findByRole('img', { name: 'Deriv Go', exact: true }).first().click();
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        //Check Dtrader
        cy.findByRole('link', { name: 'Learn more About Deriv Trader' }).click();
        cy.findByRole('img', { name: 'Deriv Trader' }).should('be.visible')
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        //Check Bot
        cy.findByRole('link', { name: 'Learn more About Deriv Bot' }).click();
        cy.findByRole('img', { name: 'Deriv Bot' }).should('be.visible')
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();

        //Check Bot tab
        cy.findByRole('tab', { name: 'Bots' })
        cy.findByRole("heading", { name: "Deriv Bot" }).should('be.visible');
        cy.findByRole('img', { name: "deriv bot" }).click();
        cy.findByText("Automated trading. No coding required.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv Bot' }).click();
        cy.findByRole('img', { name: 'Deriv Bot' }).should('be.visible');
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();

        // Check Social tab
        cy.findByRole('tab', { name: 'Social' })
        cy.findByRole("heading", { name: "Deriv cTrader" }).should('be.visible');
        cy.findByRole('img', { name: "deriv ctrader" }).click();
        cy.findByText("Fast CFDs platform with inbuilt copy trading.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv cTrader' }).click();
        cy.findByRole('img', { name: '_t_Deriv ctrader logo_t_' }).should('be.visible')
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
    })
})

describe('QATEST-1350 - Our Platform ROW', () => {
    it('should be able to navigate to Dbot page from home page and validate the page content and links in Desktop for ROW', () => {
        cy.c_visitResponsive('')
        cy.findByText("User-friendly trading platforms, on any device").click()
        cy.findByText("All").click();

        // //Check CFDs tab
        cy.findByRole('tab', { name: 'CFDs' })
        // // Check Deriv MT5 
        cy.findByRole("heading", { name: "Deriv MT5" }).should('be.visible');
        cy.findAllByText('Deriv MT5').eq(0).should('be.visible').click()
        cy.findByText("The most popular and comprehensive CFDs platform.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv MT5' }).click();
        cy.findByText("Why trade with Deriv MT5").should('be.visible')
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        //Check Ctrader
        cy.findByRole("heading", { name: "Deriv cTrader" }).should('be.visible');
        cy.findByRole('img', { name: "deriv ctrader" }).click();
        cy.findByText("Fast CFDs platform with inbuilt copy trading.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv cTrader' }).click();
        cy.findByRole('img', { name: '_t_Deriv ctrader logo_t_' }).click();
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        //Check Deriv X
        cy.findByRole("heading", { name: "Deriv X" }).should('be.visible');
        cy.findByRole('img', { name: "deriv x" }).click();
        cy.findByText("User-friendly and customisable CFDs platform.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv X' }).click();
        cy.findByRole('img', { name: "Deriv X" }).click();
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        // Check Options tab
        cy.contains('[role="tab"][id="platformtab-trigger-2"]', 'Options').click();
        // Find an element by its label containing "Options"
        cy.findByLabelText("Options").within(() => {
            cy.findByRole("heading", { name: "Deriv GO" }).should('be.visible');
            cy.findByRole("heading", { name: "Deriv Trader" }).should('be.visible');
            cy.findByRole("heading", { name: "Deriv Bot" }).should('be.visible');
        });
        cy.findByRole('img', { name: "deriv go" }).click();
        cy.findByRole('img', { name: "deriv trader" }).click();
        cy.findByRole('img', { name: "deriv bot" }).click();
        cy.findByText("Mobile app for multipliers trading on the go.").should('be.visible')
        cy.findByText("Flagship options, accumulators, and multipliers trading platform.").should('be.visible')
        cy.findByText("Automated trading. No coding required.").should('be.visible')
        //Check DerivGo
        cy.findByRole('link', { name: 'Learn more About Deriv GO' }).click();
        cy.findByRole('img', { name: 'Deriv Go', exact: true }).first().click();
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        //Check Dtrader
        cy.findByRole('link', { name: 'Learn more About Deriv Trader' }).click();
        cy.findByRole('img', { name: 'Deriv Trader' }).should('be.visible')
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
        //Check Bot
        cy.findByRole('link', { name: 'Learn more About Deriv Bot' }).click();
        cy.findByRole('img', { name: 'Deriv Bot' }).should('be.visible')
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();

        //Check Bot tab
        cy.findByRole('tab', { name: 'Bots' })
        cy.findByRole("heading", { name: "Deriv Bot" }).should('be.visible');
        cy.findByRole('img', { name: "deriv bot" }).click();
        cy.findByText("Automated trading. No coding required.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv Bot' }).click();
        cy.findByRole('img', { name: 'Deriv Bot' }).should('be.visible');
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();

        // Check Social tab
        cy.findByRole('tab', { name: 'Social' })
        cy.findByRole("heading", { name: "Deriv cTrader" }).should('be.visible');
        cy.findByRole('img', { name: "deriv ctrader" }).click();
        cy.findByText("Fast CFDs platform with inbuilt copy trading.").should('be.visible')
        cy.findByRole('link', { name: 'Learn more About Deriv cTrader' }).click();
        cy.findByRole('img', { name: '_t_Deriv ctrader logo_t_' }).should('be.visible')
        cy.findByRole('link', { name: 'deriv logo label' }).should('be.visible').click();
    })
})
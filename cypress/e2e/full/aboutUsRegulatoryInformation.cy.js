import '@testing-library/cypress/add-commands'
import homeBanner from '../../support/POM/homePage'
import { findByRole } from '@testing-library/dom'
import { elements } from '../../support/POM/commonPage'

function validate_AboutUs_regulatoryInformation()
{
    //check that the disclaimer is visible
    //cy.get('div').contains('67.28% of retail investor accounts')

    cy.findByRole('heading', { name: 'Regulatory information' }).should('be.visible')
    cy.contains('Since 1999').should('be.visible')

    cy.findByRole('heading', { name: 'Deriv Investments (Europe) Limited' }).should('be.visible')

    //check on 1st view liscencing --not working yet
    cy.get('p').filter('p',{ hasText: 'Deriv Investments (Europe) Limited, incorporated on 22 April 2015 (Company No.' })
    //cy.findByRole('link').invoke("removeAttr", "target").click()
    //cy.url().should('include', '/regulatory/Deriv_Investments_(Europe)_Limited')
    //cy.go('back')


    //country names and flag icon list.
    cy.findByRole('link', {name: 'Austria'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Austria')
    cy.go('back')

    cy.findByRole('link', {name: 'Bulgaria'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Bulgaria')
    cy.go('back')

    cy.findByRole('link', {name: 'Croatia'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Croatia')
    cy.go('back')

    cy.findByRole('link', {name: 'Cyprus'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Cyprus')
    cy.go('back')

    cy.findByRole('link', {name: 'Czech Republic'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/CzechRepublic')
    cy.go('back')

    cy.findByRole('link', {name: 'Denmark'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Denmark')
    cy.go('back')

    cy.findByRole('link', {name: 'Estonia'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Estonia')
    cy.go('back')

    cy.findByRole('link', {name: 'Finland'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Finland')
    cy.go('back')

    cy.findByRole('link', {name: 'France'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/France')
    cy.go('back')

    cy.findByRole('link', {name: 'Germany'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Germany')
    cy.go('back')

    cy.findByRole('link', {name: 'Greece'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Greece')
    cy.go('back')

    cy.findByRole('link', {name: 'Hungary'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Hungary')
    cy.go('back')

    cy.findByRole('link', {name: 'Italy'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Italy')
    cy.go('back')

    cy.findByText('Ireland').should('be.visible')
    //cy.findByRole('link', {name: 'Ireland'}).invoke("removeAttr", "target").click()  --Ireland don't have link
    //cy.url().should('include', 'countries/Ireland')   
    //cy.go('back')

    cy.findByRole('link', {name: 'Latvia'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Latvia')
    cy.go('back')

    cy.findByRole('link', {name: 'Lithuania'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Lithuania')
    cy.go('back')

    cy.findByRole('link', {name: 'Luxembourg'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Luxembourg')
    cy.go('back')

    cy.findByRole('link', {name: 'Netherlands'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Netherlands')
    cy.go('back')

    cy.findByRole('link', {name: 'Poland'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Poland')
    cy.go('back')

    cy.findByRole('link', {name: 'Portugal'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Portugal')
    cy.go('back')

    cy.findByRole('link', {name: 'Romania'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Romania')
    cy.go('back')

    cy.findByRole('link', {name: 'Slovakia'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Slovakia')
    cy.go('back')

    cy.findByRole('link', {name: 'Slovenia'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Slovenia')
    cy.go('back')

    cy.findByRole('link', {name: 'Spain'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Spain')
    cy.go('back')

    cy.findByRole('link', {name: 'Sweden'}).invoke("removeAttr", "target").click()
    cy.url().should('include', 'countries/Sweden')
    cy.go('back')


    cy.contains('Financial disclosure report').first().click()
    //cy.get('div').filter('div', {hasText: 'Financial Disclosures Annual Report 2023'})
    //cy.findByRole('link',{ name: 'Financial Disclosures Annual Report 2023' }).invoke("removeAttr", "target").click()
    //cy.url().should('include', '/regulatory/Financial_Disclosures_Annual_Report_2023')
    //cy.go('back')


    //KID Section
    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - Forex'})
    cy.findByRole('link',{ name: 'pdf icon black CFDs - Forex' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_forex')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: '/^CFDs - Stocks$/'})
    cy.findByRole('link', { name: 'pdf icon black CFDs - Stocks' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_Stocks')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - Stock indices'})
    cy.findByRole('link', { name: 'pdf icon black CFDs - Stock indices' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_Stock_Indices')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - Cryptocurrencies'})
    cy.findByRole('link', { name: 'pdf icon black CFDs - Cryptocurrencies' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_crypto')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - Commodities'})
    cy.findByRole('link', { name: 'pdf icon black CFDs - Commodities' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_commodities')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - Synthetics: Volatility 250 (1s) Index'})
    cy.findByRole('link',{ name: 'pdf icon black CFDs - Synthetics: Volatility 250 (1s) Index' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_CFD_synthetic_vol_250')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - Synthetics: Crash 300 Index'})
    cy.findByRole('link',{ name: 'pdf icon black CFDs - Synthetics: Crash 300 Index' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_CFD_synthetic_crash_300')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - ETFs'})
    cy.findByRole('link',{ name: 'pdf icon black CFDs - ETFs' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_cfds_etfs')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - Synthetics: DEX'})
    cy.findByRole('link',{ name: 'pdf icon black CFDs - Synthetics: DEX' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_cfds_dex')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'CFDs - Synthetics: Drift Switch Index'})
    cy.findByRole('link',{ name: 'pdf icon black CFDs - Synthetics: Drift Switch Index' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_cfds_dsi')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'Multipliers - Forex'})
    cy.findByRole('link',{ name: 'pdf icon black Multipliers - Forex' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_multipliers_forex')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'Multipliers - Cryptocurrencies'})
    cy.findByRole('link',{ name: 'pdf icon black Multipliers - Cryptocurrencies' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_multipliers_cryptocurrencies')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'Multipliers - Synthetics: Volatility 250 (1s) Index'})
    cy.findByRole('link',{ name: 'pdf icon black Multipliers - Synthetics: Volatility 250 (1s) Index' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_multipliers_synthetics_vol_250')
    cy.go('back')

    cy.contains('Key information documents').first().click()
    cy.get('div').filter('div', {hasText: 'Multipliers - Synthetics: Crash 300 Index'})
    cy.findByRole('link',{ name: 'pdf icon black Multipliers - Synthetics: Crash 300 Index' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/kid/kid_deriv_multipliers_synthetics_crash_300')
    cy.go('back')

    //RTS Section
    cy.contains('RTS').first().click()
    cy.get('div').filter('div', {hasText: 'RTS28 2022'})
    cy.findByRole('link',{ name: 'pdf icon black RTS28 2022' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/regulatory/RTS28-2022')
    cy.go('back')

    cy.contains('RTS').first().click()
    cy.get('div').filter('div', {hasText: 'RTS28 2021'})
    cy.findByRole('link',{ name: 'pdf icon black RTS28 2021' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/regulatory/RTS28-2021')
    cy.go('back')


    
    cy.findByRole('heading', { name: 'Deriv (FX) Ltd' }).should('be.visible')
    //view licence

    cy.findByRole('heading', {name: 'Deriv (BVI) Ltd'}).should('be.visible')
    //view licence

    cy.findByRole('heading', {name: 'Deriv (V) Ltd'}).should('be.visible')
    //view licence
    cy.findByRole('link', {name: 'member', exact: 'true'}).invoke("removeAttr", "target").click()
    cy.url().should('include', '/Financial_Markets_Association_Cert')
    cy.go('back')


    cy.findByRole('heading', {name: 'Deriv (SVG) LLC'}).should('be.visible')


    cy.findByRole('heading', {name: 'Deriv.com Limited'}).should('be.visible')


    cy.findByRole('heading', {name: 'The Financial Commission'}).should('be.visible')
    //view membership
    cy.findByRole('link', { name: 'view membership' }).invoke("removeAttr", "target").click()
    cy.url().should('include', '/regulatory/deriv-com-ltd-membership')
    cy.go('back')
    //live chat
    cy.findByText('live chat').click()
    //cy.frameLoaded('iframe[name="chat-widget"]').get('div').filter({ hasText: 'Simple. Flexible. Reliable.' })

    //complaint policy
    cy.findByRole('link', { name: 'complaint policy' }).invoke("removeAttr", "target").click()
    //need to login to see the policy page
    cy.go('back')
     
}


describe('QATEST-71097 - should validate the About Us - Regulatory Information - EU', () => 
{
    it('should validate Regulatory Information page for EU', () => {
        cy.c_visitResponsive(`/regulatory/${Cypress.env('RegionEU')}`, 'desktop')

        validate_AboutUs_regulatoryInformation()
    })
})

describe('QATEST-71097- Responsive - should validate the About Us - Regulatory Information - EU', () => 
{
    it('should validate Regulatory Information page for EU', () => {
        cy.c_visitResponsive(`/regulatory/${Cypress.env('RegionEU')}`) 
 
        validate_AboutUs_regulatoryInformation()
    })
})
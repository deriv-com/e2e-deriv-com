import '@testing-library/cypress/add-commands'

let linkDetails = {
    validDomains: [
        'https://staging.deriv.com/',
        'https://deriv.com/'
    ],
    excludedVisitLinks: [
        '.exe',
        '.pdf',
        'download.mql5.com',
        'www.metatrader5.com',
        'play.google.com',
        'apps.apple.com',
        'metatraderweb.app',
        'javascript:;',
        'zohorecruit',
        'portal.productboard.com',
        'goo.gl',
        'facebook',
        'twitter',
        'instagram',
        'youtube',
        'https://staging.deriv.com/trade-types/options/', // Bug raised as https://app.clickup.com/t/86bxbkfqm  will remove once the issue is fixed because till then test will keep on failing without verifying other links
    ],
    excludedCheckLinks: [
        'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg', //causing hang because takes a lot of time downloading pdf
        'https://www.instagram.com/derivcareers/',
        'javascript:;',
        'mailto:'
    ],
    linksAllowedFailingVisits: [
        '/p2p/',  // because p2p is not available without vpn as per reference 
    ],
    linksAllowedFailingStatuses: {
        404: [
            'https://apps.apple.com/us/app/deriv-x/id1563337503',
        ],
        999: [
            'https://www.linkedin.com/company/derivdotcom/',
            'https://www.linkedin.com/company/derivdotcom/life/',
            'https://www.linkedin.com/company/derivdotcom/life/',
        ],
        429: [
            'https://blog.deriv.com/',
        ],
        403: [
            'https://ark-funds.com/funds/arkk/'
        ]
    },
    checkedLinks: [], // To check if link has already been checked or not.
    visitedLinks: [], // To check if link has already been visited or not.
    failedCheckLinks: [], // To see Failed links which were checked only.
    failedVisitLinks: [], // To see Failed links which were visited successfully but had 404 being displayed on the page.
}

let passingStatusCodes = [
    200,
    204
]

/**
 * 
 * @param {*} currentLink String @values "https://abc.com/"
 * @returns Boolean : true (if link is a valid Deriv domain) || false (if link is not a valid Deriv domain)
 * @example isLinkValid("https://abc.com/")
 */
const isLinkValid = (currentLink) => {
    if (linkDetails.validDomains.some(link => currentLink.toLowerCase().includes(link.toLowerCase()))) {
        return true
    }
    else {
        return false
    }
}

/**
 * 
 * @param {*} type String @values 'Visited' or 'Checked'
 * @param {*} currentLink String @values "https://staging.deriv.com/"
 * @returns Boolean : true (if visited or checked in staging) || false (if not visited or checked in staging)
 * @example isLinkStaging('Checked', "https://abc.com/")
 * @example isLinkStaging('Visited', "https://abc.com/")
 */
const isLinkStaging = (type, currentLink) => {
    const currentLinkInStaging = currentLink.replace(linkDetails.validDomains[1], linkDetails.validDomains[0])
    if (type == 'Visited') {
        if (linkDetails.visitedLinks.some(link => currentLinkInStaging.toLowerCase() == link.toLowerCase())) {
            return true
        } else {
            return false
        }
    } else if (type == 'Checked') {
        if (linkDetails.checkedLinks.some(link => currentLinkInStaging.toLowerCase() == link.toLowerCase())) {
            return true
        } else {
            return false
        }
    }
}

/**
 * 
 * @param {*} type String @values 'Visit' or 'Check'
 * @param {*} currentLink String @values "https://staging.deriv.com/"
 * @returns Boolean : true (if the Links is already tested or is not to be tested) || false (if the Links is not already tested or is testable)
 * @example isLinkExcluded('Check', "https://abc.com/")
 * @example isLinkExcluded('Visit', "https://abc.com/")
 */
const isLinkExcluded = (type, currentLink) => {
    if (type == "Visit") {
        if (linkDetails.excludedVisitLinks.some(link => currentLink.toLowerCase().includes(link.toLowerCase())) || linkDetails.visitedLinks.some(link => currentLink.toLowerCase() == link.toLowerCase()) || isLinkStaging("Visited", currentLink)) {
            return true
        } else {
            return false
        }
    } else if (type == "Check") {
        if (linkDetails.excludedCheckLinks.some(link => currentLink.toLowerCase().includes(link.toLowerCase())) || linkDetails.checkedLinks.some(link => currentLink.toLowerCase() == link.toLowerCase()) || isLinkStaging("Checked", currentLink)) {
            return true
        } else {
            return false
        }
    }
}

/**
 * 
 * @param {*} currentLink String @value "https://abc.com"
 * @returns Boolean : true (if link is allowed to have failing status code)
 * @example isAllowedFailingStatus("https://abc.com/")
 */
const isAllowedFailingStatus = (currentLink) => {
    return Object.entries(linkDetails.linksAllowedFailingStatuses).some(([status, links]) => {
        return links.some(link => {
            return currentLink.toLowerCase().includes(link.toLowerCase())
        })
    })
}

/**
 * @param {*} currentLink String @values "https://abc.com/"
 * @example checkLinks("https://abc.com/")
 */
const checkLinks = (currentLink) => {
    if (currentLink && !isLinkExcluded('Check', currentLink) && currentLink != '') {
        cy.request({
            url: currentLink,
            failOnStatusCode: false
        }).then(response => {
            linkDetails.checkedLinks.push(currentLink)
            if (!passingStatusCodes.some(statusCode => response.status == statusCode)) {
                if (!isAllowedFailingStatus(currentLink)) {
                    linkDetails.failedCheckLinks.push(`Link "${currentLink}" failed with Status code: ${response.status}"`)
                    cy.log(`Current failed Link is ${currentLink} with Status code: ${response.status}`)
                    cy.log(`The total failed links are: ${linkDetails.failedCheckLinks.length}`, linkDetails.failedCheckLinks)
                } else {
                    cy.log(`Current link ${currentLink} is allowed to have failed status`)
                }
            }
        })
        if (currentLink && !isLinkExcluded('Visit', currentLink) && isLinkValid(currentLink)) {
            cy.visit(currentLink)
            linkDetails.visitedLinks.push(currentLink)
            cy.document().then(doc => {
                const pageFailed = doc.querySelector('img[alt="Page not found"]')
                if (pageFailed && pageFailed != undefined && pageFailed != null && !linkDetails.linksAllowedFailingVisits.some(link=> currentLink.toLowerCase().includes(link.toLowerCase()))) {
                    linkDetails.failedVisitLinks.push(currentLink)
                }
            })
            cy.get("a").each(availableLink => {
                const currentLink = availableLink.prop('href')
                checkLinks(currentLink)
            })
        }
    }
}



describe('QATEST-96657 - Check URL in deriv.com', () => {
    before(() => {
        cy.clearAllSessionStorage()
        cy.clearAllLocalStorage()
        cy.clearAllCookies()
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }) // to have cleaner logs for this test 
    })
    it('should validate each Url in deriv.com', () => {
        cy.c_visitResponsive(Cypress.env('RegionDIEL'), 'desktop')
        linkDetails.visitedLinks.push(`${Cypress.env('RegionDIEL')}`)
        cy.get("a").each(availableLink => {
            const currentLink = availableLink.prop('href')
            checkLinks(currentLink)
        })
        cy.c_visitResponsive(Cypress.env('RegionROW'), 'desktop')
        linkDetails.visitedLinks.push(`${Cypress.env('RegionROW')}`)
        cy.get("a").each(availableLink => {
            const currentLink = availableLink.prop('href')
            checkLinks(currentLink)
        })
        cy.c_visitResponsive(Cypress.env('RegionEU'), 'desktop')
        linkDetails.visitedLinks.push(`${Cypress.env('RegionEU')}`)
        cy.get("a").each(availableLink => {
            const currentLink = availableLink.prop('href')
            checkLinks(currentLink)
        })

        cy.log('Visited Links: ', linkDetails.visitedLinks.sort())
        cy.log('Verified Links: ', linkDetails.checkedLinks.sort())
        cy.log('Failed Checked Links: ', linkDetails.failedCheckLinks.sort())
        cy.log('Failed Visited Links: ', linkDetails.failedVisitLinks.sort())
        let totalFailure = linkDetails.failedCheckLinks.length + linkDetails.failedVisitLinks.length
        cy.wrap(totalFailure,{log:false}).then(failures=>{
            expect(failures, 'Number of failed links :').to.be.eql(0)
        })
        
    })
})



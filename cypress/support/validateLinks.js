let visitSuccesful = false
let requestSuccesful = true
let toVerifyLinkDetails = {
  requestLinks: [],
  visitLinks: [],
}
let verifiedLinkDetails = {
  requestLinks: [],
  visitLinks: [],
}
let failedLinks = {
  onVisit: [],
  onRequest: [],
}

export const validDomains = [Cypress.config('baseUrl'), Cypress.env('RegionEU')]
export const passingStatusCodes = [200, 204]
export const linksNotToVisit = [
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
  `${Cypress.env('RegionDIEL')}#`,
]

export const linksNotToRequest = [
  'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg', //causing hang because takes a lot of time downloading pdf
  'https://www.instagram.com/derivcareers/',
  'javascript:;',
  'mailto:',
  '/us/app/deriv-ctrader/',
]

export const linksAllowedToFailOnVisit = [
  // Bug raised for following links as https://app.clickup.com/t/86bxbkfqm
  // Need to remove once the issue is fixed because till then test will keep on failing without verifying other links
  'https://staging.deriv.com/trade-types/options/',
  'https://staging.eu-deriv-com-pages.pages.dev/trade-types/options/',
  'https://deriv.com/trade-types/options/',
  'https://staging.deriv.com/p2p', // because of ip restriction p2p is only available to ip for certain countries
]

export const linksAllowedToFailOnRequestWithStatus = {
  404: [
    'https://apps.apple.com/us/app/deriv-x/id1563337503',
    'https://apps.apple.com/us/app/deriv-dp2p/id1506901451',
    // Bug raised for following links as https://app.clickup.com/t/86bxbkfqm
    // Need to remove once the issue is fixed because till then test will keep on failing without verifying other links
    'https://staging.deriv.com/trade-types/options/',
    'https://staging.eu-deriv-com-pages.pages.dev/trade-types/options/',
    'https://deriv.com/trade-types/options/',
  ],
  999: [
    'https://www.linkedin.com/company/derivdotcom/',
    'https://www.linkedin.com/company/derivdotcom/life/',
    'https://www.linkedin.com/company/derivdotcom/life/',
  ],
  429: ['https://blog.deriv.com/'],
  403: ['https://ark-funds.com/funds/arkk/'],
  524: ['https://www.proshares.com/our-etfs/leveraged-and-inverse/tqqq'],
}

export const linksNotAllowedRegion = ['.pdf']

export const isDuplicateRegion = (url) => {
  return url.includes(
    `${Cypress.env('RegionDIEL')}${Cypress.env('RegionDIEL')}`
  )
}

export const isLinkNotAllowedRegion = (url) =>
  linksNotAllowedRegion.some((link) => url.includes(link))

export const isPassingStatusCode = (code) => {
  return passingStatusCodes.some((statusCode) => code == statusCode)
}

export const normalizeUrl = (url) => url.trim().replace(/\/$/, '')

export const filterLinks = (links) => {
  return links.filter(
    (value, index, self) => value !== '' && self.indexOf(value) === index
  )
}

export const getAllLinks = (options = {}) => {
  const { appendRegion = false, region = Cypress.env('RegionDIEL') } = options
  cy.get('a', { log: false }).each((foundLink) => {
    let link = foundLink.prop('href')
    cy.then(() => {
      if (isLinkValid(link) && isLinkVisitAllowed(link)) {
        if (
          appendRegion == true &&
          !link.includes(region) &&
          !isLinkNotAllowedRegion(link)
        ) {
          toVerifyLinkDetails.visitLinks.push(normalizeUrl(link) + region)
          toVerifyLinkDetails.requestLinks.push(normalizeUrl(link) + region)
        } else {
          toVerifyLinkDetails.visitLinks.push(normalizeUrl(link))
          toVerifyLinkDetails.requestLinks.push(normalizeUrl(link))
        }
      } else if (isLinkValid(link) && isLinkRequestAllowed(link)) {
        if (
          appendRegion == true &&
          !link.includes(region) &&
          !isLinkNotAllowedRegion(link)
        ) {
          toVerifyLinkDetails.requestLinks.push(normalizeUrl(link) + region)
        } else {
          toVerifyLinkDetails.requestLinks.push(normalizeUrl(link))
        }
      } else if (isLinkRequestAllowed(link)) {
        toVerifyLinkDetails.requestLinks.push(normalizeUrl(link))
      }
    })
  })
}

export const isLinkValid = (link) => {
  if (
    validDomains.some((validDomain) =>
      normalizeUrl(link).includes(normalizeUrl(validDomain))
    )
  ) {
    return true
  } else {
    return false
  }
}

export const isVisitedLink = (visitLink) => {
  let isVisited = filterLinks(verifiedLinkDetails.visitLinks).some(
    (visitedLink) => visitedLink == visitLink
  )
  if (isVisited == true) return true
  else return false
}

export const isRequestedLink = (requestLink) => {
  let isRequested = filterLinks(verifiedLinkDetails.requestLinks).some(
    (requestedLinks) => requestedLinks == requestLink
  )
  if (isRequested == true) return true
  else return false
}

export const isLinkVisitAllowed = (visitLink) => {
  return !linksNotToVisit.some((link) => visitLink.includes(link))
}
export const isLinkVisitAllowedFailure = (visitLink) => {
  return linksAllowedToFailOnVisit.some((link) => visitLink.includes(link))
}
export const isLinkRequestAllowed = (visitLink) => {
  return !linksNotToRequest.some((link) => visitLink.includes(link))
}
export const isLinkRequestAllowedFailiure = (visitLink) => {
  return Object.entries(linksAllowedToFailOnRequestWithStatus).some(
    ([status, links]) => {
      return links.some((link) => {
        return normalizeUrl(visitLink).includes(normalizeUrl(link))
      })
    }
  )
}

export const verifyVisitLink = (linkToVisit, testRegion, options = {}) => {
  const {
    appendRegion = false,
    region = Cypress.env('RegionDIEL'),
    level = 1,
  } = options
  if (appendRegion == true && !linkToVisit.includes(region)) {
    linkToVisit = linkToVisit + region
  }
  if (!isDuplicateRegion(linkToVisit)) {
    cy.c_visitResponsive(linkToVisit, {
      size: 'desktop',
      quickLoad: true,
      logging: false,
      failNotAllowed: false,
    })

    verifiedLinkDetails.visitLinks.push(normalizeUrl(linkToVisit))

    cy.wait(1000, { log: false }) // This is needed as I am running test with quickload we still need to wait for approximately a second to make sure that 404 is displayed on the page
    cy.then(() => {
      cy.request({
        url: linkToVisit,
        failOnStatusCode: false,
        timeout: 120000,
        log: false,
      }).then((response) => {
        verifiedLinkDetails.requestLinks.push(linkToVisit)
        if (!isPassingStatusCode(response.status)) {
          if (!isLinkRequestAllowedFailiure(linkToVisit)) {
            cy.then(() => {
              requestSuccesful = false
              cy.log(
                `Link "${linkToVisit}" because error code: ${response.status}`
              )
              failedLinks.onRequest.push(
                `Link "${linkToVisit}" because error code: ${response.status}`
              )
            })
          } else if (isLinkRequestAllowedFailiure(linkToVisit)) {
            cy.then(() => {
              requestSuccesful = false
            })
          }
        } else {
          requestSuccesful = true
        }
      })
    })

    cy.then(() => {
      cy.document({ log: false }).then((doc) => {
        const pageFailed = doc.querySelector('img[alt="Page not found"]')
        if (pageFailed && pageFailed != null) {
          if (!isLinkVisitAllowedFailure(linkToVisit)) {
            cy.then(() => {
              visitSuccesful = false
              cy.log(`Link "${linkToVisit}" failed because page was not found`)
              failedLinks.onVisit.push(
                `Link "${linkToVisit}" failed because page was not found`
              )
            })
          } else if (isLinkVisitAllowedFailure(linkToVisit)) {
            cy.then(() => {
              visitSuccesful = false
            })
          }
        } else {
          visitSuccesful = true
        }
      })
    })
  }
  cy.then(() => {
    if (visitSuccesful == true && requestSuccesful == true) {
      getAllLinks({ ...options })
      visitSuccesful = false
      requestSuccesful = false
    }
    cy.writeFile(
      `cypress/fixtures/toRequestLinks/temp${testRegion}.json`,
      JSON.stringify(filterLinks(toVerifyLinkDetails.requestLinks)),
      { log: false }
    )
    cy.writeFile(
      `cypress/fixtures/requestedLinks/${testRegion}.json`,
      JSON.stringify(filterLinks(verifiedLinkDetails.requestLinks)),
      { log: false }
    )
    cy.writeFile(
      `cypress/full_extended_results/failedVisitLinks/${testRegion}.json`,
      JSON.stringify(filterLinks(failedLinks.onVisit)),
      { log: false }
    )
    cy.writeFile(
      `cypress/full_extended_results/failedRequestLinks/${testRegion}.json`,
      JSON.stringify(filterLinks(failedLinks.onRequest)),
      { log: false }
    )
  })
  cy.then(() => {
    filterLinks(toVerifyLinkDetails.visitLinks).forEach((visitLink) => {
      if (
        isLinkValid(visitLink) &&
        !isVisitedLink(visitLink) &&
        isLinkVisitAllowed(visitLink)
      ) {
        verifyVisitLink(visitLink, testRegion, {
          ...options,
          level: level + 1,
        })
      }
    })
  })
}

export const verifyRequestLink = (testRegion, options = {}) => {
  const { visitTestPass = false } = options
  if (visitTestPass == true) {
    cy.readFile(`cypress/fixtures/toRequestLinks/temp${testRegion}.json`).then(
      (toRequestLinks) => {
        cy.readFile(`cypress/fixtures/requestedLinks/${testRegion}.json`).then(
          (requestedLinks) => {
            cy.readFile(
              `cypress/full_extended_results/failedRequestLinks/${testRegion}.json`
            ).then((failedRequestLinks) => {
              toVerifyLinkDetails.requestLinks = toRequestLinks
              verifiedLinkDetails.requestLinks = requestedLinks
              failedLinks.onRequest = failedRequestLinks
            })
          }
        )
      }
    )
  } else {
    cy.readFile(`cypress/fixtures/toRequestLinks/${testRegion}.json`).then(
      (toRequestLinks) => {
        cy.then(() => {
          toVerifyLinkDetails.requestLinks = toRequestLinks
        })
      }
    )
  }

  cy.then(() => {
    toVerifyLinkDetails.requestLinks.forEach((requestLink) => {
      // The below condition is used for optimization and a fail safe.
      if (!isRequestedLink(requestLink)) {
        cy.request({
          url: requestLink,
          failOnStatusCode: false,
          timeout: 120000,
          log: false,
        }).then((response) => {
          verifiedLinkDetails.requestLinks.push(requestLink)
          if (!isPassingStatusCode(response.status)) {
            if (!isLinkRequestAllowedFailiure(requestLink)) {
              cy.then(() => {
                cy.log(
                  `Link "${requestLink}" because error code: ${response.status}`
                )
                failedLinks.onRequest.push(
                  `Link "${requestLink}" because error code: ${response.status}`
                )
              })
            }
          }
        })
      }
      cy.then(() => {
        cy.writeFile(
          `cypress/full_extended_results/failedRequestLinks/${testRegion}.json`,
          JSON.stringify(filterLinks(failedLinks.onRequest)),
          { log: false }
        )
      })
    })
  })
}

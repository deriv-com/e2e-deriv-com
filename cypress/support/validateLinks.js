let visitSuccesful = false
let requestSuccesful = false
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
// // Left for debugging purposes
// let linkTree = {}
// export const addUrlToLinkTree = (level, linkToVisit) => {
//   if (!linkTree[level]) {
//     linkTree[level] = []
//   }
//   linkTree[level].push(linkToVisit)
// }

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
]
export const linksAllowedToFailOnVisit = [
  // Bug raised for following links as https://app.clickup.com/t/86bxbkfqm
  // Need to remove once the issue is fixed because till then test will keep on failing without verifying other links
  'https://staging.deriv.com/trade-types/options/',
  'https://staging.eu-deriv-com-pages.pages.dev/trade-types/options/',
  'https://deriv.com/trade-types/options/',
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
}

export const isDuplicateRegion = (url) => {
  return url.includes(
    `${Cypress.env('RegionDIEL')}${Cypress.env('RegionDIEL')}`
  )
}

export const isPassingStatusCode = (code) => {
  return passingStatusCodes.some((statusCode) => code == statusCode)
}

export const normalizeUrl = (url) => url.toLowerCase().trim().replace(/\/$/, '')

export const filterLinks = (links) => {
  return links.filter(
    (value, index, self) => value !== '' && self.indexOf(value) === index
  )
}

export const getAllLinks = (options = {}) => {
  const { appendRegion = false, region = Cypress.env('RegionDIEL') } = options
  cy.get('a').each((foundLink) => {
    let link = foundLink.prop('href')
    // cy.log(link)
    // cy.log('is valid: ', isLinkValid(link))
    // cy.log('is visit Allowed: ', isLinkVisitAllowed(link))
    // cy.log('is request Allowed: ', isLinkRequestAllowed(link))
    cy.then(() => {
      if (isLinkValid(link) && isLinkVisitAllowed(link)) {
        if (appendRegion == true && !link.includes(region)) {
          toVerifyLinkDetails.visitLinks.push(normalizeUrl(link) + region)
          toVerifyLinkDetails.requestLinks.push(normalizeUrl(link) + region)
        } else {
          toVerifyLinkDetails.visitLinks.push(normalizeUrl(link))
          toVerifyLinkDetails.requestLinks.push(normalizeUrl(link))
        }
      } else if (isLinkValid(link) && isLinkRequestAllowed(link)) {
        if (appendRegion == true && !link.includes(region)) {
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
  cy.log('_________________________________________')
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
    // Left for debugging
    // addUrlToLinkTree(level, normalizeUrl(linkToVisit))
    cy.wait(1000, { log: false })

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
            cy.log(
              `Link "${linkToVisit}" failed with status: ${response.status} but is allowed failure due to known issue`
            )
            // Commented to make sure known failures dont cause test failure
            // failedLinks.onRequest.push(
            //   `Link "${linkToVisit}" failed with status: ${response.status} but is allowed failure due to known issue`
            // )
          })
        }
      } else {
        requestSuccesful = true
        cy.log('Visit via Request Succesful')
      }
    })

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
            cy.log(
              `Link "${linkToVisit}" failed but is allowed failure due to known issue`
            )
            // Commented to make sure known failures dont cause test failure
            // failedLinks.onVisit.push(
            //   `Link "${linkToVisit}" failed but is allowed failure due to known issue`
            // )
          })
        }
      } else {
        visitSuccesful = true
        cy.log('Visit Succesful')
      }
    })
  }
  cy.then(() => {
    if (visitSuccesful == true && requestSuccesful == true) {
      getAllLinks({ ...options })
      visitSuccesful = false
      requestSuccesful = false
    }
    cy.writeFile(
      `cypress/fixtures/toRequestLinks/${testRegion}.json`,
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
    // // Left for Debugging purposes
    // cy.writeFile(
    //   `cypress/fixtures/linkTree${testRegion}.json`,
    //   JSON.stringify(linkTree),
    //   { log: false }
    // )
    // cy.writeFile(
    //   `cypress/fixtures/toVisitLinks/${testRegion}.json`,
    //   JSON.stringify(filterLinks(toVerifyLinkDetails.visitLinks)),
    //   { log: false }
    // )
    // cy.writeFile(
    //   `cypress/fixtures/visitedLinks/${testRegion}.json`,
    //   JSON.stringify(filterLinks(verifiedLinkDetails.visitLinks)),
    //   { log: false }
    // )
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
  cy.readFile(`cypress/fixtures/toRequestLinks/${testRegion}.json`).then(
    (toRequestLinks) => {
      cy.readFile(`cypress/fixtures/requestedLinks/${testRegion}.json`).then(
        (requestedLinks) => {
          cy.readFile(
            `cypress/full_extended_results/failedRequestLinks/${testRegion}.json`
          ).then((failedRequestLinks) => {
            toVerifyLinkDetails.requestLinks = toRequestLinks
            if (visitTestPass == true) {
              verifiedLinkDetails.requestLinks = requestedLinks
              failedLinks.onRequest = failedRequestLinks
            }
          })
        }
      )
    }
  )
  cy.then(() => {
    toVerifyLinkDetails.requestLinks.forEach((requestLink) => {
      if (!isRequestedLink(requestLink)) {
        cy.log('_________________________________________')
        cy.request({
          url: requestLink,
          failOnStatusCode: false,
          timeout: 120000,
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
            } else if (isLinkRequestAllowedFailiure(requestLink)) {
              cy.then(() => {
                cy.log(
                  `Link "${requestLink}" failed with status: ${response.status} but is allowed failure due to known issue`
                )
                // Commented to avoid failures due to known issues
                // failedLinks.onRequest.push(
                //   `Link "${requestLink}" failed with status: ${response.status} but is allowed failure due to known issue`
                // )
              })
            }
          } else {
            cy.log('Visit via Request Succesful')
          }
        })
      }
      cy.then(() => {
        // // Left for Debugging purposes
        // cy.writeFile(
        //   `cypress/fixtures/toRequestLinks/${testRegion}.json`,
        //   JSON.stringify(filterLinks(toVerifyLinkDetails.requestLinks)),
        //   { log: false }
        // )
        // cy.writeFile(
        //   `cypress/fixtures/requestedLinks/${testRegion}.json`,
        //   JSON.stringify(filterLinks(verifiedLinkDetails.requestLinks)),
        //   { log: false }
        // )
        cy.writeFile(
          `cypress/full_extended_results/failedRequestLinks/${testRegion}.json`,
          JSON.stringify(filterLinks(failedLinks.onRequest)),
          { log: false }
        )
      })
    })
  })
}

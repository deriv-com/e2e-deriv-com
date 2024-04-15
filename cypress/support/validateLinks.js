// TODO remove if not needed
export const logger = (counter, linkDetails) => {
  cy.then(() => {
    cy.log(
      `${counter}. Links to visit: `,
      filterLinks(linkDetails.toVerify.visitLinks)
    )
    // cy.log(`${counter}. Links to request: `, filterLinks(linkDetails.toVerify.requestLinks))
  })
  cy.then(() => {
    cy.log(
      `${counter}. Links visited: `,
      filterLinks(linkDetails.verified.visitLinks)
    )
    // cy.log(`${counter}. Links requested: `, filterLinks(linkDetails.verified.requestLinks))
  })
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
  // Bug raised for following links as https://app.clickup.com/t/86bxbkfqm
  // Need to remove once the issue is fixed because till then test will keep on failing without verifying other links
  'https://staging.deriv.com/trade-types/options/',
  'https://staging.eu-deriv-com-pages.pages.dev/trade-types/options/',
  'https://deriv.com/trade-types/options/',
]

export const linksNotToRequest = [
  'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg', //causing hang because takes a lot of time downloading pdf
  'https://www.instagram.com/derivcareers/',
  'javascript:;',
  'mailto:',
]

export const linksAllowedToFailOnVisit = []

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

export const normalizeUrl = (url) => url.toLowerCase().trim().replace(/\/$/, '')

export const filterLinks = (links) => {
  return links.filter((value, index, self) => self.indexOf(value) === index)
}

export const getAllLinks = (visitLinks, requestLinks, options = {}) => {
  const { appendRegion = false, region = Cypress.env('RegionDIEL') } = options
  cy.get('a').each((foundLink) => {
    let link = foundLink.prop('href')
    if (isLinkValid(link) == true) {
      if (appendRegion == true) {
        visitLinks.push(normalizeUrl(link) + region)
      } else {
        visitLinks.push(normalizeUrl(link))
      }
    }
    requestLinks.push(link)
  })
  cy.then(() => {
    visitLinks = filterLinks(visitLinks)
    requestLinks = filterLinks(requestLinks)
  })
  return { visitLinks, requestLinks }
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

export const isVisitedLink = (visitLink, visitedLinks) => {
  return visitedLinks.some((visitedLink) => visitedLink == visitLink)
    ? true
    : false
}

export const isLinkVisitAllowed = (visitLink) => {
  return linksNotToVisit.some((link) => visitLink.includes(link))
}
export const isLinkVisitAllowedFailure = (visitLink) => {
  return linksAllowedToFailOnVisit.some((link) => visitLink.includes(link))
}
export const isLinkRequestAllowed = (visitLink) => {
  return linksNotToRequest.some((link) => visitLink.includes(link))
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

export const verifyVisitLink = (linkToVisit, linkDetails, options = {}) => {
  const {
    appendRegion = false,
    region = Cypress.env('RegionDIEL'),
    counter = 1,
  } = options
  if (appendRegion == true && !linkToVisit.includes(region)) {
    linkToVisit = linkToVisit + region
  }
  cy.c_visitResponsive(linkToVisit, {
    size: 'desktop',
    waitLoad: true,
    logging: false,
    failNotAllowed: false,
  })
  cy.get('body')
  linkDetails.verified.visitLinks.push(linkToVisit)
  linkDetails.toVerify = getAllLinks(
    linkDetails.toVerify.visitLinks,
    linkDetails.toVerify.requestLinks,
    { ...options }
  )
  cy.then(() => {
    linkDetails.toVerify.visitLinks.forEach((visitLink) => {
      if (
        isLinkValid(visitLink) == true &&
        isVisitedLink(visitLink, linkDetails.verified.visitLinks) == false &&
        isLinkVisitAllowed(visitLink) == false
      ) {
        verifyVisitLink(visitLink, linkDetails, {
          ...options,
          counter: counter + 1,
        })
      }
    })
  })
}

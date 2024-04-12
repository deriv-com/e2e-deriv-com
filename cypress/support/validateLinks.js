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

export const linkAllowedToFailOnVisit = []

export const linkAllowedToFailOnRequestWithStatus = {
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

export const filterLinks = (links) =>
  links.filter((value, index, self) => self.indexOf(value) === index)

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

export const verifyVisitLink = (linkToVisit, linkDetails, options = {}) => {
  const {
    appendRegion = false,
    region = Cypress.env('RegionDIEL'),
    counter = 1,
  } = options
  if (appendRegion == true && !linkToVisit.includes(region)) {
    linkToVisit = linkToVisit + region
  }
  cy.c_visitResponsive(linkToVisit, { size: 'desktop', waitLoad: true })

  cy.then(() => {
    cy.log('before here: ', linkDetails.verified.visitLinks)
  })
  linkDetails.verified.visitLinks.push(linkToVisit)
  cy.then(() => {
    cy.log('after here: ', linkDetails.verified.visitLinks)
  })

  // logger(counter, linkDetails)

  linkDetails.toVerify = getAllLinks(
    linkDetails.toVerify.visitLinks,
    linkDetails.toVerify.requestLinks,
    { ...options }
  )
  cy.then(() => {
    cy.log('hello here: ', linkDetails.verified.visitLinks)
  })
  // logger(counter, linkDetails)

  cy.then(() => {
    cy.log('here now: ', linkDetails.verified.visitLinks)
    linkDetails.toVerify.visitLinks.forEach((visitLink) => {
      cy.log('Visiting ', visitLink)
      cy.log(
        `${counter}. The link is already visited`,
        isVisitedLink(visitLink, linkDetails.verified.visitLinks)
      )
      cy.log('hey here: ', linkDetails.verified.visitLinks)
      if (
        isLinkValid(visitLink) == true &&
        isVisitedLink(visitLink, linkDetails.verified.visitLinks) == false
      ) {
        cy.log('over here: ', linkDetails.verified.visitLinks)
        verifyVisitLink(visitLink, linkDetails, {
          ...options,
          counter: counter + 1,
        })
      }
    })
  })
}

/**
 *
 * @param {*} link String @values "https://abc.com/"
 * @returns Boolean : true (if link is a valid Deriv domain) || false (if link is not a valid Deriv domain)
 * @example isLinkValid("https://abc.com/")
 */
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

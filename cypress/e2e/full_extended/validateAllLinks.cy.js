import "@testing-library/cypress/add-commands";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test on uncaught:exception
  return false;
})

let linkDetails = {
  validDomains: [
    Cypress.config("baseUrl"),
    Cypress.env('RegionEU')
],
  excludedVisitLinks: [
    ".exe",
    ".pdf",
    "download.mql5.com",
    "www.metatrader5.com",
    "play.google.com",
    "apps.apple.com",
    "metatraderweb.app",
    "javascript:;",
    "zohorecruit",
    "portal.productboard.com",
    "goo.gl",
    "facebook",
    "twitter",
    "instagram",
    "youtube",
    "https://staging.deriv.com/trade-types/options/", // Bug raised as https://app.clickup.com/t/86bxbkfqm  will remove once the issue is fixed because till then test will keep on failing without verifying other links
    "https://staging.eu-deriv-com-pages.pages.dev/trade-types/options/", // Bug raised as https://app.clickup.com/t/86bxbkfqm  will remove once the issue is fixed because till then test will keep on failing without verifying other links
    "https://deriv.com/trade-types/options/",
  ],
  excludedCheckLinks: [
    "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg", //causing hang because takes a lot of time downloading pdf
    "https://www.instagram.com/derivcareers/",
    "javascript:;",
    "mailto:",
  ],
  linksAllowedFailingVisits: [],
  linksAllowedFailingStatuses: {
    404: [
      "https://apps.apple.com/us/app/deriv-x/id1563337503",
      "https://apps.apple.com/us/app/deriv-dp2p/id1506901451",
      "https://staging.deriv.com/trade-types/options/", // Bug raised as https://app.clickup.com/t/86bxbkfqm  will remove once the issue is fixed because till then test will keep on failing without verifying other links
      "https://staging.eu-deriv-com-pages.pages.dev/trade-types/options/", // Bug raised as https://app.clickup.com/t/86bxbkfqm  will remove once the issue is fixed because till then test will keep on failing without verifying other links"
    ],
    999: [
      "https://www.linkedin.com/company/derivdotcom/",
      "https://www.linkedin.com/company/derivdotcom/life/",
      "https://www.linkedin.com/company/derivdotcom/life/",
    ],
    429: ["https://blog.deriv.com/"],
    403: ["https://ark-funds.com/funds/arkk/"],
  },
  checkedLinks: [], // To check if link has already been checked or not.
  visitedLinks: [], // To check if link has already been visited or not.
};

let failedLinks = {
  failedCheckLinks: [],
  failedVisitLinks: [],
};

let passingStatusCodes = [200, 204];

const normalizeUrl = (url) => url.toLowerCase().trim().replace(/\/$/, "")

/**
 *
 * @param {*} currentLink String @values "https://abc.com/"
 * @returns Boolean : true (if link is a valid Deriv domain) || false (if link is not a valid Deriv domain)
 * @example isLinkValid("https://abc.com/")
 */
const isLinkValid = (currentLink) => {
  if (
    linkDetails.validDomains.some((link) =>
      normalizeUrl(currentLink).includes(normalizeUrl(link))
    )
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * @param {*} type String @values 'Visited' or 'Checked'
 * @param {*} currentLink String @values "https://staging.deriv.com/"
 * @returns Boolean : true (if visited or checked in staging) || false (if not visited or checked in staging)
 * @example isLinkStaging('Checked', "https://abc.com/")
 * @example isLinkStaging('Visited', "https://abc.com/")
 */
const isLinkStaging = (type, currentLink) => {
  const currentLinkInStaging = currentLink.replace(
    linkDetails.validDomains[1],
    linkDetails.validDomains[0]
  )
  if (type == "Visited") {
    if (
      linkDetails.visitedLinks.some(
        (link) => normalizeUrl(currentLinkInStaging) == normalizeUrl(link)
      )
    ) {
      return true;
    } else {
      return false;
    }
  } else if (type == "Checked") {
    if (
      linkDetails.checkedLinks.some(
        (link) => normalizeUrl(currentLinkInStaging) == normalizeUrl(link)
      )
    ) {
      return true;
    } else {
      return false;
    }
  }
};

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
    if (
      linkDetails.excludedVisitLinks.some((link) =>
        normalizeUrl(currentLink).includes(normalizeUrl(link))
      ) ||
      linkDetails.visitedLinks.some(
        (link) => normalizeUrl(currentLink) == normalizeUrl(link)
      ) ||
      isLinkStaging("Visited", currentLink)
    ) {
      return true;
    } else {
      return false;
    }
  } else if (type == "Check") {
    if (
      linkDetails.excludedCheckLinks.some((link) =>
        normalizeUrl(currentLink).includes(normalizeUrl(link))
      ) ||
      linkDetails.checkedLinks.some(
        (link) => normalizeUrl(currentLink) == normalizeUrl(link)
      ) ||
      isLinkStaging("Checked", currentLink)
    ) {
      return true;
    } else {
      return false;
    }
  }
};

/**
 *
 * @param {*} currentLink String @value "https://abc.com"
 * @returns Boolean : true (if link is allowed to have failing status code)
 * @example isAllowedFailingStatus("https://abc.com/")
 */
const isAllowedFailingStatus = (currentLink) => {
  return Object.entries(linkDetails.linksAllowedFailingStatuses).some(
    ([status, links]) => {
      return links.some((link) => {
        return normalizeUrl(currentLink).includes(normalizeUrl(link))
      })
    }
  )
};

/**
 * @param {*} currentLink String @values "https://abc.com/"
 * @example checkLinks("https://abc.com/")
 */
const checkLinks = (currentLink, region) => {
  if (
    currentLink &&
    !isLinkExcluded("Check", currentLink) &&
    currentLink != ""
  ) {
    cy.request({
      url: currentLink,
      failOnStatusCode: false,
      timeout: 120000,
    }).then((response) => {
      linkDetails.checkedLinks.push(currentLink)
      if (
        !passingStatusCodes.some((statusCode) => response.status == statusCode)
      ) {
        if (!isAllowedFailingStatus(currentLink)) {
          failedLinks.failedCheckLinks.push(
            `Link "${currentLink}" failed with Status code: ${response.status}"`
          )
          cy.log(
            `Current failed Link is ${currentLink} with Status code: ${response.status}`
          )
        } else {
          cy.log(
            `Current link ${currentLink} is allowed to have failed status: ${response.status}`
          )
        }
      }
    })
    if (
      currentLink &&
      !isLinkExcluded("Visit", currentLink) &&
      isLinkValid(currentLink)
    ) {
        let regionLink = currentLink
      if (region) {
        if (currentLink.endsWith("/")) {
          regionLink = `${currentLink.slice(0, -1)}${region}`
        } else {
          regionLink = `${currentLink}${region}`;
        }
      }
      cy.c_visitResponsive(regionLink, { size: "desktop" })
      linkDetails.visitedLinks.push(currentLink)
      cy.document().then((doc) => {
        const pageFailed = doc.querySelector('img[alt="Page not found"]')
        if (
          pageFailed &&
          pageFailed != undefined &&
          pageFailed != null &&
          !linkDetails.linksAllowedFailingVisits.some((link) =>
            currentLink.toLowerCase().includes(link.toLowerCase())
          )
        ) {
          failedLinks.failedVisitLinks.push(
            `Link "${currentLink}" because page was not found`
          )
        }
      })
      cy.get("a").each((availableLink) => {
        const currentLink = availableLink.prop("href")
        if (region){
            checkLinks(currentLink, region)
        } else {
            checkLinks(currentLink)
        }
      })
    }
  }
};

describe("QATEST-96657 - Check URL in deriv.com", () => {
  before(() => {
    cy.clearAllSessionStorage()
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false }) // to have cleaner logs for this test
  })
  it("should validate each Url in deriv.com", () => {
    cy.c_visitResponsive(Cypress.env("RegionDIEL"), { size: "desktop" })
    linkDetails.visitedLinks.push(`${Cypress.env("RegionDIEL")}`)
    cy.get("a").each((availableLink) => {
      const currentLink = availableLink.prop("href")
      checkLinks(currentLink, Cypress.env("RegionDIEL"))
    })
    cy.c_visitResponsive("", { size: "desktop" })
    linkDetails.visitedLinks.push(`${Cypress.env("RegionROW")}`)
    cy.get("a").each((availableLink) => {
      const currentLink = availableLink.prop("href")
      checkLinks(currentLink)
    })
    cy.c_visitResponsive(Cypress.env("RegionEU"), { size: "desktop" })
    linkDetails.visitedLinks.push(`${Cypress.env("RegionEU")}`)
    cy.get("a").each((availableLink) => {
      const currentLink = availableLink.prop("href")
      checkLinks(currentLink)
    })
    cy.then(() => {
      failedLinks.failedCheckLinks.sort()
      let uniqueFailedCheckedLinks = [...new Set(failedLinks.failedCheckLinks)];
      failedLinks.failedVisitLinks.sort()
      let uniqueFailedVisitLinks = [...new Set(failedLinks.failedVisitLinks)];
      failedLinks.failedCheckLinks = uniqueFailedCheckedLinks;
      failedLinks.failedVisitLinks = uniqueFailedVisitLinks;
    })
    cy.writeFile(
      "cypress/full_extended_results/validateAllLinksFailures.json",
      failedLinks
    )
    cy.readFile(
      "cypress/full_extended_results/validateAllLinksFailures.json"
    ).then((failedLinks) => {
      expect(
        failedLinks.failedVisitLinks.length +
          failedLinks.failedCheckLinks.length
      ).to.be.eql(0)
    })
  })
})

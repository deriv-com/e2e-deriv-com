import '@testing-library/cypress/add-commands'

const locations = [
  {
    name: 'Malta',
    place: 'Malta',
    urlAppend: 'malta',
    testID: '1750',
  },
  {
    name: 'Paris',
    place: 'Paris',
    urlAppend: 'paris',
    testID: '1798',
  },
  {
    name: 'Dubai',
    place: 'Dubai',
    urlAppend: 'dubai',
    testID: '1742',
  },
  {
    name: 'Cyprus',
    place: 'Limassol',
    urlAppend: 'cyprus',
    testID: '1758',
  },
  {
    name: 'Guernsey',
    place: 'Guernsey',
    urlAppend: 'guernsey',
    testID: '1806',
  },
  {
    name: 'Berlin',
    place: 'Berlin',
    urlAppend: 'berlin',
    testID: '1863',
  },
  {
    name: 'Reading',
    place: 'Reading',
    urlAppend: 'reading',
    testID: '1871',
  },
  {
    name: 'Cyberjaya',
    place: 'Cyberjaya',
    urlAppend: 'cyberjaya',
    testID: '1766',
  },
  {
    name: 'Ipoh',
    place: 'Ipoh',
    urlAppend: 'ipoh',
    testID: '1782',
  },
  {
    name: 'Melaka',
    place: 'Melaka',
    urlAppend: 'melaka',
    testID: '1790',
  },
  {
    name: 'Labuan',
    place: 'Labuan',
    urlAppend: 'labuan',
    testID: '1774',
  },
  {
    name: 'Singapore',
    place: 'Singapore',
    urlAppend: 'singapore',
    testID: '1887',
  },
  {
    name: 'Jordan',
    place: 'Amman',
    urlAppend: 'jordan',
    testID: '1879',
  },
  {
    name: 'Rwanda',
    place: 'Kigali',
    urlAppend: 'rwanda',
    testID: '1822',
  },
  {
    name: 'Asunción',
    place: 'Asunción',
    urlAppend: 'asuncion',
    testID: '1814',
  },
]

locations.forEach((location) => {
  describe(`QATEST-${location.testID} - Location Page - ${location.name}`, () => {
    it(
      `should validate the ${location.name} location page in EU`,
      { tags: ['@full-tests', '@eu-tests'] },
      () => {
        const baseUrl =
          Cypress.env('grepTags') == true
            ? Cypress.config('baseUrl').replace(/\/$/, '')
            : Cypress.env('RegionEU')
        cy.c_visitResponsive(
          `${baseUrl}/careers/locations/${location.urlAppend}`,
          { waitLoad: true }
        )
        cy.c_checkPageContent(location.place)
        if (baseUrl.includes('deriv.com')) {
          cy.c_checkMap()
        }
        cy.c_visitResponsive(
          `${baseUrl}/careers/locations/${location.urlAppend}`,
          {
            waitLoad: true,
            size: 'desktop',
          }
        )
        cy.c_checkPageContent(location.place)
        if (baseUrl.includes('deriv.com')) {
          cy.c_checkMap()
        }
      }
    )
    it(
      `should validate the ${location.name} location page in ROW`,
      { tags: ['@full-tests', '@row-tests'] },
      () => {
        cy.c_visitResponsive(`careers/locations/${location.urlAppend}`, {
          waitLoad: true,
        })
        cy.c_checkPageContent(location.place)
        if (Cypress.config('baseUrl').includes('deriv.com')) {
          cy.c_checkMap()
        }
        cy.c_visitResponsive(`careers/locations/${location.urlAppend}`, {
          waitLoad: true,
          size: 'desktop',
        })
        cy.c_checkPageContent(location.place)
        if (Cypress.config('baseUrl').includes('deriv.com')) {
          cy.c_checkMap()
        }
      }
    )
  })
})

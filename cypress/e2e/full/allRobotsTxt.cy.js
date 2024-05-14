import '@testing-library/cypress/add-commands'

describe('QATEST-42045 - Check Robots Txt Content', () => {
  it(
    'visits the robots.txt file and verifies content',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.request('/robots.txt').then((response) => {
        expect(response.status).to.eq(200)

        const robotsTxtContent = response.body

        expect(robotsTxtContent).to.include('User-agent: *')
        expect(robotsTxtContent).to.include('Allow: /')
        expect(robotsTxtContent).to.include('Disallow: /404/')
        expect(robotsTxtContent).to.include('Disallow: /homepage/')
        expect(robotsTxtContent).to.include('Disallow: /landing/')
        expect(robotsTxtContent).to.include('Disallow: /endpoint/')
        expect(robotsTxtContent).to.include('Disallow: /livechat/')
        expect(robotsTxtContent).to.include('Disallow: /storybook/')
        expect(robotsTxtContent).to.include('Disallow: *.binary.sx')
        expect(robotsTxtContent).to.include('Disallow: /?region=*/')
        expect(robotsTxtContent).to.include(
          'Sitemap: https://deriv.com/sitemap-index.xml'
        )
        expect(robotsTxtContent).to.include('Host: https://deriv.com')
      })
    }
  )
})

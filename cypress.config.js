const { defineConfig } = require('cypress')
require('dotenv').config()

//const gViewPortSize = {small: 'phone-xr', large: 'macbook-16'} //TODO Use enum

module.exports = defineConfig({
  e2e: {
    projectId: '16kef2',
    setupNodeEvents(on, config) { 
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
    //baseUrl: 'https://deriv.com',
    //baseUrl: 'https://deriv-com-v2.pages.dev/',
    baseUrl: 'https://staging.deriv.com/',
    defaultCommandTimeout: 20000,
    supportFile: "cypress/support/e2e.js",
  },
  env: {
    RegionEU: '/?region=at',
    RegionROW: '/?region=id',
    skipROWTests: false,
    email: 'test@example.com',
    viewPortSize: 'small',
    loginEmail: process.env.DERIV_LOGIN,
    loginPassword: process.env.DERIV_PASSWORD,
  },
  retries: {
    "runMode": 2,
    "openMode": 0
  },
  externalUrls: {
    derivlifeURL:   'https://derivlife.com/',
    derivBlogURL:   'https://blog.deriv.com',
    smartTraderURL: 'https://smarttrader.deriv.com/en/trading',
    loginURL:       'https://oauth.deriv.com/',
    stagingderivURL:'https://staging.deriv.com/',
    derivURL:       'https://deriv.com/',
    binaryBotURL:   'https://bot.deriv.com/?l=en',
  },

  externalSocialUrls: {
    facebookEu: 'https://www.facebook.com/derivEU/',
    instagramEu: 'https://www.instagram.com/deriv_eu/',
    twitterEu: 'https://www.twitter.com/deriv_eu/',
    facebookRow: 'https://www.facebook.com/derivdotcom',
    instagramRow: 'https://www.instagram.com/deriv_official/',
    youtubeDeriv: 'https://www.youtube.com/@deriv',
    linkedInDeriv: 'https://www.linkedin.com/company/derivdotcom/',
    twitterRow: 'https://twitter.com/derivdotcom/',
  },
})

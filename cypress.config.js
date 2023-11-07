const { defineConfig } = require('cypress')
require('dotenv').config()

//const gViewPortSize = {small: 'phone-xr', large: 'macbook-16'} //TODO Use enum

module.exports = defineConfig({
  e2e: {
    projectId: '16kef2',
    setupNodeEvents(on, config) {},
    //baseUrl: 'https://deriv.com',
    //baseUrl: 'https://deriv-com-v2.pages.dev/',
    baseUrl: 'https://handle-languages.deriv-com-preview-links.pages.dev',
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
})

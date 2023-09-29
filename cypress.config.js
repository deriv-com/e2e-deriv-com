const { defineConfig } = require('cypress')

//const gViewPortSize = {small: 'phone-xr', large: 'macbook-16'} //TODO Use enum

module.exports = defineConfig({
  e2e: {
    projectId: '16kef2',
    setupNodeEvents(on, config) {},
    baseUrl: 'https://staging.deriv.com',
    defaultCommandTimeout: 10000,
    supportFile: "cypress/support/e2e.js",
  },
  env: {
    RegionEU: '/?region=at',
    RegionROW: '/?region=za',
    skipROWTests: true,
    email: 'test@example.com',
    viewPortSize: 'small'
  },
})

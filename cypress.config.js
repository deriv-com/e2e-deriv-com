const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: "16kef2",
    setupNodeEvents(on, config) {},
    baseUrl: 'https://staging.deriv.com',
    defaultCommandTimeout: 10000,
    supportFile: "cypress/support/e2e.js",
  },
  env: {
    //baseUrl: 'https://deriv.com',
    email: "test@example.com",
    isMobile: false
  },
})

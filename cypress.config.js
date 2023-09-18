const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://staging.deriv.com',
    defaultCommandTimeout: 10000,
    supportFile: "cypress/support/e2e.js"
  },
  env: {
    email: "test@example.com",
  },
})

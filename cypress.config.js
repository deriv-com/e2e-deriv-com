const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    defaultCommandTimeout: 10000,
    supportFile: "cypress/support/e2e.js"
  },
  env: {
    baseUrl: 'https://deriv.com',
    email: "test@example.com"
  },
})

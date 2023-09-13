const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://staging.deriv.com',
    supportFile: "cypress/support/e2e.js"
  },
  env: {
    email: "test@example.com",
  },
})

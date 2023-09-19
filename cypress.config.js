const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    //baseUrl: 'https://deriv.com',
    defaultCommandTimeout: 10000,
    //iPhone14
    viewportWidth: 393,
    viewportHeight: 852,
    supportFile: "cypress/support/e2e.js"
  },
  env: {
    baseUrl: 'https://deriv.com',
    email: "test@example.com",
    isMobile: "true"
  },
})

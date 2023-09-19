const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://deriv.com',
    defaultCommandTimeout: 10000,
    //iPhone14
    viewportWidth: 393,
    viewportHeight: 852,
    supportFile: "cypress/support/e2e.js",
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
  },
  env: {
    //baseUrl: 'https://deriv.com',
    email: "test@example.com",
    isMobile: true
  },
})

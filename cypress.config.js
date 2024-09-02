const { defineConfig } = require("cypress");

const localUrl = "http://localhost"
const homolUrl = "https://mapaculturalhomolog.secult.ce.gov.br"
const prodUrl = "https://mapacultural.secult.ce.gov.br"

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `${homolUrl}`
  },
  chromeWebSecurity: false,
  experimentalSessionAndOrigin:true,
});

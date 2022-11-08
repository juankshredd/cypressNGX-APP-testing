import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:4200/webpack-dev-server/',
    specPattern: 'cypress/e2e/**/*.{js,js,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    "chromeWebSecurity": false
  },
});

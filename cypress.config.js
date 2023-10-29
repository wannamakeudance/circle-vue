const { defineConfig } = require("cypress");

// TODO: we can use cypress to test all the UX in the future
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },
});

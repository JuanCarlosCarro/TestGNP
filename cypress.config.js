import { defineConfig } from "cypress";
import cypressMochawesomeReporter from "cypress-mochawesome-reporter/plugin";

export default defineConfig({
  env: {
    url: "http://localhost:5173/",
    apiUrl: "http://localhost:8080/tools/login",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Implementar el plugin del reporter de Mochawesome
      cypressMochawesomeReporter(on);
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});

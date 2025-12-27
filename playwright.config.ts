import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/e2e',

  use: {
    baseURL: 'http://localhost:6006',
    headless: true,
  },

  webServer: {
    command: 'npm run build-storybook && npx http-server storybook-static -p 6006',
    port: 6006,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
});
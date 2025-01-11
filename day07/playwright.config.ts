import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  //timeout:60*1000,
  expect:{
    timeout:10000
  },
  testDir: './tests',  
  fullyParallel: false,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
   use: {
      trace:'on',
      screenshot:'on',
      video:'on',
      headless:false,
      actionTimeout:40*1000,
  },
  projects: [
      {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],
});

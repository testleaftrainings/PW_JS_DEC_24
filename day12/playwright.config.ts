import { defineConfig, devices } from '@playwright/test';

const timestamp = Date.now();
const reportDir = `./reporter/playwright-reports-${timestamp}`;
//import dotenv from dotenv
//dotenv.config()
export default defineConfig({
  //timeout:60*1000,
  expect:{
    timeout:10000
  },
  testDir: './tests', 
  //globalSetup:"**/storageState.spec.ts",
  fullyParallel: false,
  workers: process.env.CI ? 1 : undefined,
 // retries:1,
  
  reporter: 
  [['html',{outputFolder: reportDir, open: 'always'} ]],
   use: {
      trace:'on',
      screenshot:'on',
      video:'on',
      headless:false,
      actionTimeout:40*1000,
    //   httpCredentials:{
    //     username:"admin",
    //     password:"testleaf"
    // },
            },
  projects: [
      {
      name: 'Google Chrome',
           use: { ...devices['Desktop Chrome'],channel: 'chrome'}
     },
    
  ],
});

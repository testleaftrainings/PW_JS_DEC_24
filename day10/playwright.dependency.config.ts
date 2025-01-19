import { defineConfig, devices } from '@playwright/test';
//import dotenv from dotenv
//dotenv.config()
const date= new Date()
const report=date.getUTCDate()

export default defineConfig({
  //timeout:60*1000,
  expect:{
    timeout:10000
  },
  testDir: './tests', 
  //globalSetup:"**/storageState.spec.ts",
  fullyParallel: false,
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html',{outputFile:"./reporter/"+report,open:'on-failure'}]],
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
      //testMatch:".tests/testAnnotations.spec.ts",
      grep:[/smoke/,/regression/],
      use: { ...devices['Desktop Chrome'],channel: 'chrome'}
     },
    {
      name: 'Accounts',
      testMatch:[".tests/day10/testAnnotations.spec.ts",""],
    //  testIgnore:"", //will not execute the test
      use: { ...devices['Desktop Chrome'],channel: 'chrome',     
    },
    dependencies:["Google Chrome"]  
  }
  ],
});

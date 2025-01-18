import test from '@playwright/test'

test(`Learn ENV data`,async({page})=>{
    //to read the data from the env
    console.log(process.env.LT_Username)
  const user=  process.env.LT_Username as string
  const pwd=process.env.LT_Password as string
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.locator("#username").fill(user)
    await page.fill("#password",pwd)
    await page.click(".decorativeSubmit") 
})
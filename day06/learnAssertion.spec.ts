import test, { expect } from '@playwright/test'

test.only(`SalesForce Login with assertion`, async ({ page }) => {
  //Load the URl in the browser
  await page.goto("https://login.salesforce.com/")
  //locate and fill the data in the username field
  await page.locator(`#username`).fill("vidyar@testleaf.com")
  //to enter password
  await page.locator(`#password`).fill("Sales@123")
  //await page.waitForTimeout(2000)
  //to click on the login button
  await page.locator(`#Login`).click()
  await page.waitForTimeout(5000)
  const title = await page.title()
  console.log(title)
  //to assert the data
  //expect(title).toContain('Home')  //non -retrying  ,generic assertion
  //Auto-retrying ,Page assertion
  await expect(page).toHaveTitle('Home') //hard assert
  
})


test(`Soft assertion`, async ({ page }) => {

  await page.goto("https://leafground.com/input.xhtml")

  const textField = page.getByPlaceholder("Babu Manickam")

  await expect.soft(textField).toBeDisabled()   //soft assert

  console.log("Learning assertion")

})
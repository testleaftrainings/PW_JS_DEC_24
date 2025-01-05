import test, { expect } from '@playwright/test'


test(`SalesForce Login`, async ({ page }) => {

    // page.setDefaultTimeout(60000)
    // page.s
    //Load the URl in the browser
    await page.goto("https://login.salesforce.com/")
    //locate and fill the data in the username field
    await page.locator(`#username`).fill("vidyar@testleaf.com")
    //to enter password
    await page.locator(`#password`).fill("Sales@123")
    //await page.waitForTimeout(2000)
    //to click on the login button
    await page.locator(`#Login`).click()
    console.log(await page.title())

    await page.getByTitle("App Launcher",{exact:true}).click({timeout:5000}) //action timeout

    await page.waitForTimeout(3000)
    await page.getByRole("button",{name:"View All"}).click()

    await page.getByPlaceholder("Search apps or items...").fill("Service")

    await page.getByRole('link', { name: 'Service', exact: true }).click()

    await page.getByRole("link",{name:"Accounts"}).click()

    await page.goto("http://leaftaps.com/opentaps/control/login")

    await page.getByLabel("Username").fill("demo")



   
})

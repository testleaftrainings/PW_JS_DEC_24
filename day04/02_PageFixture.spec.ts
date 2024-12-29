import test, { chromium, firefox } from "playwright/test";

test(`Launching browser using fixture`,async({page})=>{
    // const browser= await chromium.launch()  //connect the repective browser
    // const context= await browser.newContext()//open a window /context
    // const page=await context.newPage() //opens the tab/page
     await page.goto("https://ww.google.co") //loads the url into the page/tab
     const title=await page.title()
     console.log(title)

})
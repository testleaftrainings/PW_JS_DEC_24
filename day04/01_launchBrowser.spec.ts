import test, { chromium, firefox } from "playwright/test";

test(`Launching browser using chromium`,async()=>{
    const browser= await chromium.launch()  //connect the repective browser
    const context= await browser.newContext()//open a window /context
    const page=await context.newPage() //opens the tab/page

    await page.goto("https://www.google.com") //loads the url into the page/tab


})



test(`Launching browser using firefox`,async()=>{
    const browser= await firefox.launch()  //connect the repective browser
    const context= await browser.newContext()//open a window /context
    const page=await context.newPage() //opens the tab/page

    await page.goto("https://www.google.com") //loads the url into the page/tab

})


//headless= true
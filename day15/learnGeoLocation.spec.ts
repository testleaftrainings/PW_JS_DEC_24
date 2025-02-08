import test, { chromium, devices } from '@playwright/test'

test(`Learn Geolocation`,async()=>{

     const browser =await chromium.launch({headless:false,channel:"chrome"})
     const context=await browser.newContext({
        geolocation:{
            latitude: 40.4637,
            longitude:3.7492
        },permissions:['geolocation']
     })

     const page= await context.newPage()
     await page.goto("https://www.google.com/maps")
     await page.waitForLoadState('domcontentloaded')
     await page.click("#sVuEFc")
     await page.waitForTimeout(3000)
})

test.use({geolocation:{
    latitude: 40.4637,
        longitude:3.7492
},
permissions:['geolocation'],
...devices['Blackberry PlayBook']
})
test.only(`Learn Geolocation using fixture`,async({page})=>{
    await page.goto("https://www.google.com/maps")
   // await page.waitForLoadState('load')
    await page.click("#sVuEFc")
    await page.waitForTimeout(3000)

})




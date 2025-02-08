import test from '@playwright/test'

test(`Console.logs`,async({page})=>{
     page.on('console',logs=>{
        console.log(`logginging the error Console >> ${logs.type()}  >>> ${logs.text()}`)
         })
    await page.goto("https://www.abhibus.com/")
})
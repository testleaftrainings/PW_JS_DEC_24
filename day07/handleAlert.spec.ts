
import test, { Page } from '@playwright/test'

test(`Auto dismissing alert`, async ({ page }) => {
    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.locator("//span[text()='Show']").nth(1).click()
})



test(`Handling alert with page.once`, async ({ page }) => {

    page.once('dialog', alertType => {
        const typeOfAlert = alertType.type()
        console.log(typeOfAlert)
        alertType.accept()
    })
    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()


    page.once('dialog', alertType => {
        const typeOfAlert = alertType.type()
        console.log(typeOfAlert)
        alertType.accept()
    })
    await page.locator("//span[text()='Show']").nth(1).click()
})



test(`Handling alert with page.on`, async ({ page }) => {

    page.on('dialog', alertType => {
        const typeOfAlert = alertType.type()
        console.log(typeOfAlert)  //dialog box type
        console.log(alertType.message())  //message displayed in the dialog button
        if (typeOfAlert == "prompt") {
            alertType.accept("Canceling the prompt with name Vidya")
        } else {
            alertType.dismiss()
        }
    })
    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.locator("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]").click()
})







// test(`Handling alert with page.once`, async ({ page }) => {

//     page.once('dialog', alertType => {
//         const typeOfAlert = alertType.type()
//         console.log(typeOfAlert)  //dialog box type
//         console.log(alertType.message())  //message displayed in the dialog button
//         if (typeOfAlert == "prompt") {
//             alertType.accept("Canceling the prompt with name Vidya")
//         } else {
//             alertType.dismiss()
//         }
//     })
//     await page.goto("https://leafground.com/alert.xhtml")
//     await page.locator("//span[text()='Show']").first().click()
//     await page.locator("//span[text()='Show']").nth(1).click()
//     await page.locator("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]").click()
// })



test(`Handling sweet alert`, async ({ page }) => {

    // page.on('dialog',alertType=>{
    //     const typeOfAlert=alertType.type()
    //     console.log(typeOfAlert)  //dialog box type
    //     console.log(alertType.message())  //message displayed in the dialog button
    //     if(typeOfAlert=="prompt"){
    //         alertType.accept("Canceling the prompt with name Vidya")
    //     }else{
    //     alertType.dismiss()
    //     }
    // })
    await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").first().click()
    await page.locator("//span[text()='Show']").nth(1).click()
    await page.locator("//span[text()='Show']").nth(2).click() 
    await page.locator("(//span[text()='Dialog']/following::a[@aria-label='Close'])[1]").click()
    await page.locator("(//h5[text()=' Alert (Prompt Dialog)']/following::span[text()='Show'])[1]").click()

})




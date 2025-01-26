
import test, { expect } from '@playwright/test'

test(`Screenshot`,async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/login")
    await page.screenshot({path:"./screenshot/pic.jpg"})
    const userElement= page.locator("#username")
    userElement.hover()
    await userElement.screenshot({path:"./screenshot/ele.png"})
    await userElement.fill("demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit") 
    await page.click("text=CRM/SFA")
})

test.only(`visual Comparision`,async({page})=>{
    await page.goto("https://www.testleaf.com/")
    const ss=await page.screenshot({path:"./screenshot/ss.png"})
    expect (ss).toMatchSnapshot('testleaf.png')
})

import {Browser, BrowserContext, chromium, Page} from '@playwright/test'


enum environmetUrl{
    dev="https://www.google.com/dev",
    qa="https://www.google.com/qa"
}

 async function loadUrl(url:environmetUrl){
      const browser:Browser=  await chromium.launch({headless:false})
        const context:BrowserContext=await browser.newContext()
        const page:Page=await context.newPage()
        await page.goto(url)
        await page.close()
        await context.close()
        await browser.close()
 }

 loadUrl(environmetUrl.dev)
 loadUrl(environmetUrl.qa)
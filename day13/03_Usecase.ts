import {chromium, Page} from '@playwright/test'
export class LaunchAPP{
    readonly page:Page  //no data is assigned

   constructor(page:Page){
    this.page=page
   }
   
   async loadurl(){
     await this.page.goto("https://www.google.com")
     await this.page.title()
   }
}


// async function doLogin(){
//     const browser =await chromium.launch({headless:false})
//     const context=await browser.newContext()
//     const page=await context.newPage()
//     const launchap=new LaunchAPP(page)
//     launchap.loadurl()

// }

// doLogin()
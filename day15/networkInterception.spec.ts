import test from "@playwright/test";


test(`Learn to abort images using network interception`,async({page})=>{
 
   await page.route("**/**.{jpg,img,png,svg}",route=>route.abort()) 

   await page.goto("http://www.testleaf.com")
   await page.waitForTimeout(4000)

})

test.only(`Network Interception`,async({page})=>{
    await page.route("https://testleaf-da-dev-ed.develop.lightning.force.com/aura?preloadActions",
      (route,request)=>{    
            console.log(request.headers())    
            console.log( request.allHeaders())
            console.log(request.url())
        } )
       // delete Headers['']

    //    route.continue({
    //       postData:{
    //         'Date':''
    //       }
    //    })

    //     route.fulfill({status: 404,
    //         contentType: 'text/plain',
    //         body: 'Not Found!'
    //     })

         await page.goto("https://login.salesforce.com/")
         await page.fill("#username","vidyar@testleaf.com")
         await page.fill("#password","Sales@123")
         await page.click("#Login")    
         await page.waitForTimeout(4000)   
})


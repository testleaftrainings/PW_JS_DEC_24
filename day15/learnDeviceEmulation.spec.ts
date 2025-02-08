import test, { devices } from  '@playwright/test'


test.use({...devices['Galaxy Note II landscape'],
 viewport:{
    width:400,
    height:300
    
 }

})
test(`Learn To emulate with mobile devices`,async({page})=>{
       
 await page.goto("http://leaftaps.com/opentaps/control/main")
})
import test from '@playwright/test'
import fs from 'fs'
import path from 'path'


let loginInfo:any[]
test.beforeAll(`Learning beforeAll`,()=>{
  //read the test data

loginInfo=JSON.parse(fs.readFileSync(path.join(__dirname, "../../constants/login.json"),'utf-8'))
})
test.use({storageState:"constants/LF_Login.json"})
test.beforeEach(`CommonSteps`,async({page})=>{
      console.log("Executing Common steps"+loginInfo[0].TestId)
    console.log(await page.title())
})

test("Creating the Lead",async({page})=>{

    await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.getByText("Leads",{exact:true}).click()
    console.log("write data to the test")

})



test("Update the Lead",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.getByText("Leads",{exact:true}).click()
    console.log("test data update")
})



test("Detele the Lead",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.getByText("Leads",{exact:true}).click()
    console.log("Deleted the lead")
})


test.afterEach(`Getiing the testInfo`,async()=>{
console.log(test.info().status)
//create a issue in jira -->jira issue key
})

test.afterAll(`Report logging`,()=>{
    if(test.info().status="interrupted"){
 console.log("Attaching the reports to jira")
}else{
    console.log(test.info().title)
}
})
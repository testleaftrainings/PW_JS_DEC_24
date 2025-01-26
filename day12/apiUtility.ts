import { APIRequestContext, chromium } from "@playwright/test";


let leadId:any
export async function generateToken(request:APIRequestContext){
    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const request=context.request
    const response=await request.post(`https://login.salesforce.com/services/oauth2/token`,{
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
            "Connection":"keep-alive"
        },
        form:{
            "grant_type":"password",
            "client_id":"3MVG95mg0lk4bathv4oYb772GRC3bVxW1Es_Q3iIRRNR8SK5ApA.LJbPT96HpWJInRGniHTbF.cUq2.uJatoV",
            "client_secret":"149569A62384820C94E7FCB265BEFEC659DE02AD4E4D4BAEE95A354329BCD654",
            "username":"vidyar@testleaf.com",
            "password":"Sales@123"        
        }
    })
     const resBody=await response.json()
    // console.log(resBody)
    return {
    acToken : resBody.access_token,
    tokenType:resBody.token_type,
    insUrl: resBody.instance_url
    }}
export async function createResource(request:APIRequestContext,lname:string,cname:string){

    const  response= await request.post(`${((await generateToken(request)).insUrl)}/services/data/v62.0/sobjects/Lead`,
        {
            headers:{
                "Content-Type":"application/json",
                //Bearer 00D5h0000098pgR!AQwAQHJmghS8Ol8uB5JVFC8oMQ0bmYrtobLvfRJr_3aRKlCSeaC50tgQg6FBeH7fZ8OFTq_LeEse8tYalhhfgNq7pYkA2dM4
                "Authorization":`${(await generateToken(request)).tokenType} ${(await generateToken(request)).acToken}`
            },
            data:{
                  //  "FirstName":`Deepa`,
                    "LastName": lname,
                    "Company":  cname             
            }
        })

        const resBody=await response.json()      
        console.log(resBody)  
        leadId=resBody.id
       return leadId       

}
export async function getResource(request:APIRequestContext){
    const  response= await request.get(`${(await generateToken(request)).insUrl}//services/data/v62.0/sobjects/Lead/${leadId}`,
        {
            headers:{
                "Content-Type":"application/json",
                //Bearer 00D5h0000098pgR!AQwAQHJmghS8Ol8uB5JVFC8oMQ0bmYrtobLvfRJr_3aRKlCSeaC50tgQg6FBeH7fZ8OFTq_LeEse8tYalhhfgNq7pYkA2dM4
                "Authorization":`${(await generateToken(request)).tokenType} ${(await generateToken(request)).acToken}`
            },
           
        })
        const resBody=await response.json()
        console.log(resBody)
        let lastname=resBody.LastName
        console.log(lastname)
        return lastname
}

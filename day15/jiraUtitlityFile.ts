//endpoint
//request body
//auth details

import axios from "axios"

const endpoint= "https://vidya-bharathi.atlassian.net/rest/api/2/issue"
//api credentials 
const username="vidyar1926@gmail.com"
//     password -
const apiKey ="ATATT3xFfGF0TLCSD_oJ9tNUtuVBeD5wLF97rZ2u-GybPvEU-41L28ZvQEtUO1T9qTRTGMwwQUTVeMTfhcmRblsygW493hKSjBhKAtBNWWfTm7RMMLuCTsbsj0d0Zu2Fr2LaBq5qpoj0V5JZzw6cS9G4I4aACBxIGiKi5wT06ZXx0ZhWTfEOyK8=423B3318"
//project Id -->
const pID="PDEC"

export async function createIssue(summary:string,desc:string){
 //the payload
  const issuBody={
    "fields":{
        "project":{
            "key":pID
        },
        "summary":summary,
        "description":desc,
        // "priority":{
        //     "name":"High"
        // }
        "issuetype":{
            "name":"Bug"
        }
    }
  }

      const res=await axios.post(endpoint,issuBody,{
       headers:{
        "Content-Type":"application/json"
       },auth:{
           username: username,
           password: apiKey
       }
      }
    
    )

    console.log(res.status)
}


//createIssue()
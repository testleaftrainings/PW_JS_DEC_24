function firstInfo(callback){
    setTimeout(()=>{    
        callback()
    },3000)

    console.log("Calling first function")

}
 function secondInfo(callback){
 setTimeout(() => {
    callback()
 }, 3000);

 console.log("Second Info")
}

function thirdInfo(){
   setTimeout(()=>{
    console.log("Third function")
   },3000)
}

firstInfo(()=>secondInfo(()=>thirdInfo()))

//callback hell

//Promise 

//async and await 

//waiter -->get order -->15 mins-pending  resolve, reject
//deliver -->wait
//give bill -->


//takes order -->goes kitchen 
//

await enterusername
await enterpassword
//timeout
await clickLogin
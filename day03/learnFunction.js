

function browserType(){
    console.log("Launching chromebrowser")
       }
browserType()

//Function Expression
let browser= function (){
    console.log("Launching Edge browser")
}

//browser()
//callback function -->calling a function as a parameter to another function

setTimeout(browser, 2000);
console.log("Learning asynchronous with callback")


//Anonymous -->no name given to the function

//arrow function

//concised way of writing the script

function math(a,b){
    return a+b
}


let sum=(a,b)=> {
     //  console.log(a+b)
       return a+b
}
  
sum(2,3)
sum(sum,8)



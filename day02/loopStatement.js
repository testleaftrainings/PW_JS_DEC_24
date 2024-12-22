//syntax --> for(start point, condition/range, logic){logic }

import { math } from "./functionWithReturnStatement";

// for (let i = 30; i <= 40; i++) {

//     if (i == 34) {      
//         break //stops the iteration
//         //console.log() unreachable code
//     }   
//     console.log("Learning continue "+i)
// }

// for (let i = 30; i <= 40; i++) {
//     if (i == 34) {       
//         continue //skip the particular condition and continue with the iteration
//     }   
//     console.log("Learning continue "+i)
// }


// for(let i=30;i<=40;i++){
//     if(i==34){
//         console.log("Thirty four")
//         break
// }
// else{
//     console.log(i)
// }
// }
//40,39,38,37...

//reverse
// for(let i=40;i>=30;--i){
//     console.log(i)
// }

// //find the even nubers between 20 to 50
// let i=10
// if(i%2==0){
//     console.log(i +"Even number")
// }

//syntax -->
let nextButton=false;
while (nextButton) { //infinite loop
    console.log("Learning while")
   // nextButton=false
}


//nextButton -->isVisible -->true -->click on the next
//                          -->false-->exists loop

let i=1
// while(i>0 && i<=10){
//     console.log(i)
//     i++
// }

//timedout || interupted -->log in the report

do{
    console.log(math(2,3))
    i++
}while(i<=10)


    
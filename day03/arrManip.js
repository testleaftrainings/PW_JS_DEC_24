
let mentors=["Ajay","Jagdeesh","Ravi","Vidya"]


// for(let i=0;i<mentors.length;i++){
//     console.log(mentors[i])
// }

//foreach ,for of , for in


mentors.forEach(eachMentor => {
    console.log(eachMentor)
});

console.log("**************")


for(let mentorName of mentors){
    console.log(mentorName)
}

console.log("**************")
for (const i in mentors) {          
    console.log(i +":"+ mentors[i])
}

let number=[1,2,3,4,3,6,4]

number.sort()
console.log(number)



function empDetails(firstname:string,lastname:string,empStatus:boolean=true,address?:string){
 
    return `The emp details are --> ${firstname}:${lastname}:${address}:${empStatus}`
    
}

console.log(empDetails("charan","ns",false))
console.log(empDetails("charan","ns",true,"Mysore"))
console.log(empDetails("charan","ns"))
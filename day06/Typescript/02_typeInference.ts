

//explicit type inference /type annotation
let empName:string;
empName="Mani"

let empList:string[]=["Charan","Mani","Ashok","Dhivya"]



function add(x:number,y:number):number{
    return x+y
}


//union and intersection

//union type inference
let url:string|null

url="dd"
url=null

let responseStatus:string|number //(either or)

responseStatus="OK created"
responseStatus=201


//instersection 
//let resCode:string&number

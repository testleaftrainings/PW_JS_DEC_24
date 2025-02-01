export class Employee{

  public empName:string
  readonly empId:string ="emp3456"
  private salary:number
  protected phno:number
  
  
   constructor(){
     this.empName="Ashok"   
     this.salary=300000
     this.phno=8904749302
   }

   printempDetails(){
        console.log(`The details of empl : ${this.empName} -${this.empId} -${this.salary} -${this.phno}`)
       // this.empId="emp3"
   }

    public get readSalary(){   //to read permission
        return this.salary
    }

    public set writeAccess(newSalary:number){
        this.salary=newSalary  //to edit the value
    }
}

const empData=new Employee()
empData.printempDetails()
let oldvalue =empData.readSalary   //property way
console.log(oldvalue)
empData.writeAccess=5000000
console.log(empData.readSalary)



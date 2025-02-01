
 import { Employee } from "./learAccessModifier"
class PayRoll extends Employee {
   
    empDetails(){
      console.log(`${this.phno} `)  //${this.salary} not accesible as becoz of private
    }

}

const payRoll=new PayRoll()
payRoll.empDetails()
console.log(payRoll.readSalary)
payRoll.writeAccess=899000098
console.log(payRoll.readSalary )

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.empId = "emp3456";
        this.empName = "Ashok";
        this.salary = 300000;
        this.phno = 8904749302;
    }
    Employee.prototype.printempDetails = function () {
        console.log("The details of empl : ".concat(this.empName, " -").concat(this.empId, " -").concat(this.salary, " -").concat(this.phno));
        // this.empId="emp3"
    };
    Object.defineProperty(Employee.prototype, "readSalary", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "writeAccess", {
        set: function (newSalary) {
            this.salary = newSalary; //to edit the value
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
var empData = new Employee();
empData.printempDetails();
var oldvalue = empData.readSalary; //property way
console.log(oldvalue);
empData.writeAccess = 5000000;
console.log(empData.readSalary);
var HR = /** @class */ (function () {
    function HR() {
    }
    HR.prototype.payroll = function () {
    };
    return HR;
}());

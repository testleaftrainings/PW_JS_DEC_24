"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var learAccessModifier_1 = require("./learAccessModifier");
var PayRoll = /** @class */ (function (_super) {
    __extends(PayRoll, _super);
    function PayRoll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayRoll.prototype.empDetails = function () {
        console.log("".concat(this.phno, " ")); //${this.salary} not accesible as becoz of private
    };
    return PayRoll;
}(learAccessModifier_1.Employee));
var payRoll = new PayRoll();
payRoll.empDetails();
console.log(payRoll.readSalary);
payRoll.writeAccess = 899000098;
console.log(payRoll.readSalary);

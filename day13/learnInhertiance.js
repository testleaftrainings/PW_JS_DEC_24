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
var Login = /** @class */ (function () {
    function Login() {
        this.usernme = "Mani";
        this.pwd = "m12";
    }
    Login.prototype.enterCrentials = function () {
        console.log("The credentials are ".concat(this.usernme, " and ").concat(this.pwd));
    };
    Login.prototype.clickLogin = function () {
        console.log("The home ppage is displayed");
    };
    return Login;
}());
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        var _this = _super.call(this) || this; //calling your parent /Super class methods
        _this.clickCRM();
        return _this;
    }
    HomePage.prototype.clickCRM = function () {
        console.log("CRM link is clicked");
    };
    HomePage.prototype.clickLeadsButton = function () {
        console.log("From HomePage class");
    };
    return HomePage;
}(Login));
var LeadsPage = /** @class */ (function (_super) {
    __extends(LeadsPage, _super);
    function LeadsPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeadsPage.prototype.clickLeadsButton = function () {
        _super.prototype.clickLeadsButton.call(this); //from parent class
        console.log("From Leads Class");
    };
    return LeadsPage;
}(HomePage));
var hp = new LeadsPage();
hp.enterCrentials();
hp.clickLogin();
hp.clickLeadsButton(); //method overriding

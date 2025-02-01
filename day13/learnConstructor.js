var Login = /** @class */ (function () {
    //default constructor
    // constructor(){
    //     console.log("default constructor")
    // }
    //parmetrized constructor
    function Login(uname, pwd) {
        this.username = uname;
        this.password = pwd;
        this.loadUrl();
        this.enterCredentials();
    }
    Login.prototype.loadUrl = function () {
        console.log("Launch the Leaftaps url");
    };
    Login.prototype.enterCredentials = function () {
        console.log("Login with valid Credentials using ".concat(this.username, " and ").concat(this.password));
    };
    return Login;
}());
var adminLogin = new Login("vidya", "123@");
adminLogin.enterCredentials();
var userLogin = new Login("ajay", "345");
userLogin.enterCredentials();
new Login("Charan", "789");

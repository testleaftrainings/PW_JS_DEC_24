var Browser = /** @class */ (function () {
    function Browser() {
        //properties -->represents the information /data 
        this.browserType = "chrome";
        this.browserVarsion = 120.4;
    }
    //function -->call it as method -->action to be performed
    Browser.prototype.launchBrowser = function () {
        console.log("Learning class and Object");
    };
    return Browser;
}());
//create a object -->outside the class
//object -->.refernce to the class
//const varName=new classname()
//classname() -->constructor -->special method initializes the object (allocates memory)
var browser = new Browser();
browser.launchBrowser();
console.log(browser.browserType);

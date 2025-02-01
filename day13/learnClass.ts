export class Browser{
    //properties -->represents the information /data  of the class -->refer it as this -->current class data
     browserType:string="chrome"
     browserVarsion:number=120.4

     //function -->call it as method -->action to be performed
     launchBrowser(){
        console.log("Learning class and Object" +this.browserType)
     }

     loadUrl(){
        this.launchBrowser()
     }

}


//create a object -->outside the class
//object -->.refernce to the class
//const varName=new classname()
//classname() -->constructor -->special method initializes the object (allocates memory)
const browser=new Browser()
browser.launchBrowser()
console.log(browser.browserType)
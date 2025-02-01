class Login{
    username:string
    password:string

    //default constructor

    // constructor(){
    //     console.log("default constructor")
    // }
 
    //parmetrized constructor

    constructor(uname:string,pwd:string){  //uname pwd are local variable -->visibel only to this constructor call
      this.username=uname
      this.password=pwd
      this.loadUrl()
      this.enterCredentials()
    }

        loadUrl(){
            console.log("Launch the Leaftaps url")
        }

     enterCredentials(){
        console.log(`Login with valid Credentials using ${this.username} and ${this.password}`)
     }


}



const adminLogin=new Login("vidya","123@")
adminLogin.enterCredentials()

const userLogin=new Login("ajay","345")
userLogin.enterCredentials()

new Login("Charan","789")
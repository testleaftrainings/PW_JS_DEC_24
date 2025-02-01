class Login{
 usernme:string
 pwd:string

constructor(){
    this.usernme="Mani"
    this.pwd="m12"
}

enterCrentials(){
    console.log(`The credentials are ${this.usernme} and ${this.pwd}`)
}
clickLogin(){
    console.log("The home ppage is displayed")
}
}

class HomePage extends Login{

    constructor(){
        super()  //calling your parent /Super class methods
        this.clickCRM()
    }
    clickCRM(){
        console.log("CRM link is clicked")
    }
    clickLeadsButton(){
      console.log("From HomePage class")
    }
}

class LeadsPage extends HomePage{

 clickLeadsButton(){
    super.clickLeadsButton()  //from parent class
     console.log("From Leads Class")
 }

}

// class Account extends HomePage, LeadsPage{
 //multiple inheritance  is not allowed 
// }

const hp=new LeadsPage()
hp.enterCrentials()
hp.clickLogin()
hp.clickLeadsButton()   //method overriding


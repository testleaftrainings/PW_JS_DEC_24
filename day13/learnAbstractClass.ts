abstract class wrapperMethod{
     //unimpleemented and implemented
     typeAndEnter(){
        console.log("The method used to fill and enter in a text field")
     }
    abstract typeAndTab()

    abstract hoverAndClick():void
}
//wont allowed to create obj
//concrete class -->able to create object

class Baseclass extends wrapperMethod{
    typeAndTab() {
      console.log("Method to type and tab")
    }
    hoverAndClick(): void {
      console.log("Method to hover and click");
    }
}
const obj=new Baseclass()
obj.typeAndTab()
obj.typeAndEnter()
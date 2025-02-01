class ElementAction{

//method signature
    public clickEle(locatorValue:string):void    

    public clickEle(locatorValue:string,forceclick:boolean):void

    public clickEle(locatorValue:string,forceClick?:boolean){
           if(forceClick==true){
            console.log("Do force Click")
           }
           else{
            console.log("Click normally")
           }
    }

}


new ElementAction().clickEle("a")
new ElementAction().clickEle("a",true)
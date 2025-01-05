//type alias -->creating custom type of data

//syntax: type typeName=definition

type user=number | string

let empDetails:user ="123"

type supportedBrowser="chrome"|"edge"

function LaunchBrowser(browserName:supportedBrowser){

    if(browserName==="chrome"){
        console.log("Launch chromeBrowser")
    }else{
        console.log("Edge browser")
    }

}

LaunchBrowser("edge")

// type admin="Security"

// type employee="Facility"

// type QA= admin & employee

// let empPrivilege:QA=


type dimension={
    height:number
    width:number
    radius?:number
}


let rectangle:dimension={
    height: 12,
    width: 10
}

console.log(rectangle.height)


let circle:dimension={
    height: 0,
    width: 0,
    radius:12
}

console.log(circle.radius)


type Admin={
    username:string,
    userId:number
}

type Employee={
    name:string
    empId:number
    active:boolean
}


//intersection

type QA=Admin & Employee


let userProfile:QA={
    username:"Admin",
    userId:123,
    name:"Charan",
    empId:345,
    active:true
}


console.log(userProfile.empId)
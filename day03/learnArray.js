//array -->group of different data stored under single variable 
// array size is dynamic in nature

//literal way -arr dec
let browserDetails=["Chrome",true,120]

//using object
let companyName=new Array("Testleaf","Qeagle","Wipro")

let browserNames=new Array()
browserNames[0]="Chrome"


console.log(browserNames)

browserNames[4]="Safari"

console.log(browserNames)

//size of the array

let arrLength=browserNames.length;
console.log(arrLength)

let numbers=[1,2,3,4,5,6.1]
console.log(numbers.length)

let browserVersion=[]
browserVersion[0]=120.34
browserVersion[3]=false

console.log(browserVersion)

browserVersion[3]=130

console.log(browserVersion.length)

//add and remove based position either at front / end of the array

//push,unshift -add the data into the array
//pop,shift - remove the data from the array


let newArr=browserVersion.push("Chrome")  //add the data at the end of the array

console.log(browserVersion)

browserVersion.unshift("Edge") //add the data at the front of the array

console.log(browserVersion)

browserVersion.unshift("Safari")

console.log(browserVersion)

browserVersion.pop()
console.log(browserVersion)

browserVersion.shift()
console.log(browserVersion)


let browserData=["chrome","edge","safari","Webkit","chromium"]
console.log(browserData.splice(2,2,"IE","bing","chatgpt"))  //removes the element with the give index along with the consecutive elements
console.log(browserData)

// let empId=["user123","user345","user234","user567","user90","user55","user93"]
// console.log(empId.splice(,"user89","user10","user88"))  //start index , number of elements, insert new ele 
// console.log(empId)


let numarray=[1,2,3,8,9,10,11]
//spreadSyntax ...arryname  -append the values in the existing array
let nuarr2=[4,5,6,...numarray]
console.log(nuarr2.splice(1,1,3))
console.log(nuarr2)

//mixed array , nested array
let mixedArr=["chrome","edge",120,false,["safari",130,true]]
console.log(mixedArr.length)
let count=mixedArr.length
let nestArr=mixedArr[count-1]  //mixedArr[4]
console.log(nestArr)


for (const element of mixedArr) {
    if(Array.isArray(element)){
        console.log(element)
    }
    
}

let orderEle=[1,19,5,2,4]
console.log(orderEle.sort((a,b)=>a-b))







//let innerArr=mixedArr.filter((val)=>Array.isArray(val))




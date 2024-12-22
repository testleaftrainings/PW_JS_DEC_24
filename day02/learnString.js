//String ->collection of characters
//declation of sting -literal and object -->new wrapperclass()


let username="Testleaf"  //literal recommended declartion

let user=new String("Testleaf") //object declaration

let userId="Testleaf"

console.log(username==user)

console.log(username===user) //value / address of the string

console.log(username===userId)



//find the length -->count of letters in the string

let length=username.length
console.log(length)

let browserName="Chrome Browser"
console.log(browserName.length)

//index -->position of the character in  the word -->array 
console.log(browserName.charAt(5))

console.log(browserName.indexOf('r')) //returns the index of the first occurence of the character

console.log(browserName.lastIndexOf('r')) //returns the last position of the character

//string , length ,matching character, counter
//string should be processed as an ch array -->index- for loop 
//compare chartAt[0]=='r' , condtion satisfies --> true -->increase counter


console.log(browserName.split('').reverse().join(''))

//substring
//slice
//replace
//replaceAll

console.log(browserName.substring(3,7))  //brings the sub string of the word, end index excluded

console.log(browserName.slice(-8,-4)) //counting from the back

//c h r o m e  B r o w s e r


let browser=browserName.replaceAll("r","$")
console.log(browser)

let price ="Rs.1924"

//1924 +24 
console.log(price+24)

//g ->grep -->global reg expression 
let newPrice= price.replaceAll(/[^0-9]/g,"") //all the character other than number replaced with ""
console.log(newPrice+24)

let discountPrice=parseInt(newPrice)
console.log(discountPrice+24)

// /[a-zA-z]/g  , /[^0-9]/g-->number
// /[^a-zA-z]/g -->characters
// /d/g
// /w/g
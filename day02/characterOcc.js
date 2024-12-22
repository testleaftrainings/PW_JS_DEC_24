
let browserName="Chrome Browser"
let targetedCh='r'

let counter=0 //initialize the counter with zero
let wordCount=browserName.length
for(let i=0;i<wordCount;i++){
    if(browserName.charAt(i)==targetedCh){
        counter++  //counter += 1 , counter =counter+1
    }
}

console.log(`The occurence of ${targetedCh} in the word ${browserName} is  ${counter}`)
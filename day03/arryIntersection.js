let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 3, 4, 7, 8, 9];

let intersection = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      intersection.push(arr1[i]);      
    }
  }
}

console.log(intersection);

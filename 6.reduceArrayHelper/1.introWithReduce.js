/* reduce also consentrate down all item to one value. Not boolain value (some and every) it's real  value*/

// let's calculate sum by using for loop
const numbers = [34, 5, 2];
let sum = 0;
for (let i = 0; i < numbers.length; i++) sum += numbers[i];
console.log(sum);

// by using reduce helper function

const sumReduce = numbers.reduce((number, item) => number + item);

console.log(sumReduce);

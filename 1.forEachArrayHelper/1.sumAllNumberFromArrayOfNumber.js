/* sum all number from array of number */

// create a number array
const num = [34, 12, 34, 1, 4, 6, 42, 76, 2];

// create sum variable
let sum = 0;

// find sum by using forEach array helper method

num.forEach((item) => (sum += item));
console.log(sum);

// by using fn

sum = 0;
function adder(number) {
  return (sum += number);
}

num.forEach(adder);
console.log(sum);

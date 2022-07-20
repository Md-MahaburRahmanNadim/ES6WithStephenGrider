/* to compect list of items in an array/ to pack list of items in a array.

it's use when we want to catch infinity arguent as an function parameter */

function addNumbers(numbers) {
  return numbers.reduce((acc, item) => acc + item);
}

console.log(addNumbers([2, 3, 6, 7, 34]));
// now here in the fn calling if we want to pass a list of unknow numbers of arguemnt then how can we handle or catch those argument? by using ...rest operator

// catching list of arguemnt by using rest operator

function addUlNumberByTheHelpOfRest(...numbers) {
  return numbers.reduce((acc, item) => acc + item);
}

console.log(addUlNumberByTheHelpOfRest(2, 3, 4, 5, 6, 7, 2, 3, 56, 7));

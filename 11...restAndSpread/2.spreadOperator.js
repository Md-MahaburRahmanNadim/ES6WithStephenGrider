/* it's use to breaking [] array and convert it into an list of items seperate by comman [23,3,2,3,2] === 23,3,2,3,2


by usgin spread operator we can copy array and concat multiple array with some existing element which are not able to do by using (arr.concat) method
*/

// let we want to made color palate whcih have defaultColor & userFavoriteColors, some aditional color

const defaultColor = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];

// let's concat by using concat method
const concatArr = defaultColor.concat(userFavoriteColors);

console.log(concatArr);

// let do it by using spread operator
const arrJoiningViaSpread = [...defaultColor, ...userFavoriteColors];
console.log(arrJoiningViaSpread);

// arr copying
const copyOfConcatArr = [...concatArr];
console.log(copyOfConcatArr);

// ading array with existing element

const fallColors = ["fire red", "fall orange"];
const joiningWithExistingElement = [
  "violate",
  "blue",
  "green",
  "indego",
  ...fallColors,
  ...defaultColor,
  ...userFavoriteColors,
];
console.log(joiningWithExistingElement);

// let's imagine we have shop and some people has a defalut list and in this list they alway buy milk. If they forget to bring it's then our program always add milk to there shoping card. How can we do this?

function validateShopingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}

console.log(validateShopingList("orange", "sugure"));
console.log(validateShopingList("orange", "sugure", "milk"));

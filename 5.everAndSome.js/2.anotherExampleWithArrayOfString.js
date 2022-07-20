const names = ["Md. Mahabur Rahman Nadim", "Nadim", "Hasan", "Sakib"];

// let's see that all of name has 4 lenthg on it or not

const allAre5Char = names.every((name) => name.length > 4);
console.log(allAre5Char);

// let's see that one of name contain at lest 3 char

const oneOfAre4Char = names.some((name) => name.length > 3);
console.log(oneOfAre4Char);

const products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" },
];

// let we want to buy only fruit.how can we filter this with for loop

const fruit = [];
for (i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") fruit.push(products[i]);
}

console.log(fruit);

// let do it by using filter helper fn. why we use that because less code,less logic,less probability to produce bug in the code

const fruits = products.filter((product) => product.type === "fruit");
console.log(fruits);

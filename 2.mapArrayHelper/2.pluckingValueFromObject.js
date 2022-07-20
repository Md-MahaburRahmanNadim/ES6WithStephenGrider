const car = [
  { name: "sdoi", price: "chipe" },
  { name: "marsido", price: "expensive" },
];

const pluckThePrice = car.map((item) => item.price);

console.log(pluckThePrice);

/* this plucking method are use in forntend application most widly. because we cantch array of object from server then we modifi it and then show it to the user*/

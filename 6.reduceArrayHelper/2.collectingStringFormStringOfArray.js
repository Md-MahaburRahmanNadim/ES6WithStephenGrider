const primaryColors = [
  { color: "green" },
  { color: "yellow" },
  { color: "red" },
  { color: "blue" },
];

/* in reduce method frist we have to thing about return value form this return value we can thing of the initial value of the reduce method which is pass as a second argument of the reduce method */

const arrayOfColor = primaryColors.reduce((privous, primaryColor) => {
  privous.push(primaryColor.color);
  return privous;
  // don't do any modification in reduce fn. no mutation of our data. Here we mutatutaing the privous data
}, []);

console.log(arrayOfColor);

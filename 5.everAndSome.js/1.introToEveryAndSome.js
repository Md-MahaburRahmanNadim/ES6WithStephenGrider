const computers = [
  { name: "Apple", ram: 25 },
  { name: "Comppaq", ram: 4 },
  { name: "Acer", ram: 32 },
];

// let's implement the ever method via for loop
/* in every method if one item is through (false) to the iterator fn then it's return false. However the some method is revers to this method meaning if one are true and rest of are false then it's going to return true */

/* in this case we assume that if any computer have at least 15 gb ram then it's run the progrum*/

let allComputersCanRunProgram = true;
let onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];
  if (computer.ram < 15) allComputersCanRunProgram = false;
  else onlySomeComputersCanRunProgram = true;
}

console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

/* you can the use of for loop is so much imetating for that reason we alawys try to use array helper or mordern method*/

const areInstallProgramInAllComputer = computers.every(
  (computer) => computer.ram < 15
);
console.log(areInstallProgramInAllComputer);

// let's do it by using some method. which return true if one element/ item matched the iterator fn conditions

const areInstallProgramAtLeastOneComputer = computers.some(
  (computer) => computer.ram < 15
);
console.log(areInstallProgramAtLeastOneComputer);

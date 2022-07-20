const users = [
  { name: "Nadim" },
  { name: "Hasan" },
  { name: "Nadim" },
  { name: "Shakib" },
  { name: "Nadim" },
];

// lets create a for loop which return first item which is matched with the itrator fn conditions

let user;
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Nadim") user = users[i];
  break; // if we don't use it it's collect all item which is mached with this condition. This is not our consern
}

console.log(user);

// this for loop called find method which is given below

const userFind = users.find((user) => user.name === "Nadim");

console.log(userFind);
// let's work with findall Method

const emptyArr = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Nadim") emptyArr.push(users[i]);
}

console.log(emptyArr);

// let's do it's with findall method

const userFindAll = users.findIndex((user) => user.name === "Nadim");
console.log(userFindAll);

const expense = {
  type: "Business",
  amount: "$45 USD",
};

// imagine we have to save those property in a variable how to do this?

const type = expense.type;
const amount = expense.amount;
console.log(type);
console.log(amount);
// if we saw that we have lot's of duplicate code in here and we have to declear variable twoice. By using distructuring we can short those line of code in one line

// distructuring

const { type: typeD, amount: amountD } = expense;
/// /if we pass a argument that does not exist then we get this argument result as undefined

console.log(typeD, amountD);

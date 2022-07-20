/*
arrow/fatArrow function  =>
slime arrow fn   -> is use robi,copy script

*/

// named function
function namedFn(a, b) {
  return a + b;
}
console.log(namedFn(3, 6));

// converting name fn to arrow/fatArrow fn
const fatArrowFn = (a, b) => a + b;

console.log(fatArrowFn(345, 45));

// if we have one parameter then we don't use the () prantcis
const fatArrowWithoutPrants = (a) => a;
console.log(fatArrowWithoutPrants(34));

// but if we have morethan one parameter or no parameter then we have to use ()paranticis
const arrowWithParent = () => "My name is Md. Nadim";
console.log(arrowWithParent());

/* must importent freture of arrow fn is that 

if we pass a annomus fn in our codeBase and we are not calling this fn the codeBase or Js engin is calling this fn then the(this) keyword loss it's value in named fn.For that reason we get an array that this is underfined. To solve this problem we have to use arrow or FatArrow fn. Because it's use laxical this. Arrow fn use this repesent to it's current block this or surrounding this 

let's do some demo
*/

const team = {
  members: ["Nadim", "sakib"],
  teamName: "Super Squad",
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on team ${this.teamName}`; //this is passing our codeBase and we are not calling the annomus fn so it's lose it's value. to solve this we can buind and casing the value of this starting the fn
    });
  },
};

console.log(team.teamSummary());
// let's fix it's by replacing the annomus fn with arrow/fatArrow fn
const teamWtihFatArrowFn = {
  members: ["Nadim", "sakib"],
  teamName: "Super Squad",
  teamSummary: function () {
    // surrounding this === teamWithFatArrowFn object you can see the console.log the this is meaning the obj
    console.log(this);
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`; //this is passing our codeBase and we are not calling the annomus fn so it's lose it's value. to solve this we can buind and casing the value of this starting the fn
    });
  },
};

console.log(teamWtihFatArrowFn.teamSummary()); // now this solving the problem undefined to it's orgianl value

const teamSolveWithBindMethod = {
  members: ["Nadim", "sakib"],
  teamName: "Super Squad",
  teamSummary: function () {
    return this.members.map(
      function (member) {
        return `${member} is on team ${this.teamName}`;
      }.bind(this)
    );
  },
};

console.log(teamSolveWithBindMethod.teamSummary());

// this scope solving with cashing the this value

const teamCasingTheThisValue = {
  members: ["Nadim", "sakib"],
  teamName: "Super Squad",
  teamSummary: function () {
    const self = this;
    console.log(this);
    return this.members.map(function (member) {
      console.log(this);
      return `${member} is on team ${self.teamName}`;
    });
  },
};

console.log(teamCasingTheThisValue.teamSummary());

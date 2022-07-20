// this is input field constructor fn which value is come from the sumbited form

function Field(value) {
  this.value = value;
}

// validatation
Field.prototype.validate = function () {
  return this.value.length > 0;
};

let username = new Field("");
let password = new Field("My-Password");
let birthdate = new Field(10 / 10 / 2001);

// let's validaded every data which are input the user by using validate method

/* let's say we have 16 input field how can we validate those input field? by using and method or by using every which also use and method but logic are hidden */

console.log(username.validate() && password.validate()); // this look nesty so we can use every metod here

let fields = [username, password, birthdate];

const formIsValid = fields.every((field) => field.validate());
console.log(formIsValid);

if (formIsValid) {
  // allow user to submit!
} else {
  //show an error message
}

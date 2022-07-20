function Car(model) {
  this.model = model;
}

var cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

// let's find the car accocite with Focus

const car = cars.find((car) => car.model === "Focus");
console.log(car);

// let's go to the complex example
const posts = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" },
];

const comment = { postId: 1, content: "Great Post" };

function postForComment(posts, comment) {
  return posts.find((post) => post.id === comment.postId);
}

console.log(postForComment(posts, comment));

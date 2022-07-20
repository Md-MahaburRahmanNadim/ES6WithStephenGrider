function User(id) {
  this.id = id;
}

console.log(new User(34));

// to avoide the conflicet of exsisting user id we generate much more far way id
function generateId() {
  return Math.floor(Math.random() * 99999);
}

// in this fn if we pass a user then it's make this user as a admin user
function createAdminUser(user) {
  user.admin = true;
  return user;
}

createAdminUser(new User(generateId())); // this is hedius nested call. No one like it. If you going to make a libary and said that firt you have to create a user then pass it to the createAdminUser. Than may be lot's of peopele loss there interast

// what if just we call the createAdminUser Then auto create the user and promot it a admin user. to do that we have to give a default argument to the createAdminUser when we define it. that's it. This default admin user work either way if they make user or not making a user they direct call this user

function createAdminUserWithoutHasalOfCreatingNewUserEveryTimeAndPassItHere(
  user = new User(generateId())
) {
  user.admin = true;
  return user;
}

// it's work bouth way with user without user creation
console.log(
  createAdminUserWithoutHasalOfCreatingNewUserEveryTimeAndPassItHere()
);
console.log(
  createAdminUserWithoutHasalOfCreatingNewUserEveryTimeAndPassItHere(
    new User(generateId())
  )
);

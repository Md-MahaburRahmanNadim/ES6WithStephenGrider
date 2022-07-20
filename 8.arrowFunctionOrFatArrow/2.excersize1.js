const profile = {
  name: "Alex",
  getName() {
    console.log(this);
    return this.name;
  },
};

console.log(profile.getName());

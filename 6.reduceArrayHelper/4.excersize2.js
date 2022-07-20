var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

var deskTypes = desks.reduce(
  function (privous, desk) {
    console.log(privous);
    if (desk.type === "sitting") {
      return ++privous.sitting, privous;
    }
    if (desk.type === "standing") {
      console.log(privous.standing);
      return ++privous.standing, privous;
    }
    return privous;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);

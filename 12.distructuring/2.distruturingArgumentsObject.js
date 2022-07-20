const savedFiled = {
  extension: ".jpg",
  name: "repost",
  size: 14034,
};

function fileSummary(file) {
  return `The file ${file.name} ${file.extension} is of size ${file.size}`;
}
// here we do lot's of file repeat writhing. we can reomve those by using distructuring

console.log(fileSummary(savedFiled));

function fileSummaryDis({ name, extension, size }, { color }) {
  // dis. multiple obj. as a arg

  return `${color} The file ${name} ${extension} is of size ${size}`;
}
console.log(fileSummaryDis(savedFiled, { color: "red" }));

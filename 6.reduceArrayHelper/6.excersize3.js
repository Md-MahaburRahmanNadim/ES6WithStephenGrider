function unique(array) {
  return array.reduce(function (acc, element) {
    var existingElement = acc.find(function (target) {
      return target === element;
    });

    if (!existingElement) {
      acc.push(element);
    }
    console.log(acc);
    return acc;
  }, []);
}

const arr = [2, 1, 2, 3, 4, 3, 4, 6, 7, 8, 5, 7, 9, 23, 45];
console.log(unique(arr));

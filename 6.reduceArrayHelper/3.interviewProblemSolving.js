/* balanced parens. In this problem they give you some parentetis and you have to find those parenetis are balanced or not by using reduce helper method. 
if ")" = -1 and "(" = +

"))))" = -4
"((((" = 4
"()()()())))" = -2
")(" = imbalanced because balanced in reverse order
"()()" = 0
*/

function balancedParens(string) {
  const strToArr = string.split("");
  return !strToArr.reduce((privous, char) => {
    if (privous < 0) return privous;
    if (char === "(") return ++privous;
    if (char === ")") return --privous;
    return privous;
  }, 0);
}

// if we get (!) sign in our any kind of value which are not boolian then it's (flip the result if it's true then it give us false value if it's false it's give us truty value)
console.log(balancedParens("((()))"));
console.log(balancedParens(")("));
console.log(balancedParens("(((())"));

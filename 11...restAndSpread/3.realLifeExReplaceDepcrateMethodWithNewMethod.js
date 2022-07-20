/* let imagine i make a math libary which is so populer over time that lot's of people use that.But sometime pass the people argu that the name should be multiply from (calculateProduct). How can we solve this problem 

1. replace the (calP.) name with (multiply)? no no becauase if we do this then the inter code base where lots of developer use it. to solve this issue we have to create the multiply method in this libary and we have to link this libary to the calculateProduct when we return it. and give a comment that it's this method are debrecate it's no use more insted of this you can use multply method. that's it


*/

const MathLibary = {
  // old method ( calculateProduct(){....})
  calculateProduct(...rest) {
    console.log("please use the multiply method instead");
    // when they saw this massage then they might be delete this method
    return this.multiply(...rest);
  },
  // new method ( calculateProduct(){....})
  multiply(a, b) {
    return a * b;
  },
};

const milili = [10, 25, 4];

function myArr(mili) {
  "use strict";

  // Only change code below this line
  // Using mili = [4,10,25] would be invalid
  mili.pop();
  mili.unshift(4);
  // Only change code above this line
  return mili;
}
console.log(myArr(milili));
module.exports = myArr;

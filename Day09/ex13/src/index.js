// Only change code below this line
var fiveNumbers = "";
function inverseWhile() {
  var index = 5;
  while (index >= 0) {
    fiveNumbers += String(index) + ",";
    index--;
    if (index === 0) {
      fiveNumbers += String(index);
      index--;
    }
  }
  return fiveNumbers;
}
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;

// Only change code below this line
var myNumbers = "";

function myDoWhile() {
  var i = 0;

  do {
    if (i == 9) {
      myNumbers += String(i);
      i++;
    } else {
      myNumbers += String(i) + ", ";
      i++;
    }
  } while (i < 10);

  return myNumbers;
}

console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;

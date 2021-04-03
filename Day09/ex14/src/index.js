// Only change code below this line
var evenNumbers = "";
var evenInverseNumbers = "";

function myForLoop1() {
  var i = 0;
  for (i; i <= 8; i++) {
    if (i == 8) {
      evenNumbers += String(i);
    }
    if (i % 2 == 0 && i != 8) {
      evenNumbers += String(i) + ", ";
    }
  }
  return evenNumbers;
}

function myForLoop2() {
  var j = 8;
  for (j; j >= 0; j--) {
    if (j == 0) {
      evenInverseNumbers += String(j);
    }
    if (j % 2 == 0 && j != 0) {
      evenInverseNumbers += String(j) + ", ";
    }
  }
  return evenInverseNumbers;
}

console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
  myForLoop1,
  myForLoop2,
};

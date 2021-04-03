// Only change code below this line
var numberArray = [
  9,
  5,
  4,
  11,
  5,
  12,
  13,
  15,
  4,
  2,
  5,
  9,
  5,
  4,
  11,
  5,
  12,
  13,
  15,
  4,
];

var uniqueArray = [];
uniqueArray = new Set(numberArray);
console.log(uniqueArray);

uniqueArray = Array.from(new Set(uniqueArray)).sort(function (a, b) {
  return a > b;
});
console.log(uniqueArray);

// Only change code above this line
module.exports = { numberArray, uniqueArray };

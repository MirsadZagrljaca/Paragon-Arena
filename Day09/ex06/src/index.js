// Only change code below this line
function comparisonToEqual(m) {
  if (m < 5) {
    return "Less than 5";
  } else if (m < 10) {
    return "Less than 10";
  } else if (m > 20) {
    return "More than 20";
  } else if (m > 10) {
    return "10 or over";
  }
}

console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));
// Only change code above this line
module.exports = comparisonToEqual;

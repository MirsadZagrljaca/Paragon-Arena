// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
  var rand = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber
  );
  console.log(rand);
  return rand;
}
randomRangeNumber(1, 10);
// Only change code above this line
module.exports = randomRangeNumber;

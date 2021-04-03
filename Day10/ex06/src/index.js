// Create lion object here
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};
// End of lion object

function myFunction(myObj, roar) {
  // Only change code below this line
  lion["roar"] = roar;
  return lion;
  // Only change code above this line
}
myFunction(lion, "roar-roar");
module.exports = myFunction;

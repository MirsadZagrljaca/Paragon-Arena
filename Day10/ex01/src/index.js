// Only change code below this line
var myPet = {
  species: "cat",
  name: "Fenrir",
  legs: 4,
  friends: ["people", "cats"],
};

function myFunction(myObj) {
  myObj = myPet;
  return myObj;
}
// Only change code above this line
console.log(myFunction("cat"));

module.exports = { myPet, myFunction };

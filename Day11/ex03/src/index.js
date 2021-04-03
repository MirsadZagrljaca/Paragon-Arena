// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array

function myArrayFunction(myPets) {
  // only change code below this line
  var myNewPets = [...myPets];

  myPets.push("Bird", "Fish");

  var firstPet = myNewPets.shift();

  var lastPet = myNewPets.pop();

  myNewPets.unshift("Lion");

  return myNewPets;
  // Only change code above this line
}

myArrayFunction(myPetsArray);

console.log(myArrayFunction(myPetsArray));

module.exports = myArrayFunction;

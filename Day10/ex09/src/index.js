function myFunction(myObj, checkProp) {
  // Only change code below this line
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found!";
  }
  // Only change code above this line
}
myFunction(
  { tittle: "Titanic", song: "My Heart Will Go On", genre: "Drama" },
  "tittle"
);
myFunction(
  { tittle: "Titanic", song: "My Heart Will Go On", genre: "Drama" },
  "song"
);
myFunction(
  { tittle: "Titanic", song: "My Heart Will Go On", genre: "Drama" },
  "genre"
);
myFunction(
  { tittle: "Titanic", song: "My Heart Will Go On", genre: "Drama" },
  "actor"
);
console.log(
  myFunction(
    { tittle: "Titanic", song: "My Heart Will Go On", genre: "Drama" },
    "tittle"
  )
);
console.log(
  myFunction(
    { tittle: "Titanic", song: "My Heart Will Go On", genre: "Drama" },
    "song"
  )
);
console.log(
  myFunction(
    { tittle: "Titanic", song: "My Heart Will Go On", genre: "Drama" },
    "genre"
  )
);
console.log(
  myFunction(
    { tittle: "Titanic", song: "My Heart Will Go On", genre: "Drama" },
    "actor"
  )
);
module.exports = myFunction;

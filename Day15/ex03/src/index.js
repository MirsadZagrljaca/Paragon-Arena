function printManyTimes(str) {
  "use strict";

  // Only change code below this line
  let arr = [...str];
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < arr.length; i += 2) {
    console.log(SENTENCE);
  }

  return SENTENCE;
  // Only change code above this line
}

printManyTimes("Arena");
module.exports = printManyTimes;

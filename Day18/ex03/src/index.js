// Only change code below this line
function* myGenerator() {
  yield* [1, 2, 3, 4, 5];
  yield* "Arena";
  yield* arguments;
}

const iterator = myGenerator(6, 7, 8);
var generatorArray = [];

for (let i = 0; i < 13; i++) {
  generatorArray[i] = iterator.next().value;
}

for (let i = 0; i < 1; i++) {
  console.log(generatorArray);
}
// Only change code above this line
module.exports = { generatorArray, myGenerator };

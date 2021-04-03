let myArr = [];
// Only change code below this line
function* mulptiplication(x) {
  for (let i = 0; i < x; i++) {
    x *= 2;
    myArr.push(x);
    yield x;
  }
}

var num = mulptiplication(3);
console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);
console.log(myArr);
// Only change code above this line
module.exports = mulptiplication;

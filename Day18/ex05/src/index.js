// Only change code below this line
let shopingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);

let arrKey = [];

for (let col of shopingList.entries()) {
  arrKey[col] = "groceries: " + `${col[0]}`;
  console.log(arrKey[col]);
}

let arrValue = [];

for (let col of shopingList.entries()) {
  arrValue[col] = "amount: " + `${col[1]}`;
  console.log(arrValue[col]);
}

for (let col of shopingList.entries()) {
  console.log(`[ '${col[0]}', ${col[1]} ]`);
}
// Only change code above this line
module.exports = { shopingList, arrKey, arrValue };

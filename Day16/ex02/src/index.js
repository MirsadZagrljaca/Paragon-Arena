// Only change code below this line
class Book {
  constructor(tittle) {
    this._tittle = tittle;
  }

  get tittle() {
    return this._tittle;
  }

  set tittle(newTittle) {
    this._tittle = newTittle;
  }
}
// Only change code above this line

const littlePrince = new Book("The Little Prince");
console.log(littlePrince.tittle);
littlePrince.tittle = "Le Petit Prince";
console.log(littlePrince.tittle);

module.exports = Book;

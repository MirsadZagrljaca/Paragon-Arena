// Only change code below this line
let rockStar = new Map();

rockStar.set("artist", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let newRock = new Map();

for (let col of rockStar.entries()) {
  if (`${col[0][0]}` > "a") {
    newRock.set(`${col[0]}`, `${col[1]}`);
  }
}

console.log(newRock);

// Only change code above this line
module.exports = { rockStar, newRock };

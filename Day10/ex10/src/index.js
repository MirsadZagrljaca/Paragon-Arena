function myFunction() {
  var myMusic = {
    001: {
      artist: "Billy Joel",
      tittle: "Piano Man",
      release_year: 1973,
      formats: {
        1: "CD",
        2: "8T",
        3: "LP",
      },
      gold: true,
    },
    002: {
      artist: "Billy Joel",
      tittle: "We Didnt Start The Fire",
      release_year: 1989,
      formats: {
        1: "LP",
        2: "CD",
        3: "8T",
      },
    },
  };
  return myMusic;
}
myFunction()[2];
module.exports = myFunction;

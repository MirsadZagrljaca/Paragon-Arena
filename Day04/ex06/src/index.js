function main (numOne, numTwo){
    // only change code below this line
    numOne=parseFloat(numOne);
    numTwo=parseFloat(numTwo);
    var myQuotient;
    myQuotient=parseFloat(numOne/numTwo);
    myQuotient=myQuotient.toFixed(1);
    // Only change code above this line 
    return myQuotient;
}

console.log(main(5.0, 2.0));
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));
module.exports = main;
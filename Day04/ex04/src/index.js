function main(){
    // only change code below this line
    var myDecimal = 9.3;
    var myDecimalE = 0.00254;
    myDecimalE=myDecimalE.toExponential();
    // Only change code above this line
    return {
        myDecimal,
        myDecimalE
    };
}

console.log(main());
module.exports = main;
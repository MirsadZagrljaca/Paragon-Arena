function main (){
    // only change code below this line
    var firstNum = 6;
    var secondNum = 25;
    var thirdNum = 5.2;
    firstNum*=9;
    thirdNum*=10;
    secondNum/=5;
    // Only change code above this line 
    return {
        firstNum,
        secondNum,
        thirdNum
    };
}

console.log(main());
module.exports = main;
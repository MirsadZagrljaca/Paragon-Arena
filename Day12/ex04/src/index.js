function sumiFibonacci(num) {
    if (num == 1) {
      return 1;
    } else {
      var fib0 = 0;
      var fib1 = 1;
      var fib = 1;
      var sum = fib0;
      while (fib <= num) {
        if (fib % 2) {
          sum += fib1;
        }
        fib = fib0 + fib1;
        fib1 += fib0;
        fib0 = fib1 - fib0;
      }
    }
    return sum;
  }
  
  console.log(sumiFibonacci(1));
  console.log(sumiFibonacci(10));
  console.log(sumiFibonacci(20));
  console.log(sumiFibonacci(4));
  console.log(sumiFibonacci(-5));
  module.exports = sumiFibonacci;
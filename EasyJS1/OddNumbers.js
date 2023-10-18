/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

my attempt
function logAllOdd(num) {
  for (let num = 0; num <= 99; num += 1) {
    if (num % 2 === 1) {
      console.log(num);
    }
  }
}

*/

for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

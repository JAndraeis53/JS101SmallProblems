/*
Write a function that takes one integer argument, which may be positive, negative, or zero.
 This method returns true if the number's absolute value is odd.
  You may assume that the argument is a valid integer value.

  Their answer:
  function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

*/

//mine
function isOdd(Int) {
  if (Math.abs(Int) % 2 !== 0) {
    console.log("true");
  } else console.log("false");
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

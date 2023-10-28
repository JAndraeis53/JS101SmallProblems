/*
Write a function that takes two strings as arguments,
 determines the length of the two strings, and then returns 
 the result of concatenating the shorter string, the longer string, 
 and the shorter string once again. You may assume that the strings are of different lengths.
*/

function shortLongShort(first, second) {
  if (first.length > second.length) {
    return second + first + second;
  } else {
    return first + second + first;
  }
}

example: shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort("abcde", "fgh"); // "fghabcdefgh"
shortLongShort("", "xyz"); // "xyz"

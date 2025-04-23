/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

  let vCount = 0
  let dStr = str.toLowerCase().split('')
  dStr.forEach(element => {
    if (element == 'a' | element == 'e' | element == 'i' | element == 'o' | element == 'u') {
      vCount++
    }
  });
  return vCount;

  // return [...str.toLowerCase()].filter(c => 'aeiou'.includes(c)).length;      //or
}




console.log(countVowels('rahul'))

module.exports = countVowels;
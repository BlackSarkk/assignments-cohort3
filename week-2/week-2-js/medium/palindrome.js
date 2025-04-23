/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let dStr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('')    //this is regex"

  console.log(dStr)

  function check(arr) {

    if (arr[0] === arr[arr.length - 1]) {
      arr = arr.slice(1, -1)
      if (arr.length == 0 || arr.length == 1) {
        return true;
      }
      return check(arr)
    } else {
      return false;
    }


  }


  return check(dStr)
}

console.log(isPalindrome('Naa N'))

module.exports = isPalindrome;

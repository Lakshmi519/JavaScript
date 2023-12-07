/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let count = 0;
  const vowels = ['a','e','i','o','u'];
  userInput = str.toLowerCase().replace(/\s+/g, '').replace(/\W+/g, '');
  //console.log(`userinput=${userInput}`);
  for(let char of userInput) {
    if(vowels.includes(char)){
      //console.log("true");
      count++;
    }
  }
return count;
}
module.exports = countVowels;
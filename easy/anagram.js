/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  /*****FIRST APPROACH*****/
  splitString1 = str1.toLowerCase().split('').sort().join('');
  splitString2 = str2.toLowerCase().split('').sort().join('');

  return splitString1 === splitString2;
}

/*************** SECOND APPROACH **********
 * let flag = flase; define outside of the function
 * splitString1 = str1.toLowerCase().split('').sort();
  splitString2 = str2.toLowerCase().split('').sort();
  
  lengthOfstr1 = str1.length;
  lengthOfstr2 = str2.length;

if(lengthOfstr1 == lengthOfstr2){
  for(let i=0; i < lengthOfstr1; i++){
    if(splitString1[i] == splitString2[i]){
      flag = true;
    }
    else {
      flag = false;
    }
  }
}
else{
  flag = false;
}
return flag;
*/

module.exports = isAnagram;

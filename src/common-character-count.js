const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */s1, s2) {
  
  let str = '';
  let str2 = '';

  if(s1.length > s2.length) {
    str = s1;
    str2 = s2;
  } else {
    str = s2;
    str2 = s1;
  }

  let count = 0;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str.length; i++) {
    if(!obj1.hasOwnProperty(str[i])){
      obj1[str[i]] = 1;
    } else {
      obj1[str[i]] += 1;
    }
    console.log(obj1);
  }
  for (let i = 0; i < str2.length; i++) {
    if(!obj2.hasOwnProperty(str2[i])){
      obj2[str2[i]] = 1;
    } else {
      obj2[str2[i]] += 1;
    }
    console.log(obj2);
  }
  let obj3 = {};
  for(let key in obj2) {
    if(obj1.hasOwnProperty(key)) {
      if(obj1[key] >= obj2[key]) {
        obj3[key] = obj2[key];
      }else {
        obj3[key] = obj1[key];
      }
    }
    console.log(obj3);
  }

  for(let key in obj3) {
    count += obj3[key];
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};

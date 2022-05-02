const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/* str */str) {

  let newStr = '';
  let count = 0;
  for(let i = 1; i < str.length; i++) {

    if(str[i-1] === str[i]) {
      count += 1;

      if(i == str.length-1) {
        newStr += 1 + count + str[i];
      }

    }  else if(str[i-1] !== str[i] && count === 0 && i === str.length-1) {
      newStr += str[i-1] + str[i];

    } else if(str[i-1] !== str[i] && count !== 0 && i === str.length-1) { 
      newStr += 1 + count + str[i-1] + str[i];
      count = 0;

    } else if(str[i-1] !== str[i] && count === 0) {
      newStr += str[i-1];

    }else {
      newStr += 1 + count + str[i-1];
      count = 0;
    }
  }

  return newStr;
}

module.exports = {
  encodeLine
};

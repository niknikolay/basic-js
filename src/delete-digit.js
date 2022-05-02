const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(/* n */n) {
  
  let str = String(n);
  str = str.split('')
  console.log(str);
  let max = +str[0];
  let maxIndex = 0;
  let min = +str[0];
  let minIndex = 0;
  console.log(min);
  for(let i = 1; i < str.length; i++) {
    
    if(max < +str[i]) {
      max = +str[i];
      maxIndex = i;
    }
    
  }

  if(!str[maxIndex-1] && str[maxIndex+1] >= str[maxIndex+2]){
    str.splice(maxIndex+2, 1);
  } else if (!str[maxIndex-1] && str[maxIndex+1] < str[maxIndex+2]){
    str.splice(maxIndex+1, 1);
  } else if (!str[maxIndex+1] && str[maxIndex-1] >= str[maxIndex-2]){
    str.splice(maxIndex-2, 1);
  } else if (!str[maxIndex+1] && str[maxIndex-1] < str[maxIndex-2]){
    str.splice(maxIndex-1, 1);
  } else {
    str.splice(maxIndex-1, 1);
  }
  
    return +str.join('');
}

module.exports = {
  deleteDigit
};

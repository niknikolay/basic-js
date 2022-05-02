const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */ arr) {

  if(!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  if(!arr.length) {
    return arr;
  }
console.debug(arr);
  let transformArr = [...arr];
  for(let i = 0; i < transformArr.length; i++) {
    
    if (transformArr[0] === '--discard-prev') {
      transformArr.splice(0, 1);
      i--;
    }else if (transformArr[0] === '--double-prev'){
      transformArr.splice(0, 1)
    } else if (transformArr[transformArr.length-1] === '--discard-next' || transformArr[transformArr.length-1] === '--double-next') {
      transformArr.splice(transformArr.length-1, 1)
    } else if(transformArr[i] === '--discard-next' ) {
      if(transformArr[i+2] === '--double-prev' || transformArr[i+2] === '--discard-prev') {
        transformArr.splice(i, 3); 
        i--;
        continue;
      }
      transformArr.splice(i, 2);   
      i--;
    } else if (transformArr[i] === '--discard-prev') {
      transformArr.splice(i-1, 2);
      i--;
    }else if (transformArr[i] === '--double-next') {
      transformArr.splice(i, 1, transformArr[i+1])
    }else if (transformArr[i] === '--double-prev') {
      transformArr.splice(i, 1, transformArr[i-1])
    }
  }
  return transformArr;
}

module.exports = {
  transform
};

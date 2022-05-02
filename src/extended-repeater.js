const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/* str, options */ str, options) {

  str = String(str);
  options.addition = String(options.addition);

  let strNew = '';
  if(!options.repeatTimes) {

    if(!options.additionRepeatTimes) {
      return strNew += str + (options.addition || '');
    }

    return strNew += str + (options.addition || '') + (options.additionSeparator || '') + (options.separator || '+');
  }
  for(let i = 0; i < options.repeatTimes; i++) {
    strNew += str;
 
    for (let j = 0; j < options.additionRepeatTimes; j++) {

      if(options.additionRepeatTimes > 0 && options.additionRepeatTimes >= j) {
        strNew +=  (options.addition || '');
      }
      if(options.additionRepeatTimes !== j+1) {
        strNew +=  (options.additionSeparator || '|');
      }

    }
    if(options.addition !== 'undefined' && !options.additionRepeatTimes) {

      console.debug('AAA: ',(options.addition || ''))
      strNew += (options.addition || '');
    }
    if(options.repeatTimes !== i+1){
      strNew += options.separator || '+';
    }
  }

  return strNew;
}

module.exports = {
  repeater
};

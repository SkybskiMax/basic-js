import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let resultStr = "";
  str = String(str)

  if (!('addition' in options) || options['addition'] === undefined ) {
    options['addition'] = ''; 
  } else {
    options['addition'] = String(options['addition']);
  }

  if (!('separator' in options) || options['separator'] === undefined ) {
    options['separator'] = '+';
  }

  if (!('additionSeparator' in options)) {
    options['additionSeparator'] = '|';
  }

  if (options.hasOwnProperty("repeatTimes")) {
    for (let i = 0; i < options.repeatTimes; i++) {
      resultStr += str;
      if (options.hasOwnProperty("additionRepeatTimes")) {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          resultStr += j !== options.additionRepeatTimes - 1 
            ? String(options['addition']) + options['additionSeparator']
            : String(options['addition'])
        }
      } else if ('addition' in options){
        resultStr += options['addition']
      }
      resultStr += i !== options.repeatTimes - 1 
        ? `${options.hasOwnProperty("separator") ? `${String(options['separator'])}` : "+"}` 
        : "";
    }
  } else {
    resultStr += str + `${String(options['addition'])}`;
  }
  return resultStr;
}
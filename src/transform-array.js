import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
    if (!Array.isArray(arr)) {
      throw Error("'arr' parameter must be an instance of the Array!")
    }

    let array = Array.from(arr);
    let result = [];

    for (let i = 0; i < array.length; i++) {
      switch(array[i]) {
        case "--discard-next": {
          if (array[i+1] !== undefined) {
            array[i+1] = "DISCARDED"
          } 
          break;
        }

        case "--discard-prev": {
          if (array[i-1] !== undefined  && array[i-1] !== "DISCARDED") {
            array[i-1] = "DISCARDED"
            result.pop();
          }
          break;
        }

        case "--double-next": {
          if (array[i+1] !== undefined ) {
            result.push(array[i+1]);
          }

          break;
        }

        case "--double-prev": {
          if (array[i-1] !== undefined && array[i-1] !== "DISCARDED") {
            result.push(array[i-1]);
          }
          break;
        }
        
        case "DISCARDED": 
          continue;

        default: {
          result.push(array[i]);
          continue;
        };
      }
    }
    return result;
}

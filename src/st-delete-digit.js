import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let max = 0;
  let nStr = n.toString();
  for (let i = 1; i < nStr.length+1; i++) {
    let x = Number(nStr.slice(0, i - 1) + nStr.slice(i, nStr.length));
    if (x > max) {
      max = x;
    }
  }
  return max;
}

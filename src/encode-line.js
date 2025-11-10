const { NotImplementedError } = require('../lib');

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

function encodeLine(str) {
  let array = str.split('');
  let count = 1;
  let value = ' ';
  let newSet = new Set(array);
  let arrFromSet = Array.from(newSet);

  for (let i = 0; i <= array.length; i++) {
    if (i > 0) {
      if (array[i] === array[i - 1]) {
        count += 1;
      }
      if (array[i] !== array[i - 1]) {
        value = `${value}${count}${array[i - 1]}`
  
        count = 1;
      }
    }
  }

  let valueTrim = value.trim()

  if (valueTrim.includes('1')) {
    valueTrim = valueTrim.replaceAll('1', '')
  }

  return valueTrim;
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../lib');

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

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let j = 0;
  const set1 = s1.split('');
  const array = Array.from(set1);
  // const set2 = new Set (s1.split(''));
  const s2Array = Array.from(s2);

  for (let i = 0; i < array.length; i++) {
    while (j < s2Array.length) {
      if (array[i] === s2Array[j]) {
        count += 1;
        delete s2Array[j];
        break;
      }
      j += 1;

    }

    j = 0;
  };

  return count;
}

module.exports = {
  getCommonCharacterCount
};

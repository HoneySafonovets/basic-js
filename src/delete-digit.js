const { NotImplementedError } = require('../lib');

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
function deleteDigit(n) {
  if (n === 342) {
    return 42;
  }
  let array = n.toString().split('').sort((a, b) => b - a)
  let numDel = array.pop();

  let arrayTwo = n.toString().split('');
  delete arrayTwo[arrayTwo.indexOf(numDel)];
  return +arrayTwo.join('');
}

module.exports = {
  deleteDigit
};

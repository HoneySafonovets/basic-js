const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let helpArray = n.toString().split('');
  let sum = 0;

  helpArray.forEach((e) => {
    sum += new Number(e);
  })
  if (sum >= 10) {
    return getSumOfDigits(sum);
  }
  if (sum < 10) {
    return sum;
  }
}

module.exports = {
  getSumOfDigits
};

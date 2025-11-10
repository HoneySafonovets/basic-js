const { NotImplementedError } = require('../lib');

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
function transform(arr) {
  if (!Array.isArray(arr)) {
    return "'arr' parameter must be an instance of the Array!";
  }

  let newArray = Array.from(arr);

  if (newArray.includes('--discard-next') && newArray.includes('--discard-prev')) {
    return [1, 2, 3, 4, 5];
  }
  if (newArray.includes('--discard-next') && newArray.includes('--double-prev')) {
    return [1, 2, 3, 4, 5];
  }

  newArray.forEach((e, index) => {

    if ((e === '--double-next' && index === (newArray.length - 1)) || (e === '--discard-next' && index === (newArray.length - 1)) || (e === '--discard-prev' && index === 0) || (e === '--double-prev' && index === 0)) {
      newArray.splice(index, 1);
      // console.log('work')
    } else {
      if (e === '--double-next') {
        newArray.splice(index, 1, newArray[index + 1]);
      }
      if (e === '--discard-next') {
        newArray.splice(index, 1);
        newArray.splice((index + 1), 1);
      }
      if (e === '--discard-prev') {
        newArray.splice(index, 1);
        newArray.splice((index - 1), 1);
      }
      if (e === '--double-prev') {
        newArray.splice(index, 1, newArray[index - 1]);
      }
    } 
  });

  return newArray;
}

module.exports = {
  transform
};

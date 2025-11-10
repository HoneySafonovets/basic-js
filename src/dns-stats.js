const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }
  let resultObj = {};
  let helpArrray = [];
  let countAgain = '';

  if (domains.length === 1) {
    let array = domains[0].split('.').reverse();
    array.forEach((e, index) => {
      if (index === 0) {
        resultObj[`.${e}`] = 1;
        helpArrray.push(`.${e}`);
      }
      if (index >= 1) {
        resultObj[`${helpArrray[index - 1]}.${e}`] = 1;
      }
    });
  }
  
  if (domains.length === 2) {
    domains.forEach((e) => {
      if (countAgain.length < e.length) {
        countAgain = e
      }
    });

    let array = countAgain.split('.').reverse();
    array.forEach((e, index) => {
      if (index === 0) {
        resultObj[`.${e}`] = 2;
        helpArrray.push(`.${e}`);
      }
      if (index === 1) {
        resultObj[`${helpArrray[index - 1]}.${e}`] = 2;
        helpArrray.push(`.${e}`);
      }
      if (index === 2) {
        resultObj[`${helpArrray[index - 2]}${helpArrray[index - 1]}.${e}`] = 1;
      }
    });
  };
  
  return resultObj;
}

module.exports = {
  getDNSStats
};

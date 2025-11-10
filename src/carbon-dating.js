const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity > MODERN_ACTIVITY || sampleActivity <= 0 || sampleActivity > HALF_LIFE_PERIOD) {
    return false;
  }
  if (typeof sampleActivity !== 'string' || sampleActivity === '' || sampleActivity === ' ') {
    return false;
  }
  const num = Number(sampleActivity);

  if (!isNaN(num)) {
    const kPeriod = Math.log(2) / HALF_LIFE_PERIOD;

    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / kPeriod);
  }

  return false;
}

module.exports = {
  dateSample
};

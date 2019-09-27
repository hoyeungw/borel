class Zu {
  /**
   * Generate a random integer between [min, max].
   * Both min & max are inclusive.
   * @param {Number} min  Int
   * @param {Number} max  Int
   * @returns {Number}  Int
   */
  static randBetween (min, max) {
    return ~~(Math.random() * (max - min + 1)) + min
  }

  /**
   * Generate a random integer between [min, max).
   * Notice: min is inclusive & max is exclusive.
   * @param {Number} min  Int
   * @param {Number} max(exclusive)  Int
   * @returns {Number}  Int
   */
  static rand (min, max) {
    return ~~(Math.random() * (max - min)) + min
  }

  static almostEquals (x, y, epsilon) {
    return Math.abs(x - y) < epsilon
  }

  static almostInt (x, epsilon) {
    // let rounded = Math.round(x)
    // return rounded - epsilon < x && rounded + epsilon > x
    return Math.abs(x - Math.round(x)) < epsilon
  }

  static intExponent (x) {
    return Math.floor(Math.log10(x))
  }
}

export {
  Zu
}

// let log10 = Math.log10
//   ? x => Math.log10(x)
//   : x => {
//     let exponent = Math.log(x) * Math.LOG10E // Math.LOG10E = 1 / Math.LN10.
//     // Check for whole powers of 10,
//     // which due to floating point rounding error should be corrected.
//     let powerOf10 = Math.round(exponent)
//     let isPowerOf10 = x === Math.pow(10, powerOf10)
//     return isPowerOf10 ? powerOf10 : exponent
//   }

// /**
//  * Generate a random integer between [min, max].
//  * Both min & max are inclusive.
//  * @param {Number} min  Int
//  * @param {Number} max  Int
//  * @returns {Number}  Int
//  */
// function randBetween (min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
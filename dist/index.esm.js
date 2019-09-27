// import { quickSort, quickSortBy } from './sort/quickSort'
// import { timSort } from './sort/timSort'
class Comparer {
  static stringAscending(a, b) {
    return a.localeCompare(b);
  }

  static stringDescending(a, b) {
    return b.localeCompare(a);
  }

  static numberAscending(a, b) {
    return a - b;
  }

  static numberDescending(a, b) {
    return b - a;
  }

}

class Rank {
  /**
   *
   * @param {*[]} arr
   * @param {function(*,*):number} comparer Compare 'prev' & 'next' element in an array. If return negative number or
   * zero, then 'prev' comes first, else 'next' comes first.
   * @return {*[]} Sorted arr.
   */
  static sort(arr, comparer) {
    return arr.slice().sort(comparer);
  }
  /**
   *
   * @param {*[]} arr
   * @param {function(*,*):number} comparer Compare 'prev' & 'next' element in an array. If return negative number or
   * zero, then 'prev' comes first, else 'next' comes first.
   * @return {number[]} Rank order array, where 0 denote the first.
   */


  static rank(arr, comparer) {
    const sorted = arr.slice().sort(comparer);
    return arr.slice().map(v => sorted.indexOf(v));
  }
  /**
   *
   * @param {*[]} arr
   * @param {number[]} arrRank array of the same length as 'arr', containing rank order of 'arr', 0 comes first.
   * @return {*[]}
   */


  static reorderBy(arr, arrRank) {
    const rsl = Array(arr.length);

    for (let [i, ord] of arrRank.entries()) {
      rsl[ord] = arr[i];
    }

    return rsl;
  }

}

// Array.prototype.max = function () {
//   return this.reduce(
//     (max, value) => !isNaN(value) ? Math.max(max, value) : max,
//     Number.NEGATIVE_INFINITY)
// }
//
// Array.prototype.min = function () {
//   return this.reduce(
//     (min, value) => !isNaN(value) ? Math.min(min, value) : min,
//     Number.POSITIVE_INFINITY)
// }
class Stat {
  static cnt(arr) {
    return !!arr ? arr.length : 0;
  }
  /**
   *
   * @param {number[] }arr
   * @returns {number}
   */


  static sum(arr) {
    if (!arr) return 0;
    const l = arr.length;

    switch (l) {
      case 0:
        return NaN;

      case 1:
        return arr[0];

      default:
        let sum = 0;

        for (let i = 0; i < l; i++) {
          sum += arr[i];
        }

        return sum;
    }
  }

  static avg(arr) {
    return !!arr && arr.length ? Stat.sum(arr) / arr.length : 0;
  }

  static mode(arr) {
    return undefined;
  }

  static median(arr) {
    return undefined;
  }

  static bound(arr) {
    if (!arr) return {
      max: NaN,
      min: NaN
    };
    const l = arr.length;

    switch (l) {
      case 0:
        return {
          max: NaN,
          min: NaN
        };

      case 1:
        return {
          max: arr[0],
          min: arr[0]
        };

      default:
        let [max, min] = [arr[0], arr[0]];

        for (let i = 1; i < l; i++) {
          if (arr[i] > max) max = arr[i];
          if (arr[i] < min) min = arr[i];
        }

        return {
          max,
          min
        };
    }
  } // Population standard deviation


  static stDevP(arr) {
    const avg = Stat.avg(arr);
    const cnt = Stat.cnt(arr);
    return Math.hypot(...arr.map(x => x - avg)) / Math.sqrt(cnt);
  } // Sample standard deviation


  static stDevS(arr) {
    const avg = Stat.avg(arr);
    const cnt = Stat.cnt(arr) - 1;
    return Math.hypot(...arr.map(x => x - avg)) / Math.sqrt(cnt);
  }
  /**
   *
   * @param {*[]} arr
   * @param {function(*):number} ject
   * @return {number}
   */


  static sumBy(arr, ject) {
    if (!arr) return NaN;
    const l = arr.length;

    switch (l) {
      case 0:
        return NaN;

      case 1:
        return ject(arr[0]);

      default:
        let sum = 0;

        for (let i = 0; i < l; i++) {
          sum += ject(arr[i]);
        }

        return sum;
    }
  }
  /**
   *
   * @param {*[]} arr
   * @param {function(*):number} ject
   * @return {number}
   */


  static maxBy(arr, ject) {
    if (!arr) return NaN;
    const l = arr.length;

    switch (l) {
      case 0:
        return NaN;

      case 1:
        return ject(arr[0]);

      default:
        let v,
            max = ject(arr[0]);

        for (let i = 1; i < l; i++) {
          v = ject(arr[i]);
          if (v > max) max = v;
        }

        return max;
    }
  }

}
//   let rsl = 0;
//   for (let i = 0; i < arr.length; i++) {
//     rsl += arr[i];
//   }
//   return rsl;
// }
// function sum (arr) {
//   switch (arr.length) {
//     case 0:
//       return NaN
//     case 1:
//       return arr[0]
//     default:
//       let sum = 0
//       for (let n of arr) {
//         sum += n
//       }
//       return sum
//   }
// }

class Zu {
  /**
   * Generate a random integer between [min, max].
   * Both min & max are inclusive.
   * @param {Number} min  Int
   * @param {Number} max  Int
   * @returns {Number}  Int
   */
  static randBetween(min, max) {
    return ~~(Math.random() * (max - min + 1)) + min;
  }
  /**
   * Generate a random integer between [min, max).
   * Notice: min is inclusive & max is exclusive.
   * @param {Number} min  Int
   * @param {Number} max(exclusive)  Int
   * @returns {Number}  Int
   */


  static rand(min, max) {
    return ~~(Math.random() * (max - min)) + min;
  }

  static almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
  }

  static almostInt(x, epsilon) {
    // let rounded = Math.round(x)
    // return rounded - epsilon < x && rounded + epsilon > x
    return Math.abs(x - Math.round(x)) < epsilon;
  }

  static intExponent(x) {
    return Math.floor(Math.log10(x));
  }

}
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

export { Comparer, Rank, Stat, Zu };

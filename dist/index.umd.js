(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.borel = {}));
}(this, function (exports) { 'use strict';

  // import { quickSort, quickSortBy } from './sort/quickSort'
  // import { timSort } from './sort/timSort'
  var Comparer =
  /*#__PURE__*/
  function () {
    function Comparer() {}

    Comparer.stringAscending = function stringAscending(a, b) {
      return a.localeCompare(b);
    };

    Comparer.stringDescending = function stringDescending(a, b) {
      return b.localeCompare(a);
    };

    Comparer.numberAscending = function numberAscending(a, b) {
      return a - b;
    };

    Comparer.numberDescending = function numberDescending(a, b) {
      return b - a;
    };

    return Comparer;
  }();

  var Rank =
  /*#__PURE__*/
  function () {
    function Rank() {}

    /**
     *
     * @param {*[]} arr
     * @param {function(*,*):number} comparer Compare 'prev' & 'next' element in an array. If return negative number or
     * zero, then 'prev' comes first, else 'next' comes first.
     * @return {*[]} Sorted arr.
     */
    Rank.sort = function sort(arr, comparer) {
      return arr.slice().sort(comparer);
    }
    /**
     *
     * @param {*[]} arr
     * @param {function(*,*):number} comparer Compare 'prev' & 'next' element in an array. If return negative number or
     * zero, then 'prev' comes first, else 'next' comes first.
     * @return {number[]} Rank order array, where 0 denote the first.
     */
    ;

    Rank.rank = function rank(arr, comparer) {
      var sorted = arr.slice().sort(comparer);
      return arr.slice().map(function (v) {
        return sorted.indexOf(v);
      });
    }
    /**
     *
     * @param {*[]} arr
     * @param {number[]} arrRank array of the same length as 'arr', containing rank order of 'arr', 0 comes first.
     * @return {*[]}
     */
    ;

    Rank.reorderBy = function reorderBy(arr, arrRank) {
      var rsl = Array(arr.length);

      for (var _iterator = arrRank.entries(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var _ref2 = _ref,
            i = _ref2[0],
            ord = _ref2[1];
        rsl[ord] = arr[i];
      }

      return rsl;
    };

    return Rank;
  }();

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
  var Stat =
  /*#__PURE__*/
  function () {
    function Stat() {}

    Stat.cnt = function cnt(arr) {
      return !!arr ? arr.length : 0;
    }
    /**
     *
     * @param {number[] }arr
     * @returns {number}
     */
    ;

    Stat.sum = function sum(arr) {
      if (!arr) return 0;
      var l = arr.length;

      switch (l) {
        case 0:
          return NaN;

        case 1:
          return arr[0];

        default:
          var sum = 0;

          for (var i = 0; i < l; i++) {
            sum += arr[i];
          }

          return sum;
      }
    };

    Stat.avg = function avg(arr) {
      return !!arr && arr.length ? Stat.sum(arr) / arr.length : 0;
    };

    Stat.mode = function mode(arr) {
      return undefined;
    };

    Stat.median = function median(arr) {
      return undefined;
    };

    Stat.bound = function bound(arr) {
      if (!arr) return {
        max: NaN,
        min: NaN
      };
      var l = arr.length;

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
          var _ref = [arr[0], arr[0]],
              max = _ref[0],
              min = _ref[1];

          for (var i = 1; i < l; i++) {
            if (arr[i] > max) max = arr[i];
            if (arr[i] < min) min = arr[i];
          }

          return {
            max: max,
            min: min
          };
      }
    } // Population standard deviation
    ;

    Stat.stDevP = function stDevP(arr) {
      var avg = Stat.avg(arr);
      var cnt = Stat.cnt(arr);
      return Math.hypot.apply(Math, arr.map(function (x) {
        return x - avg;
      })) / Math.sqrt(cnt);
    } // Sample standard deviation
    ;

    Stat.stDevS = function stDevS(arr) {
      var avg = Stat.avg(arr);
      var cnt = Stat.cnt(arr) - 1;
      return Math.hypot.apply(Math, arr.map(function (x) {
        return x - avg;
      })) / Math.sqrt(cnt);
    }
    /**
     *
     * @param {*[]} arr
     * @param {function(*):number} ject
     * @return {number}
     */
    ;

    Stat.sumBy = function sumBy(arr, ject) {
      if (!arr) return NaN;
      var l = arr.length;

      switch (l) {
        case 0:
          return NaN;

        case 1:
          return ject(arr[0]);

        default:
          var sum = 0;

          for (var i = 0; i < l; i++) {
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
    ;

    Stat.maxBy = function maxBy(arr, ject) {
      if (!arr) return NaN;
      var l = arr.length;

      switch (l) {
        case 0:
          return NaN;

        case 1:
          return ject(arr[0]);

        default:
          var v,
              max = ject(arr[0]);

          for (var i = 1; i < l; i++) {
            v = ject(arr[i]);
            if (v > max) max = v;
          }

          return max;
      }
    };

    return Stat;
  }();
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

  var Zu =
  /*#__PURE__*/
  function () {
    function Zu() {}

    /**
     * Generate a random integer between [min, max].
     * Both min & max are inclusive.
     * @param {Number} min  Int
     * @param {Number} max  Int
     * @returns {Number}  Int
     */
    Zu.randBetween = function randBetween(min, max) {
      return ~~(Math.random() * (max - min + 1)) + min;
    }
    /**
     * Generate a random integer between [min, max).
     * Notice: min is inclusive & max is exclusive.
     * @param {Number} min  Int
     * @param {Number} max(exclusive)  Int
     * @returns {Number}  Int
     */
    ;

    Zu.rand = function rand(min, max) {
      return ~~(Math.random() * (max - min)) + min;
    };

    Zu.almostEquals = function almostEquals(x, y, epsilon) {
      return Math.abs(x - y) < epsilon;
    };

    Zu.almostInt = function almostInt(x, epsilon) {
      // let rounded = Math.round(x)
      // return rounded - epsilon < x && rounded + epsilon > x
      return Math.abs(x - Math.round(x)) < epsilon;
    };

    Zu.intExponent = function intExponent(x) {
      return Math.floor(Math.log10(x));
    };

    return Zu;
  }();
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

  exports.Comparer = Comparer;
  exports.Rank = Rank;
  exports.Stat = Stat;
  exports.Zu = Zu;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

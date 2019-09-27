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
  static cnt (arr) {
    return !!arr ? arr.length : 0
  }

  /**
   *
   * @param {number[] }arr
   * @returns {number}
   */
  static sum (arr) {
    if (!arr) return 0
    const l = arr.length
    switch (l) {
      case 0:
        return NaN
      case 1:
        return arr[0]
      default:
        let sum = 0
        for (let i = 0; i < l; i++) {
          sum += arr[i]
        }
        return sum
    }
  }

  static avg (arr) {
    return !!arr && arr.length
      ? Stat.sum(arr) / arr.length
      : 0

  }

  static mode (arr) {
    return undefined
  }

  static median (arr) {
    return undefined
  }

  static bound (arr) {
    if (!arr) return { max: NaN, min: NaN }
    const l = arr.length
    switch (l) {
      case 0:
        return { max: NaN, min: NaN }
      case 1:
        return { max: arr[0], min: arr[0] }
      default:
        let [max, min] = [arr[0], arr[0]]
        for (let i = 1; i < l; i++) {
          if (arr[i] > max) max = arr[i]
          if (arr[i] < min) min = arr[i]
        }
        return { max, min }
    }
  }

  // Population standard deviation
  static stDevP (arr) {
    const avg = Stat.avg(arr)
    const cnt = Stat.cnt(arr)
    return Math.hypot(...arr.map((x) => x - avg)) / Math.sqrt(cnt)
  }

  // Sample standard deviation
  static stDevS (arr) {
    const avg = Stat.avg(arr)
    const cnt = Stat.cnt(arr) - 1
    return Math.hypot(...arr.map((x) => x - avg)) / Math.sqrt(cnt)
  }

  /**
   *
   * @param {*[]} arr
   * @param {function(*):number} ject
   * @return {number}
   */
  static sumBy (arr, ject) {
    if (!arr) return NaN
    const l = arr.length
    switch (l) {
      case 0:
        return NaN
      case 1:
        return ject(arr[0])
      default:
        let sum = 0
        for (let i = 0; i < l; i++) {
          sum += ject(arr[i])
        }
        return sum
    }
  }

  /**
   *
   * @param {*[]} arr
   * @param {function(*):number} ject
   * @return {number}
   */
  static maxBy (arr, ject) {
    if (!arr) return NaN
    const l = arr.length
    switch (l) {
      case 0:
        return NaN
      case 1:
        return ject(arr[0])
      default:
        let v, max = ject(arr[0])
        for (let i = 1; i < l; i++) {
          v = ject(arr[i])
          if (v > max) max = v
        }
        return max
    }
  }
}

export {
  Stat
}

// function sum(arr) {
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

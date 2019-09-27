import { Zu, Stat } from '../../src'
import { Chrono } from 'elprimero'
import { Str } from 'xbrief'
import { CrosTab } from 'crostab'
import { Vec } from 'veho'

const fibonacci = (steps = 2) => {
  const arr = [1, 1]
  for (let i = 2; i <= steps; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr
}

const paramSet = [
  [0],
  [NaN],
  fibonacci(20),
  Vec.geometric(20, 2, 2),
  Vec.arithmetic(64, 0, 1000),
]

const paramSet2 = [
  Vec.ini(10000, () => Zu.rand(0, 100)),
  Vec.ini(100000, () => Zu.rand(0, 100)),
  Vec.ini(1000000, () => Zu.rand(0, 100)),
]

const funcSet = {
  by_reduce (arr) {
    return arr.reduce((a, b) => a + b)
  },
  by_forOf (arr) {
    let sum = 0
    for (let n of arr) {
      sum += n
    }
    return sum
  },
  by_forEach (arr) {
    let sum = 0
    arr.forEach(x => sum += x)
    return sum
  },
  by_forIndexed (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum
  }
}

export class StatTest {
  static test () {
    let params = paramSet2
    let crostab
    crostab = Chrono.compareFuncsByParams(50, params, funcSet)
    crostab.side = params.map(it => it.hBrief(',', undefined, 5, 2))
    crostab.brief().wL()
  }
}

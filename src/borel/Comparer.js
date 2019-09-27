// import { quickSort, quickSortBy } from './sort/quickSort'

// import { timSort } from './sort/timSort'

class Comparer {
  static stringAscending (a, b) {
    return a.localeCompare(b)
  }

  static stringDescending (a, b) {
    return b.localeCompare(a)
  }

  static numberAscending (a, b) {
    return a - b
  }

  static numberDescending (a, b) {
    return b - a
  }
}

export {
  Comparer
}

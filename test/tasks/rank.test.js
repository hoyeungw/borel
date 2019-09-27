import newTechs from 'funfact/dist/data/tech/newTechs'
import { Comparer } from '../../dist/index.esm'
import { Rank } from '../../dist/index.esm'

class RankTest {
  static test () {
    const arr = newTechs
    'original' |> console.log
    arr |> console.log

    'sorted by Comparer.stringAscending' |> console.log
    Rank.sort(arr, Comparer.stringAscending) |> console.log

    'ranked by Comparer.stringAscending' |> console.log
    const nums = Rank.rank(arr, Comparer.stringAscending)
    nums |> console.log

    'reorder original based on the rank' |> console.log
    Rank.reorderBy(arr, nums) |> console.log
  }
}

test('RankTest', () => {
  RankTest.test()
})
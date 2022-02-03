import { A, O, N, pipe } from '@mobily/ts-belt'

const res = pipe(
  [1, 2, 3, 4, 5], // → [1, 2, 3, 4, 5]
  A.dropExactly(2), // → Some([3, 4, 5])
  O.flatMap(A.head), // → Some(3)
  O.map(N.multiply(10)), // → Some(30)
  O.getWithDefault(0) // → 30
) // → 30

console.log(res)

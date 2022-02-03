import { A, pipe } from '@mobily/ts-belt'

const numbers: number[] = [1, 2, 5, 10, 7, 4]

const h = pipe(numbers, A.head)

pipe(
  numbers,
  A.reduce(h, (acc, num) => {
    return !acc ? num : num > acc ? num : acc
  }),
  console.log
)

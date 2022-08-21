import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

// 注意null在严格模式下不是true，见下方例子;在非严格模式下为true.因此需要打开严格模式才可
// 具体可见：https://www.typescriptlang.org/docs/handbook/type-compatibility.html#handbook-content
// A ”✓” indicates a combination that is compatible only when strictNullChecks is off.
type t1 = null extends true ? true : false; // type t1 = false 
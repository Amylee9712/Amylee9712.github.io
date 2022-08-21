//返回数组的第一个元素，空数组返回never
 // type First<T extends any[]> = T extends [] ? never : T[0]

// 法二：利用['length']获得数组长度，extends作为条件判断，判断是否为0
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]


// 法三：利用T[number]
//type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

//测试法三的解题思路
//1.T[number]
type ages = []

//union 类型 :type t1 = 3 | 1 | 2
type t1 = ages[number]

//看看某个值是不是在union里 即 1 extends 1
type t2 = 1 extends ages[number] ? true : false  // true

//测试，如果是T[0]呢,T[0]不在ages的类型里，所以肯定返回一个undefined ，再假如ages =[],则通过t1可知ages[number]是never，则判断undefined不在never里，故可法三
// type t3 = T[0] extends ages[number] ? true : false

//法四：利用infer（推断,相当于数学里的“设” x）=》类似于js中的数组结构 =>判断T是否存在第一个元素，存在则返回T[0],否则never
type First<T extends any[]> = T extends [infer First , ...infer Rest] ? First : never

//法四扩展：可以取到rest值，与js异曲同工
type Tail<T extends any[]> = T extends [ infer First , ...infer Rest] ? Rest : never

type t4 = Tail<[1,2,3]> //type t4 = [2, 3]
type t5 = Tail<[]> //type t5 = never
type t6 = First<[]> //type t6 = never

//法四 js写法
const first = (arr)=>{
   const [first,...rest] = arr
   return first ? first : 'never'
}
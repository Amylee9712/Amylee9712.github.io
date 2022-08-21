type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

//限定T/U类型可以用any[]，但是用unknow[]表示确定有一个类型。

//js写法 spread运算符
function concat(T,U){
   return [...T,...U]
}

//扩展题：使用spread、infer分别取出一个数组的头元素和尾元素
//first 【1，2，3】=》1
//tail 【1，2，3】=》3
type First1<T extends unknown[]> = T extends [infer First1, ...infer Rest] ? First1 : never;
type Tail1<T extends unknown[]> = T extends [...infer Rest, infer Tail1] ? Tail1 : never;

type t10 = First1<[1,2,3]> // type t10 = 1
type t11 = Tail1<[1,2,3]> //type t11 = 3
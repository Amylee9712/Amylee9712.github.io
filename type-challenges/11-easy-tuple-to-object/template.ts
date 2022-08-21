type TupleToObject<T extends readonly ( string| number | symbol)[]> = {
    [P in T[number] ] : P
}
 


//遍历数组的值，并赋值；

//扩展，遍历数组的索引， [P in keyof T]
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// //type r = readonly ["0", "1", "2", "3"]
// type r = TupleToObject<typeof tuple> 
type MyAwaited<T extends Promise<unknown> >= T extends Promise<infer X> 
? X extends Promise<unknown> 
? MyAwaited<X> : X
 : never;

 //extends判断T中是否为Promise
 //首先约束T必定是promise，只有是，才可进一步判断
 //infer假设promise中有内容X，递归判断X是否为promsie。
 //若是，则递归
 //若不是，返回X
 //三木运算符最后一个，逻辑上，永远不会走该步，故可返回never
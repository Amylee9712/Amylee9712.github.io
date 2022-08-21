//1.遍历接口类型，并赋值
type MyReadonly<T> = {
   readonly [P in keyof T] : T[P]
}
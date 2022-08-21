
type MyExclude<T, U> = T extends U ? never : T

//知识点：extends前后均为union类型时，T extends U，表示T的遍历，内层为U的遍历
//当T类型中有U中的类型，删除掉，并返回剩余的类型
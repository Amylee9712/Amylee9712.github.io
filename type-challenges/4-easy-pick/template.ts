type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}
// 遍历union类型
//Pick<T,K>的使用
interface User{
    name: string;
    sex: string;
    age: number;
}

type NewType = Pick<User, 'name' | 'age'>



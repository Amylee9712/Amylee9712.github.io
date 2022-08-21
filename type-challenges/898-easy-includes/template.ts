import { Equal } from "@type-challenges/utils"

export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First,U> extends true ? true : Includes<Rest,U> :false




//js实现:递归遍历
function includes(list,key){
   
    function recur(list,key){
        if(list.length === 0){return false}
         const [first, ...rest] = list
         if(first === key){
            return true
         }else{
            return recur(rest,key)
         }      
    }
 
return recur(list,key)

}

//ts模块规范：
//如果有export/import的话，那么就是模块 =》 此处引入了Equal
//没有的话，那么就是全局的（之前所有的template中都没有export/import），可以直接在别的模块引用
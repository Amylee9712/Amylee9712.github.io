type Length<T extends readonly any[]> = T['length']

//js实现
function getlength(arr) {
    if(!Array.isArray(arr)){return}
    return arr.length
}
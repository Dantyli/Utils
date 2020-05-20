//判断是否为json字符串
export function isJson(str){
    try{
        if(typeof JSON.parse(str)=='object'){
            return true
        }
    }catch(e){

    }
    return false
}
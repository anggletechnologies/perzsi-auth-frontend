export function toQueryString(obj){
    if(!obj){
        return ''
    }
    if(typeof obj=="string"){
        return "?"+obj.split("?")[1]
    }

    return "?"+new URLSearchParams(obj).toString()
}


export const getParamsFromurl = (url) =>{
    if(!url){
        return {}
    }
    const urlSearchParams = new URLSearchParams(url.split("?")[1]);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params
}
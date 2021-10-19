import { useState,useEffect } from 'react'
import { getParamsFromurl } from '../utils/navigations'



const useQuery = ()=>{
    
    const [query,setQuery] = useState(getParamsFromurl(window.location.href))

    useEffect(()=>{
        setQuery(getParamsFromurl(window.location.href))
    },[])
    return query
}

export default useQuery
import React, { useEffect } from 'react'
import useSdk from '../../apiClient'
import useQuery from '../../hooks/useQuery';

export default function Logout() {
    const api = useSdk()
    const {next} = useQuery()
    
    useEffect(()=>{
        window.document.title = "Logout"
        api.Auth.logout()
        .then(data=>{
            next&&(window.location.href = next +"?logout=true")
        })
        .catch(console.error)

        return api.abort
    },[])
    return (
        <div>
            Logout
        </div>
    )
}

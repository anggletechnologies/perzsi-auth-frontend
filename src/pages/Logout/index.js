import React, { useEffect } from 'react'
import useSdk from '../../apiClient'


export default function Logout() {
    const api = useSdk()
    useEffect(()=>{
        api.Auth.logout()
        .then(data=>{

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

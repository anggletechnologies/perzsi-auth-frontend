import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from '@mui/material'
import useSdk from '../../apiClient'
import {useNavigate} from 'react-router'
import genLink from '../../utils/genLink'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../../reducers/userReducer'
import { useSnackbar } from 'notistack'




function AuthGaurd({children,...props}) {
    const [isLogin, setIsLogin] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    const sdk = useSdk()
    const navigate = useNavigate()
    const {enqueueSnackbar} = useSnackbar()
    useEffect(() => {
        sdk.User.retrieve({id:user?._id})
        .then(()=>{
            setIsLogin(true)
        })
        .catch(error=>{
            console.error(error)
            dispatch(clearUser())
            if(error?.response?.status===401){
                navigate(genLink.home({next:window.location.pathname}))
            }else if(!window.navigator.onLine){
                enqueueSnackbar("error occurred check you internet connection",{variant:"error"})
            }else{
                enqueueSnackbar("error occurred",{variant:"error"})
            }
        })
        return sdk.abort
    }, [])
    return isLogin?(
        <>
            {children}
        </>
    ):<LinearProgress color="primary" />
}

AuthGaurd.propTypes = {

}

export default AuthGaurd


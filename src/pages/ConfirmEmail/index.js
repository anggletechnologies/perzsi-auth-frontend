import { Box } from '@mui/system'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'
import useSdk from '../../apiClient'
import useQuery from '../../hooks/useQuery'
import styled from 'styled-components'
import ImageIllustration from '../../assets/confirmed.svg'
import ImageIllustrationDenied from '../../assets/undraw_access_denied.svg'
import {Typography,CircularProgress} from '@mui/material'

const Image = styled.img`
    max-height: 20rem;
    margin-bottom:3rem;
`


export default function ConfirmEmail() {
    
    
    const {email,otp,next} = useQuery()
    const api = useSdk()
    const {enqueueSnackbar,closeSnackbar} = useSnackbar()
    const [status, setStatus] = useState("pending")
    
    useEffect(() => {
        window.document.title = "Confirm email"
        email&&otp&&api.Auth.verifyEmail({
            data:{
                email,
                otp
            },
            params:{next}
        })
        .then(data=>{
            const key = enqueueSnackbar("your email verification was successful",{variant:"success"})
            setStatus("success")
            next&&setTimeout(()=>{
                closeSnackbar(key)
                next&&(window.location.href = next)
            },4000)
        })
        .catch((error)=>{
            setStatus("error")
            console.error(error)
            enqueueSnackbar("invalid link",{variant:"error"})
        })

        return api.abort
    }, [])
    return (
        <Box>
            
            {(()=>{
                switch (status) {
                        
                    case "success":
                        return <Box my={{xs:3,md:8}}>
                            <Image src={ImageIllustration} alt="confirmed" />
                            <Typography variant="h5" >
                                Your email was successfully verified
                            </Typography>
                        </Box>
                    case "error":
                        return <Box my={{xs:3,md:8}}>
                            <Image src={ImageIllustrationDenied} alt="denied" />
                            <Typography variant="h5" >
                                Invalid otp or email
                            </Typography>
                        </Box>
                
                    default:
                        return <Box style={{height:'60vh'}} display="flex" justifyContent="center" alignItems="center">
                            <CircularProgress color="primary"  size={100} />
                        </Box>
                }
            })()}
            
        </Box>
    )
}

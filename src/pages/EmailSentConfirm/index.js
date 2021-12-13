import React, { useState } from 'react'
import pt from 'prop-types'
import { Box } from '@mui/system'
import Verify from '../../assets/undraw_verified.svg'
import Typography from '@mui/material/Typography'
import styled from 'styled-components'
import { LoadingButton } from '@mui/lab'
import useQuery from '../../hooks/useQuery'
import useSdk from '../../apiClient'


const Image = styled.img`
    max-height:20rem;
`

function EmailSentConfirm(props) {
    const [isSubmitting,setSubmitting] = useState(false)
    const api = useSdk()
    const {email,next} = useQuery()

    function handleResentEmailVerify() {
        window.document.title = "Veriy email sent"
        email&&setSubmitting(true)
        email&&api.Auth.resendOTP({
            data:{email},
            params:{next}
        })
        .then(data=>[

        ])
        .catch(console.error)
        .finally(()=>[
            setSubmitting(false)
        ])
    }

    return (
        <Box my={3} px={3} display="flex" flexDirection="column" alignItems="center">
            <Image src={Verify} alt="verify email notification" />
            <Typography variant="h5" >
                A verification link has been sent to {email||"your email"}.
            </Typography>
            <Typography variant="h5" >
                Follow the link to verify your email.
            </Typography>
            <Box mt={3}>
                <LoadingButton disabled={isSubmitting} loading={isSubmitting} onClick={handleResentEmailVerify} variant="contained" color="primary">
                    Resent Verification
                </LoadingButton>
            </Box>
            
        </Box>
    )
}

EmailSentConfirm.propTypes = {

}

export default EmailSentConfirm


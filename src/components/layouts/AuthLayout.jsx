import React from 'react'
import pt from 'prop-types'
import { Box } from '@mui/system'
import Logo from '../display/Logo'
import { Outlet } from 'react-router-dom';



const AuthLayout = () => {
    return (
        <Box display="flex" justifyContent="center" flexDirection="column" my={{xs:3,md:6}} px={{xs:3,md:0}} >
            <Box display="flex" justifyContent="center">
                <Logo />
            </Box>
            <Box mt={{xs:2,md:5}} display="flex" justifyContent="center">
                <Outlet/>
            </Box>
        </Box>
    )
}

AuthLayout.propTypes = {

}

export default AuthLayout

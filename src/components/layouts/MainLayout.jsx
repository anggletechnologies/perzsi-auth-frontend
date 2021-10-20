import { useTheme } from '@material-ui/core';
import { Box } from '@material-ui/core';
import React from 'react'
import { Outlet } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer'


function MainLayout() {
    const theme = useTheme()
    return (
        <Box style={{backgroundColor:theme.palette.common.white}}>
            {/* <Header /> */}
                <Outlet/>
            {/* <Footer/> */}
        </Box>
    )
}


export default MainLayout


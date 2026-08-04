import React from 'react'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const MainLayout = ({ open, onMenuClick, onSidebarClose, children }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Navbar onMenuClick={onMenuClick} />
            <Sidebar open={open} onClose={onSidebarClose} variant={isMobile ? 'temporary' : 'permanent'} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
            </Box>
        </Box>
    )
}

export default MainLayout;
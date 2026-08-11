import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MainLayout = ({
    open,
    onMenuClick,
    onSidebarClose,
    onSearch,
    unreadCount = 0,
    draftCount = 0,
    starredCount = 0,
    children,
}) => {

    const theme = useTheme();

    const isMobile = useMediaQuery(
        theme.breakpoints.down('md')
    );

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                width: '100%',
            }}
        >

            <CssBaseline />

            {/* SIDEBAR */}
            <Sidebar
                open={open}
                onClose={onSidebarClose}
                variant={isMobile ? 'temporary' : 'permanent'}
            />

            {/* RIGHT SIDE - NAVBAR + PAGE */}
            <Box
                sx={{
                    flex: 1,
                    minWidth: 0,
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >

                {/* NAVBAR */}
              <Navbar
    onMenuClick={onMenuClick}
    onSearch={onSearch}
    unreadCount={unreadCount}
    draftCount={draftCount}
    starredCount={starredCount}
    isMobile={isMobile}
/>

                {/* PAGE CONTENT */}
                <Box
                    sx={{
                        flex: 1,
                        width: '100%',
                        minWidth: 0,
                        p: {
                            xs: 1.5,
                            sm: 2,
                            md: 3,
                        },
                        overflow: 'auto',
                        boxSizing: 'border-box',
                    }}
                >
                    {children}
                </Box>

            </Box>

        </Box>
    );
};

export default MainLayout;
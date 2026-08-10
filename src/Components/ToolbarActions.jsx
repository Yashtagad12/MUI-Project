
import React from 'react'
import { Box, IconButton } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ToolbarActions = ({ onRefresh }) => {

    return (
        <Box>
            <IconButton color="primary" onClick={onRefresh}>
                <RefreshIcon />
            </IconButton>
            <IconButton color="primary">
                <MoreVertIcon />
            </IconButton>
        </Box >
    )
};

export default ToolbarActions;
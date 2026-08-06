import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { emails } from '../Data/emails';



export default function EmailDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const email = emails.find(e => e.id === parseInt(id));

    if (!email) {
        return <Typography variant="h6">Email not found</Typography>;
    }

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                {email.subject}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                From: {email.from} | Date: {email.date}
            </Typography>
            <Box sx={{ mt: 2 }}>
                <Typography variant="body1" gutterBottom>
                    {email.body}
                </Typography>
            </Box>

            <Button variant="contained" onClick={() => navigate(-1)}>
                Back
            </Button>
            <Box sx={{ mt: 4 }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/compose?reply=' + id)}>
                    Reply
                </Button>
                <Button variant="outlined" sx={{ ml: 2 }} onClick={() => navigate('/compose?forward=' + id)}>
                    Forward
                </Button>
            </Box >
        </Box >
    );
};
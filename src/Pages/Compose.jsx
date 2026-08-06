import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';


export default function Compose() {

    const navigate = useNavigate();
    const location = useLocation();
    const Params = new URLSearchParams(window.location.search);
    const replyId = Params.get('reply');
    const forwardId = Params.get('forward');

    const [to, setTo] = useState('');
    const [subject, setSubject] = useState(replyId ? 'Re: ' : forwardId ? 'Fwd:' : '');
    const [body, setBody] = useState('');

    const handleSend = () => {
        // Here you would typically send the email data to your backend or API
        console.log('Sending email:', { to, subject, body });
        navigate('/sent'); // Navigate to the Sent page after sending
    };

    return (
        <Box>
            <TextField
                fullWidth label="To" value={to} onChange={e => setTo(e.target.value)}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth label="Subject" value={subject} onChange={e =>
                    setSubject(e.target.value)} sx={{ mb: 2 }}
            />
            <TextField
                fullWidth multiline rows={10} label="Body" value={body}
                onChange={e => setBody(e.target.value)}
                variant="outlined"
            />
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" color="primary" onClick={handleSend}>
                    Send
                </Button>
            </Box>

        </Box>
    )
};
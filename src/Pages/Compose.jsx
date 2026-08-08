import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { emails } from '../Data/emails';


const Compose = ({ onSaveDraft, onSend, draft }) => {


    const [email, setEmail] = React.useState({
        id: Date.now(),
        to: '',
        subject: '',
        body: '',
    });

    React.useEffect(() => {
        if (draft) {
            setEmail(draft);
        }
    }, [draft]);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setEmail((previousEmail) => ({
            ...previousEmail,
            [name]: value,
        }));
    };

    const handleSend = () => {
        // Here you would typically send the email data to your backend or API
        console.log('Sending email:', { to, subject, body });
        navigate('/sent'); // Navigate to the Sent page after sending
    };

    return (
        <Box>
            <TextField
                fullWidth
                label="To"
                name="to"
                value={email.to}
                onChange={handleChange}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth label="Subject" value={email.subject} onChange={handleChange}
                sx={{ mb: 2 }}
            />
            <TextField
                fullWidth
                multiline
                rows={10}
                label="Body"
                name="body"
                value={email.body}
                onChange={handleChange}
                variant="outlined"
            />
            <Box sx={{ mt: 2 }}>
                <Button
                    onClick={() => onSaveDraft(email)}
                >
                    Save Draft
                </Button>
                <Button variant="contained" color="primary" onClick={() => onSend(email)}>
                    Send
                </Button>
            </Box>

        </Box>
    )
};

export default Compose;
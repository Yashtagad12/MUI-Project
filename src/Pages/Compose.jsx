import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Compose = ({ onSaveDraft, onSend, draft }) => {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState({
        id: draft?.id ?? null,
        to: '',
        subject: '',
        body: '',
        ...draft,
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        setEmail((previousEmail) => ({
            ...previousEmail,
            [name]: value,
        }));
    };

    const handleSend = () => {
        onSend(email);
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
                fullWidth
                label="Subject"
                name="subject"
                value={email.subject}
                onChange={handleChange}
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
                <Button variant="contained" color="primary" onClick={handleSend}>
                    Send
                </Button>
            </Box>

        </Box>
    )
};

export default Compose;
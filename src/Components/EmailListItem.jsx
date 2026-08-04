import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';


export default function EmailListItem({ email, onClick }) {

    return (
        <ListItem alignItems="flex-start" button onClick={() => onClick(email)}>
            <ListItemAvatar>
                <Avatar>
                    {email.from.split(' ').map((namePart) => namePart[0]).join('').toUpperCase()}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={email.subject}
                secondary={
                    <React.Fragment>
                        {email.from} — {email.body.slice(0, 50)}…

                    </React.Fragment>
                }
            />
        </ ListItem>
    );
};
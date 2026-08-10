import React from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, ListItemButton } from '@mui/material';


const EmailListItem = ({ email, onClick }) => {

    return (
        <ListItem disablePadding>
            <ListItemButton
                alignItems="flex-start"
                onClick={() => onClick(email)}

            >
                <ListItemAvatar>
                    <Avatar>
                        {email.from
                            .split(' ')
                            .map((namePart) => namePart[0])
                            .join('')
                            .toUpperCase()}
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
            </ListItemButton>
        </ListItem>
    );
};

export default EmailListItem;
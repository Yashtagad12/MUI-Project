import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Divider,
    Paper,
} from '@mui/material';

import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

export default function Drafts({ drafts, onOpenDraft }) {

    return (
        <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>

            {/* Page Heading */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="h5" fontWeight={600}>
                    Drafts
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Emails you started but haven't sent yet.
                </Typography>
            </Box>

            <Paper
                elevation={0}
                sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    overflow: 'hidden',
                }}
            >

                {drafts.length === 0 ? (

                    /* Empty Drafts */
                    <Box
                        sx={{
                            minHeight: 300,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            p: 3,
                        }}
                    >
                        <DraftsOutlinedIcon
                            sx={{
                                fontSize: 60,
                                color: 'text.secondary',
                                mb: 1,
                            }}
                        />

                        <Typography variant="h6">
                            No drafts
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            Your unfinished emails will appear here.
                        </Typography>
                    </Box>

                ) : (

                    /* Draft List */
                    <List disablePadding>

                        {drafts.map((draft, index) => (

                            <React.Fragment key={draft.id}>

                                <ListItem disablePadding>

                                    <ListItemButton
                                        onClick={() => onOpenDraft(draft)}
                                        sx={{
                                            py: 2,
                                            px: { xs: 2, sm: 3 },
                                        }}
                                    >

                                        {/* Avatar */}
                                        <ListItemAvatar>
                                            <Avatar>
                                                <DraftsOutlinedIcon />
                                            </Avatar>
                                        </ListItemAvatar>

                                        {/* Draft Information */}
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    fontWeight={600}
                                                    noWrap
                                                >
                                                    {draft.subject || '(No subject)'}
                                                </Typography>
                                            }
                                            secondary={
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    noWrap
                                                >
                                                    To: {draft.to || 'No recipient'}
                                                    {' — '}
                                                    {draft.body
                                                        ? draft.body.slice(0, 60)
                                                        : 'No message'}
                                                    {draft.body &&
                                                        draft.body.length > 60
                                                        ? '…'
                                                        : ''}
                                                </Typography>
                                            }
                                        />

                                        {/* Draft Label */}
                                        <Typography
                                            variant="caption"
                                            color="error"
                                            sx={{
                                                ml: 2,
                                                fontWeight: 600,
                                            }}
                                        >
                                            Draft
                                        </Typography>

                                    </ListItemButton>

                                </ListItem>

                                {index !== drafts.length - 1 && (
                                    <Divider />
                                )}

                            </React.Fragment>

                        ))}

                    </List>

                )}

            </Paper>
        </Box>
    );
}
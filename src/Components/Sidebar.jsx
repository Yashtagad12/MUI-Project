// src/Components/Sidebar.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link as RouterLink } from 'react-router-dom';

// Import Material Icons
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import MailIcon from '@mui/icons-material/Mail'; // for fallback icon

export default function Sidebar({ open, onClose, variant = 'temporary' }) {
  // Menu items configuration
  const menuItems = [
    { text: 'Compose', icon: <AddIcon />, to: '/compose' },
    { text: 'Inbox', icon: <InboxIcon />, to: '/inbox' },
    { text: 'Sent', icon: <SendIcon />, to: '/sent' },
    { text: 'Drafts', icon: <DraftsIcon />, to: '/drafts' },
    { text: 'Starred', icon: <StarIcon />, to: '/starred' },
    { text: 'Trash', icon: <DeleteIcon />, to: '/trash' },
  ];

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={RouterLink} to={item.to}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* Additional items if needed */}
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/spam">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}  // improve mobile performance
    >
      {drawerContent}
    </Drawer>
  );
}

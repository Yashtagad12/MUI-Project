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
import { Link } from 'react-router-dom';

// Import Material Icons
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import MailIcon from '@mui/icons-material/Mail'; // for fallback icon

import StarBorderIcon from '@mui/icons-material/StarBorder';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Sidebar = ({
  open,
  onClose,
  variant = 'permanent',
}) => {

  const menuItems = [
    {
      text: 'Inbox',
      icon: <InboxIcon />,
      path: '/',
    },
    {
      text: 'Starred',
      icon: <StarBorderIcon />,
      path: '/starred',
    },
    {
      text: 'Drafts',
      icon: <DraftsOutlinedIcon />,
      path: '/drafts',
    },
    {
      text: 'Compose',
      icon: <AddIcon />,
      path: '/compose',
    },
    {
      text: 'Sent',
      icon: <SendOutlinedIcon />,
      path: '/sent',
    },
    {
      text: 'Trash',
      icon: <DeleteIcon />,
      path: '/trash',
    },
  ];

  const sidebarContent = (
    <Box
      sx={{
        width: 260,
        height: '100%',
      }}
    >

      <List sx={{ pt: 2 }}>

        {menuItems.map((item) => (

          <ListItem
            key={item.text}
            disablePadding
          >

            <ListItemButton
              component={Link}
              to={item.path}
              onClick={
                variant === 'temporary'
                  ? onClose
                  : undefined
              }
            >

              <ListItemIcon>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
              />

            </ListItemButton>

          </ListItem>

        ))}

      </List>

      <Divider />

    </Box>
  );

  return (

    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: 260,
        flexShrink: 0,

        '& .MuiDrawer-paper': {
          width: 260,
          boxSizing: 'border-box',

          ...(variant === 'permanent' && {
            position: 'relative',
            height: '100vh',
          }),
        },
      }}
    >
      {sidebarContent}
    </Drawer>

  );
};

export default Sidebar;
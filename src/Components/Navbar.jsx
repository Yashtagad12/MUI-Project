// src/Components/Navbar.jsx
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import MailIcon from '@mui/icons-material/Mail';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Tooltip from '@mui/material/Tooltip';

// Styled search components (as in original code)
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(3),
    width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: { width: '20ch' },
    },
}));

export default function Navbar({
    onMenuClick,
    onSearch,
    unreadCount,
    draftCount,
    starredCount,
    isMobile,
}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
    const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);

    return (
        <Box sx={{ width: '100%' }}>
            <AppBar position="static" sx={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #9333EA 100%)',
            }}>
                <Toolbar>
                    {/* Hamburger / Menu Button */}
                    {isMobile && (
                        <Tooltip title="Open sidebar">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                onClick={(event) => {
                                    event.currentTarget.blur();
                                    onMenuClick();
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                    )}

                    {/* Title or Logo */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MyMail MUI
                    </Typography>

                    {/* Search Field */}
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>

                        <StyledInputBase
                            placeholder="Search emails…"
                            inputProps={{ 'aria-label': 'search emails' }}
                            onChange={(e) => onSearch && onSearch(e.target.value)}
                        />
                    </Search>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        {/* Compose / Mail */}
                        <Tooltip title="Compose email">
                            <IconButton
                                size="large"
                                aria-label="compose email"
                                color="inherit"
                            >
                                <Badge color="error">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>

                        {/* Drafts */}
                        <Tooltip title="Drafts">
                            <IconButton
                                size="large"
                                aria-label="draft emails"
                                color="inherit"
                            >
                                <Badge badgeContent={draftCount} color="error">
                                    <DraftsOutlinedIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>

                        {/* Starred Emails */}
                        <Tooltip title="Starred emails">
                            <IconButton
                                size="large"
                                aria-label="starred emails"
                                color="inherit"
                            >
                                <Badge badgeContent={starredCount} color="error">
                                    <StarBorderIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>

                        {/* Notifications */}
                        <Tooltip title="Notifications">
                            <IconButton
                                size="large"
                                aria-label="email notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={unreadCount} color="error">
                                    <NotificationsIcon />
                                </Badge>


                            </IconButton>
                        </Tooltip>

                        {/* Profile */}
                        <Tooltip title="Account">
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls="primary-search-account-menu"
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </Box>

                    {/* Mobile menu icon */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show email options"
                            aria-controls="primary-search-account-menu-mobile"
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Profile Menu */}
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id="primary-search-account-menu"
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>
                    Profile
                </MenuItem>

                <MenuItem onClick={handleMenuClose}>
                    My Account
                </MenuItem>
            </Menu>

            {/* Mobile More Menu */}
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id="primary-search-account-menu-mobile"
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                {/* Compose */}
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton
                        size="large"
                        aria-label="compose email"
                        color="inherit"
                    >
                        <MailIcon />
                    </IconButton>

                    <p>Compose</p>
                </MenuItem>

                {/* Drafts */}
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton
                        size="large"
                        aria-label="draft emails"
                        color="inherit"
                    >
                        <Badge badgeContent={3} color="error">
                            <DraftsOutlinedIcon />
                        </Badge>
                    </IconButton>

                    <p>Drafts</p>
                </MenuItem>

                {/* Starred */}
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton
                        size="large"
                        aria-label="starred emails"
                        color="inherit"
                    >
                        <Badge badgeContent={5} color="error">
                            <StarBorderIcon />
                        </Badge>
                    </IconButton>

                    <p>Starred</p>
                </MenuItem>

                {/* Notifications */}
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton
                        size="large"
                        aria-label="email notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <p>Notifications</p>
                </MenuItem>

                {/* Profile */}
                <MenuItem
                    onClick={(e) => {
                        handleProfileMenuOpen(e);
                        handleMobileMenuClose();
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>

                    <p>Profile</p>
                </MenuItem>
            </Menu>
        </Box>
    );
}
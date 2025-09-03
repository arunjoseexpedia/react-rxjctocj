import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  InputBase,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SideMenu from './SideMenu';
import './style.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    console.log('toggleMenu');
    setMenuOpen((prev) => !prev);
  };
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Adds consistent styling for MUI */}
      <CssBaseline />

      {/* Top Bar */}
      <AppBar
        className=".app-header"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar className="topbar">
          <Typography variant="h6" noWrap component="div">
            <button className="menu-button" onClick={toggleMenu}>
              &#9776;
            </button>
          </Typography>
          <div className="user-menu">
            <span className="username">Hello, Arun </span>
            <div className="dropdown">
              <button onClick={() => alert('Logging out...')}>Logout</button>
            </div>
          </div>
        </Toolbar>{' '}
      </AppBar>

      <SideMenu isOpen={menuOpen} onClose={toggleMenu} />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* Spacer to push content below Top Bar */}
        <Toolbar />
        <div className="filters">
          <div className="dropdown-wrapper" ref={wrapperRef}>
            <input
              type="text"
              placeholder="Search by name..."
              onFocus={() => setShowDropdown(true)}
              onClick={() => setShowDropdown(true)}
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Option 1</div>
                <div className="dropdown-item">Option 2</div>
                <div className="dropdown-item">Option 3</div>
              </div>
            )}
          </div>
          <input type="text" placeholder="checkin Dates..." />
          <input type="text" placeholder="Search by age..." />
          <IconButton type="submit">
            <SearchIcon className="search-icon" />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
}

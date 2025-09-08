import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  InputBase,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FaBars}  from 'react-icons/fa';
import SideMenu from './SideMenu';
import './style.css';

export default function App() {
  
  
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
         <h3>SAP App Dev Scorecard</h3>
          <div className="user-menu">
            <span className="username">Arun </span>
            
          </div>
        </Toolbar>{' '}
      </AppBar>

     
      <Box 
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* Spacer to push content below Top Bar */}
        <Toolbar />
        <div className="filters">
        <div className="left"><div className="left-top">Top</div>
        <div className="left-middle">Middle</div>
        <div className="left-bottom">Bottom</div></div>
      <div className="center">Center</div>
      <div className="right">Right</div>
      
           
        
            
         
          
          
          
        </div>
      </Box>
    </Box>
  );
}

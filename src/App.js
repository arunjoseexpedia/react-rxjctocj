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
import AppRat from './Components/AppRat';
import TechDebtReduction from './Components/TechDebtReduction';
import { AIIndexWidget } from './Components/AIIndexWidget';
import { VulnerabilitiesSection } from './Components/VulnerabilitiesSection';
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
        <br/>
        <div className="filters">
        <div className="left"><div className="left-top"><TechDebtReduction/></div>
        <div className="left-middle"><AppRat /></div>
        <div className="left-bottom"><AIIndexWidget/></div></div>
      <div className="center"><div className="center-top"><VulnerabilitiesSection/></div>
  <div className="center-middle">Middle Section</div>
  <div className="center-bottom">Bottom Section</div></div>
      <div className="right"><div className="right-top">Right Top</div>
  <div className="right-bottom">Right Bottom</div></div>
      
           
        
            
         
          
          
          
        </div>
      </Box>
    </Box>
  );
}

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
import { SQLOptimization } from './Components/SQLOptimazation';
import { ProductRoadmapSection } from './Components/ProductRoadmapSection';
import './style.css';
import { OperationsMetricsSection } from './Components/OperationsMetricsSection';
import { ServiceRequestSection } from './Components/ServiceRequestSection';

export default function App() {
  
  
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', overflowX: 'hidden' }} >
      {/* Adds consistent styling for MUI */}
      <CssBaseline />
     

   
     

     
      <Box 
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default',width: '100%' }}
      >
         <div className="topbar-container">
  <div className="topbar">
    <h2>SAP App Dev Scorecard</h2>
    <div className="user-menu">
      <span className="username">Arun</span>
    </div>
  </div>
</div>
        {/* Spacer to push content below Top Bar */}
       
        <Toolbar />
        <div className="filters-container">   
        <div className="filters">
        <div className="left"><div className="left-top"><TechDebtReduction/></div>
        <div className="left-middle"><AppRat /></div>
        <div className="left-bottom"><AIIndexWidget/></div></div>
      <div className="center"><div className="center-top"><VulnerabilitiesSection/></div>
  <div className="center-middle"><SQLOptimization /></div>
  <div className="center-bottom"><ProductRoadmapSection/></div></div>
      <div className="right"><div className="right-top"><OperationsMetricsSection/></div>
  <div className="right-bottom"><ServiceRequestSection/></div></div>
      
           
        
            
         
          
  </div>     
          
        </div>
      </Box>
    </Box>
  );
}

import { Box, Paper, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

export const VulnerabilitiesSection = () => {
  const [analyzed, setAnalyzed] = useState(11000);
	const [remediated, setRemediated] = useState(2000);
  const [vulnerabilities,setVulnerabilities] = useState(125);
  useEffect(() => {
		const interval = setInterval(() => {
			// Randomize values slightly within a range
			setAnalyzed(prev => {
				let newValue = prev + Math.floor(Math.random() * 50 - 25); // +/-25
				return Math.max(10000, Math.min(12000, newValue)); // keep between 10k–12k
			});
      setVulnerabilities(prev => {
        let newValue = prev + Math.floor(Math.random() * 20 - 10); // +/-10
        return Math.max(100, Math.min(200, newValue)); // keep between 100–200
      });
			setRemediated(prev => {
				let newValue = prev + Math.floor(Math.random() * 20 - 10); // +/-10
				return Math.max(1500, Math.min(2500, newValue)); // keep between 1.5k–2.5k
			});
		}, 2000); // every 2 seconds

		return () => clearInterval(interval); // cleanup
	}, []);
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.4%',borderRadius: 2 }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Box
      sx={{
        
        width: '100%',
		height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // ✅ centers content vertically
        
      }}
    >
      <Paper
        
        sx={{
          padding: 2,
          borderRadius: 2,
          bgcolor: 'white',
          
        height: '100%',
        width:'100%',
        textAlign:'center'
          // ✅ Optional: prevent it from being too wide
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: '#0033A0', fontWeight: 900 }}
        >
          Vulnerabilities
        </Typography>
        
        <Grid container spacing={2} style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
          <Grid item xs={6} sx={{textAlign:'center'}}>
            <Typography variant="body1" sx={{ color: 'black',textAlign:'center' }}>
              Custom Code Vulnerabilities
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="h5" sx={{ color: 'black' }}>
              {analyzed}
              </Typography>
              <Typography variant="body2" sx={{ color: 'black' }}>
                Analyzed
              </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography variant="h5" sx={{ color: 'black' }}>
              {remediated}
              </Typography>
              <Typography variant="body2" sx={{ color: 'black' }}>
                Disposition/Remediated
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" sx={{ color: 'black' }}>
              SAP Portal Vulnerabilities
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="h5" sx={{ color: 'black' }}>
                {vulnerabilities}
              </Typography>
              <Typography variant="body2" sx={{ color: 'black' }}>
                Detected (Critical, High, & Medium)
              </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography variant="h5" sx={{ color: 'black' }}>
                5
              </Typography>
              <Typography variant="body2" sx={{ color: 'black' }}>
                Remaining (Low)
              </Typography>
            </Box>
          </Grid>
          </Grid>
      </Paper>
    </Box>
	</Grid>
	</Grid>
	);
};

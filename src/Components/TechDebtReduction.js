import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const TechDebtReduction = () => {

	const percentages = [25, 30, 40];
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % percentages.length);
		}, 2000); // Change every 2 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper elevation={6}  sx={{
    padding: 2,
    backgroundColor: '#0033A0',
    borderRadius: 1.5,
	height: '98%',
	width:'100%',
	textAlign:'center'
  }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#fff',fontWeight: 900 }}>
					Tech Debt Reduction
				</Typography>
				<Grid container style={{display: 'flex',justifyContent:'center',alignItems:'center'}} >
					<Grid item xs={12}>
						<Typography variant='h2' sx={{textAlign:'center',color:'#CFD8DC'}}>
						<center>{percentages[currentIndex]}%</center>	
						</Typography>
						
					</Grid>
					
				</Grid>
			</Paper>
		</Grid>
	);
	
};

export default TechDebtReduction;

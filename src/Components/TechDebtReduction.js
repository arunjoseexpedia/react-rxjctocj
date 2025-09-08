import { Grid, Paper, Typography } from '@mui/material';

const TechDebtReduction = () => {
	return (
		<Grid item xs={12}>
			<Paper sx={{ p: 2 }}>
				<Typography variant='h5' gutterBottom sx={{ color: '#00ffff' }}>
					Tech Debt Reduction
				</Typography>
				<Grid container >
					<Grid item xs={12}>
						<Typography variant='h2' color='success.main' sx={{textAlign:'center'}}>
							25%
						</Typography>
						
					</Grid>
					
				</Grid>
			</Paper>
		</Grid>
	);
	
};

export default TechDebtReduction;

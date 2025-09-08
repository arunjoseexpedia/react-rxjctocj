import { Grid, Paper, Typography } from '@mui/material';

const TechDebtReduction = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper sx={{ p: 7,bgcolor: '#08498D' }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#fff' }}>
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

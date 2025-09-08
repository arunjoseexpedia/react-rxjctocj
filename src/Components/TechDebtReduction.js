import { Grid, Paper, Typography } from '@mui/material';

const TechDebtReduction = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper sx={{ p: 7,bgcolor: '#08498D' }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#fff',fontWeight: 900 }}>
					Tech Debt Reduction
				</Typography>
				<Grid container >
					<Grid item xs={12}>
						<Typography variant='h2' sx={{textAlign:'center',color:'#CFD8DC'}}>
							25%
						</Typography>
						
					</Grid>
					
				</Grid>
			</Paper>
		</Grid>
	);
	
};

export default TechDebtReduction;

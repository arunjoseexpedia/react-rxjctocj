import { Grid, Paper, Typography } from '@mui/material';

export const AIIndexWidget = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper sx={{ p: 5 ,bgcolor: '#08498D', borderRadius:2,height: '88%' }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#fff',fontWeight: 900 }}>
					AI Index
				</Typography>
				<Grid container spacing={1}>
					<Grid item xs={12}>
				<Typography variant='h4' sx={{ color: '#CFD8DC', mb: 1 }}>
					0.4 MM
				</Typography>
				</Grid>
					<Grid item xs={12}>
				<Typography variant='body2' sx={{color: '#B0BEC5'}}>
					Savings
				</Typography>
				</Grid>
				<Grid item xs={12}>
				<Typography variant='body2' sx={{color: '#B0BEC5'}}>AI Index</Typography>
				</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

import { Grid, Paper, Typography } from '@mui/material';

export const AIIndexWidget = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper sx={{ p: 5 ,bgcolor: '#08498D' }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#fff' }}>
					AI Index
				</Typography>
				<Grid container spacing={1}>
					<Grid item xs={12}>
				<Typography variant='h4' sx={{ color: '#00ffff', mb: 1 }}>
					0.4 MM
				</Typography>
				</Grid>
					<Grid item xs={12}>
				<Typography variant='body2' color='success.main'>
					Savings
				</Typography>
				</Grid>
				<Grid item xs={12}>
				<Typography variant='body2'>AI Index</Typography>
				</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

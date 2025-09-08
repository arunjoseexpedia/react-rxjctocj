import { Box, Paper, Typography, Grid } from '@mui/material';

export const ServiceRequestSection = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.7%',bgColor: '#08498D' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper elevation={4} sx={{ p: 3, bgcolor: '#08498D',height: '100%' }}>
			<Typography variant='h6' gutterBottom sx={{ color: '#fff' }}>
				Service Now Request
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Typography variant='h4' color='warning.main'>
						9873
					</Typography>
					<Typography variant='body2'>Processed</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h4' color='warning.main'>
						98
					</Typography>
					<Typography variant='body2'>In-Progress</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h4' color='warning.main'>
						57%
					</Typography>
					<Typography variant='body2'>% Completed</Typography>
				</Grid>
			</Grid>
		</Paper>
		</Grid>
		</Grid>
	);
};

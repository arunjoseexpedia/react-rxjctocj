import { Box, Paper, Typography, Grid } from '@mui/material';

export const OperationsMetricsSection = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.7%' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper elevation={4} sx={{ p: 2, bgcolor:  '#08498D',height: '100%' }} >
			<Typography variant='h6' gutterBottom sx={{ color: '#fff' }}>
				Operations Metrics
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Box>
						<Typography variant='h4' color='secondary'>
							4000
						</Typography>
						<Typography variant='body2'>RICEFs</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Typography variant='h4' color='secondary'>
							7000
						</Typography>
						<Typography variant='body2'>Retrofits</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box>
						<Typography variant='h4' color='secondary'>
							300
						</Typography>
						<Typography variant='body2'>Fiori Apps</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Typography variant='h4' color='secondary'>
							8000
						</Typography>
						<Typography variant='body2'>Live Compare</Typography>
						<Typography variant='body2' color='success.main'>
							Executions
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Paper>
		</Grid>
		</Grid>
	);
};

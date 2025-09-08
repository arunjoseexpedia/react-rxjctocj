import { Box, Paper, Typography,Grid } from '@mui/material';

export const SQLOptimization = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.4%' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper sx={{ p: 2, bgcolor: '#08498D' }}>
			<Typography variant='h6' gutterBottom sx={{ color: '#fff' }}>
				Expensive SQL Optimization
			</Typography>

			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}
			>
				<Box>
					<Typography variant='h4' color='primary'>
						64
					</Typography>
					<Typography variant='body2'>Queries Analyzed</Typography>
				</Box>
				<Box>
					<Typography variant='h4' color='primary'>
						38
					</Typography>
					<Typography variant='body2'>Queries Dispositioned</Typography>
				</Box>
				<Box>
					<Typography variant='h4' color='primary'>
						26
					</Typography>
					<Typography variant='body2'>In Progress</Typography>
				</Box>
				<Box>
					<Typography variant='h4' color='primary'>
						13
					</Typography>
					<Typography variant='body2'>
						High Memory/time Intensive queries optimized so far
					</Typography>
				</Box>
			</Box>

			<Box >
				<Typography variant='h4' color='primary'>
					40 K
				</Typography>
				<Typography variant='body2'>Memory Usage Reduction/day</Typography>
				<Typography variant='body2' sx={{ color: 'gray' }}>
					GB
				</Typography>
			</Box>

			<Box >
				<Typography variant='h6' color='primary'>
					800 K
				</Typography>
				<Typography variant='body2'>Execution Time Reduction/day</Typography>
				<Typography variant='body2' sx={{ color: 'gray' }}>
					Seconds
				</Typography>
			</Box>
		</Paper>
		</Grid>
		</Grid>
	);
};
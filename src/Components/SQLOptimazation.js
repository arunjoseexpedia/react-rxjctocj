import { Box, Paper, Typography,Grid } from '@mui/material';

export const SQLOptimization = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.4%' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper sx={{ p: 2, bgcolor: 'white',borderRadius: 2 }}>
			<Typography variant='h6' gutterBottom sx={{ color: '#0033A0',fontWeight: 900 }}>
				Expensive SQL Optimization
			</Typography>

			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}
			>
				<Box>
					<Typography variant='h4' sx={{ color: '#222222' }}>
						64
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>Queries Analyzed</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#222222' }}>
						38
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>Queries Dispositioned</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#222222' }}>
						26
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>In Progress</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#222222' }}>
						13
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>
						High Memory/time Intensive queries optimized so far
					</Typography>
				</Box>
			</Box>

			<Box >
				<Typography variant='h4' sx={{ color: '#222222' }}>
					40 K
				</Typography>
				<Typography variant='body2' sx={{color: '#222222'}}>Memory Usage Reduction/day</Typography>
				<Typography variant='body2' sx={{color: '#222222'}}>
					GB
				</Typography>
			</Box>

			<Box >
				<Typography variant='h6' sx={{
		color: '#222222',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer',
			color:'grey' // slightly bigger on hover
		},
	}}>
					800 K
				</Typography>
				<Typography variant='body2' sx={{color: '#222222'}}>Execution Time Reduction/day</Typography>
				<Typography variant='body2' sx={{color: '#222222'}}>
					Seconds
				</Typography>
			</Box>
		</Paper>
		</Grid>
		</Grid>
	);
};
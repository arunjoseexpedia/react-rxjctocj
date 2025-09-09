import { Box, Paper, Typography,Grid } from '@mui/material';

export const SQLOptimization = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.4%' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper sx={{ p: 2, bgcolor: '#0033A0',borderRadius: 2 }}>
			<Typography variant='h6' gutterBottom sx={{ color: '#fff',fontWeight: 900 }}>
				Expensive SQL Optimization
			</Typography>

			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}
			>
				<Box>
					<Typography variant='h4' sx={{ color: '#CFD8DC' }}>
						64
					</Typography>
					<Typography variant='body2' sx={{color: '#B0BEC5'}}>Queries Analyzed</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#CFD8DC' }}>
						38
					</Typography>
					<Typography variant='body2' sx={{color: '#B0BEC5'}}>Queries Dispositioned</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#CFD8DC' }}>
						26
					</Typography>
					<Typography variant='body2' sx={{color: '#B0BEC5'}}>In Progress</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#CFD8DC' }}>
						13
					</Typography>
					<Typography variant='body2' sx={{color: '#B0BEC5'}}>
						High Memory/time Intensive queries optimized so far
					</Typography>
				</Box>
			</Box>

			<Box >
				<Typography variant='h4' sx={{ color: '#CFD8DC' }}>
					40 K
				</Typography>
				<Typography variant='body2' sx={{color: '#B0BEC5'}}>Memory Usage Reduction/day</Typography>
				<Typography variant='body2' sx={{color: '#B0BEC5'}}>
					GB
				</Typography>
			</Box>

			<Box >
				<Typography variant='h6' sx={{ color: '#CFD8DC' }}>
					800 K
				</Typography>
				<Typography variant='body2' sx={{color: '#B0BEC5'}}>Execution Time Reduction/day</Typography>
				<Typography variant='body2' sx={{color: '#B0BEC5'}}>
					Seconds
				</Typography>
			</Box>
		</Paper>
		</Grid>
		</Grid>
	);
};
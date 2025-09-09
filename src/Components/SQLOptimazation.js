import { Box, Paper, Typography,Grid } from '@mui/material';

export const SQLOptimization = () => {
	return (
		<>
		<Paper sx={{ p: 2, bgcolor: 'white',borderRadius: 1,height:'100%' }}>
		<Grid container sx={{ width: '100%'}}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		
			<Typography variant='h6' gutterBottom sx={{ color: '#0033A0',fontWeight: 900 }}>
				Expensive SQL Optimization
			</Typography>

			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}
			>
				<Box>
					<Typography variant='h4' sx={{ color: '#00000066' }}>
						64
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>Queries Analyzed</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#00000066' }}>
						38
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>Queries Dispositioned</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#00000066' }}>
						26
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>In Progress</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#00000066' }}>
						13
					</Typography>
					<Typography variant='body2' sx={{color: '#2c2c2c'}}>
						High Memory/time Intensive queries optimized so far
					</Typography>
				</Box>
				
				
			</Box>

			

			
		
		</Grid>
		
		
		
		
		<Grid item xs={12} sx={{ width: '100%',textAlign:'center' }} >
		
			

			<Box
				sx={{ display: 'flex', justifyContent: 'space-between', mb: 2, gap: 2 }}
			>
				<Box>
					<Typography variant='h4' sx={{ color: '#00000066' }}>
						39 K
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>Memory Usage Reduction/day</Typography>
				</Box>
				<Box>
					<Typography variant='h4' sx={{ color: '#00000066' }}>
						805 K
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>Execution Time Reduction/day</Typography>
				</Box>
				
				
				
				
			</Box>

			

			
		
		</Grid>
		
		
		</Grid>
		</Paper>
		</>
	);
};
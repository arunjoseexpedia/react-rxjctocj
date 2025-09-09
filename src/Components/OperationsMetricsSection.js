import { Box, Paper, Typography, Grid } from '@mui/material';

export const OperationsMetricsSection = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.7%',textAlign:'center' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper elevation={4} sx={{ p: 2,borderRadius:2, bgcolor:  '#0033A0',height: '100%',textAlign:'center' }} >
			<Typography variant='h6' gutterBottom sx={{ color: '#fff',fontWeight: 900 }}>
				Operations Metrics
			</Typography>

			<Grid container spacing={2} style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
				<Grid item xs={6}>
					<Box sx={{textAlign:'center'}}>
						<Typography variant='h4'  sx={{
		color: '#CFD8DC',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer' // slightly bigger on hover
		},
	}}>
							4000
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>RICEFs</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Typography variant='h4' sx={{
		color: '#CFD8DC',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer' // slightly bigger on hover
		},
	}}>
							7000
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>Retrofits</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box>
						<Typography variant='h4' sx={{
		color: '#CFD8DC',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer' // slightly bigger on hover
		},
	}}>
							300
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>Fiori Apps</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
					<Typography
	variant='h4'
	sx={{
		color: '#CFD8DC',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer' // slightly bigger on hover
		},
	}}
>
	8000
</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>Live Compare</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>
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

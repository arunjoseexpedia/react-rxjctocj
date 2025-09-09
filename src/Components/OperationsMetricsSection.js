import { Box, Paper, Typography, Grid } from '@mui/material';

export const OperationsMetricsSection = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.7%',textAlign:'center' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper elevation={4} sx={{ p: 2,borderRadius:2, bgcolor:  'white',height: '100%',textAlign:'center' }} >
			<Typography variant='h6' gutterBottom sx={{ color: '#0033A0',fontWeight: 900 }}>
				Operations Metrics
			</Typography>

			<Grid container spacing={2} style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
				<Grid item xs={6}>
					<Box sx={{textAlign:'center'}}>
						<Typography variant='h4'  sx={{
		color: 'black',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer',
			color:'grey' // slightly bigger on hover
		},
	}}>
							4000
						</Typography>
						<Typography variant='body2' sx={{color: 'black'}}>RICEFs</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
						<Typography variant='h4' sx={{
		color: 'black',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer',
			color:'grey' // slightly bigger on hover
		},
	}}>
							7000
						</Typography>
						<Typography variant='body2' sx={{color: 'black'}}>Retrofits</Typography>
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box>
						<Typography variant='h4' sx={{
		color: 'black',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer',
			color:'grey' // slightly bigger on hover
		},
	}}>
							300
						</Typography>
						<Typography variant='body2' sx={{color: 'black'}}>Fiori Apps</Typography>
					</Box>
					<Box sx={{ mt: 2 }}>
					<div style={{display:'flex'}}><Typography
	variant='h4'
	sx={{
		color: 'black',
		paddingLeft:'30px',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer',
			color:'grey' // slightly bigger on hover
		},
	}}
>
	8000
</Typography> <Typography variant='body2' sx={{color: 'black', paddingLeft:'11px',paddingTop:'10px'}}>
							Executions
						</Typography></div>
						<Typography variant='body2' sx={{color: 'black'}}>Live Compare</Typography>
						
					</Box>
				</Grid>
			</Grid>
		</Paper>
		</Grid>
		</Grid>
	);
};

import { Box, Paper, Typography, Grid } from '@mui/material';

export const VulnerabilitiesSection = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.4%' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper elevation={4} sx={{ p: 3, bgcolor: '#08498D' }} >
			<Typography variant='h6' gutterBottom sx={{ color: '#fff',fontWeight: 900 }}>
				Vulnerabilities
			</Typography>

			<Grid container spacing={2} >
				<Grid item xs={6} >
					<Typography variant='body1' sx={{color: '#B0BEC5'}} >
						Custom Code Vulnerabilities
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h5' sx={{ color: '#CFD8DC' }}>
							11000
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>Analyzed</Typography>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h5' sx={{ color: '#CFD8DC' }}>
							2000
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>Disposition/Remediated</Typography>
					</Box>
				</Grid>

				<Grid item xs={6} >
					<Typography variant='body1' sx={{color: '#B0BEC5'}}>
						SAP Portal Vulnerabilities
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h5' sx={{ color: '#CFD8DC' }}>
							125
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>
							Detected (Critical, High, & Medium)
						</Typography>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h5' sx={{ color: '#CFD8DC' }}>
							5
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>Remaining (Low)</Typography>
					</Box>
				</Grid>
			</Grid>
		</Paper>
		</Grid>
		</Grid>
	);
};

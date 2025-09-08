import { Box, Paper, Typography, Grid } from '@mui/material';

export const VulnerabilitiesSection = () => {
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.4%' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper elevation={4} sx={{ p: 3, bgcolor: '#08498D' }} >
			<Typography variant='h6' gutterBottom sx={{ color: '#fff' }}>
				Vulnerabilities
			</Typography>

			<Grid container spacing={2} >
				<Grid item xs={6} >
					<Typography variant='body1' color='text.secondary'>
						Custom Code Vulnerabilities
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h5' color='warning.main'>
							11000
						</Typography>
						<Typography variant='body2'>Analyzed</Typography>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h5' color='warning.main'>
							2000
						</Typography>
						<Typography variant='body2'>Disposition/Remediated</Typography>
					</Box>
				</Grid>

				<Grid item xs={6} >
					<Typography variant='body1' color='text.secondary'>
						SAP Portal Vulnerabilities
					</Typography>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h5' color='warning.main'>
							125
						</Typography>
						<Typography variant='body2'>
							Detected (Critical, High, & Medium)
						</Typography>
					</Box>
					<Box sx={{ mt: 1 }}>
						<Typography variant='h5' color='warning.main'>
							5
						</Typography>
						<Typography variant='body2'>Remaining (Low)</Typography>
					</Box>
				</Grid>
			</Grid>
		</Paper>
		</Grid>
		</Grid>
	);
};

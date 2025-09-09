import { Grid, Paper, Typography } from '@mui/material';

const AppRat = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper sx={{
    padding: 2,
    backgroundColor: '#0033A0',
    borderRadius: 1.5,
	height: '98%',
	width:'100%',
	textAlign:'center' }}>
				<Typography variant='h6' gutterBottom  sx={{ color: '#fff',fontWeight: 900 }} >
					App Rat
				</Typography>
				<Grid container spacing={1} style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
					<Grid item xs={12}>
						<Typography variant='h5' sx={{ color: '#CFD8DC' }}>
							220K
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>Dollars savings</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h5' sx={{ color: '#CFD8DC' }}>
							120k
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>SAP Mobile Platform</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h5' sx={{ color: '#CFD8DC' }}>
							100k
						</Typography>
						<Typography variant='body2' sx={{color: '#B0BEC5'}}>SAP CE</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default AppRat;
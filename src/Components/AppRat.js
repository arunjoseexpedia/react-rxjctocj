import { Grid, Paper, Typography } from '@mui/material';

const AppRat = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper sx={{
    padding: 2,
    backgroundColor: '#ffff',
    borderRadius: 1.5,
	height: '98%',
	width:'100%',
	textAlign:'center' }}>
				<Typography variant='h6' gutterBottom  sx={{ color: '#0033A0',fontWeight: 900 }} >
					App Rat
				</Typography>
				<Grid container spacing={1} style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
					<Grid item xs={12}>
						<Typography variant='h5'  sx={{
		color: '#222222',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer',
			color:'grey' // slightly bigger on hover
		}}}>
							220K
						</Typography>
						<Typography variant='body2' sx={{color: '#222222'}}>Dollars savings</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h5' sx={{ color: '#222222' }}>
							120k
						</Typography>
						<Typography variant='body2' sx={{color: '#222222'}}>SAP Mobile Platform</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='h5' sx={{ color: '#222222' }}>
							100k
						</Typography>
						<Typography variant='body2' sx={{color: '#222222'}}>SAP CE</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

export default AppRat;
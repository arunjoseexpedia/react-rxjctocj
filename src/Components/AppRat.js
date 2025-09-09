import { Grid, Paper, Typography } from '@mui/material';

const AppRat = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper elevation={6}  sx={{
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 2,
	height: '97%',
	width:'100%',
	textAlign:'center'
  }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#0033A0',width:'190px',fontWeight: 900 }}>
					App Rat
				</Typography>
				<Grid container style={{justifyContent:'center',alignItems:'center'}} >
					<Grid item xs={12}>
						<Typography variant='h6' sx={{textAlign:'center',color:'#222222'}}>
						<center>241 K</center>	
						</Typography>
						<Typography variant='body2' sx={{color: '#222222'}}>
					Dollar Savings
				</Typography>
						</Grid>
					</Grid>
					<Grid container style={{justifyContent:'center',alignItems:'center'}} >
					<Grid item xs={12}>
					
						<Typography variant='h6' sx={{textAlign:'center',color:'#222222'}}>
						<center>110 K</center>	
						</Typography>
						<Typography variant='body2' sx={{color: '#222222'}}>
					SAP Mobile Platform
				</Typography>
						
					</Grid>
					</Grid>
					<Grid container style={{justifyContent:'center',alignItems:'center'}} >
					<Grid item xs={12}>
						<Typography variant='h6' sx={{textAlign:'center',color:'#222222'}}>
						<center>96 K</center>	
						</Typography>
						<Typography variant='body2' sx={{color: '#222222'}}>
					SAP CE
				</Typography>
						</Grid>
					</Grid>
							
					
				
			</Paper>
		</Grid>
	);
};

export default AppRat;
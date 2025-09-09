import { Grid, Paper, Typography } from '@mui/material';

const TechDebtReduction = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper elevation={6}  sx={{
    padding: 2,
    backgroundColor: '#08498D',
    borderRadius: 1.5,
	height: '98%',
	width:'100%',
	textAlign:'center'
  }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#fff',fontWeight: 900 }}>
					Tech Debt Reduction
				</Typography>
				<Grid container style={{display: 'flex',justifyContent:'center',alignItems:'center'}} >
					<Grid item xs={12}>
						<Typography variant='h2' sx={{textAlign:'center',color:'#CFD8DC'}}>
						<center>25%</center>	
						</Typography>
						
					</Grid>
					
				</Grid>
			</Paper>
		</Grid>
	);
	
};

export default TechDebtReduction;

import { Grid, Paper, Typography } from '@mui/material';

export const AIIndexWidget = () => {
	return (
		<Grid item xs={12} sx={{ height: '100%' }}>
			<Paper sx={{ p: 5 ,bgcolor: 'white', borderRadius:2,height: '84%' }}>
				<Typography variant='h6' gutterBottom sx={{ color: '#0033A0',fontWeight: 900 }}>
					AI Index
				</Typography>
				<Grid container spacing={1}>
					<Grid item xs={12}>
				<Typography variant='h4'  sx={{
		color: '#B0BEC5',
		transition: 'all 0.3s ease',
		'&:hover': {
			fontSize: '2.5rem',
			cursor:'pointer',
			color:'#222222' // slightly bigger on hover
		}}}>
					0.4 MM
				</Typography>
				</Grid>
					<Grid item xs={12}>
				
				</Grid>
				<Grid item xs={12}><div style={{display:'flex'}}>
				<Typography variant='body2' sx={{color: '#222222'}}>AI Index</Typography><Typography variant='body2' sx={{color: '#E30B5C', paddingLeft:'11px',paddingTop:'0px'}}>
						<b><i>	Savings </i></b>
						</Typography></div>
				</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
};

import { Box, Paper, Typography, Grid,Tooltip,Divider } from '@mui/material';

export const ServiceRequestSection = () => {
	const CustomTooltipContent = () => (
		<Box
		  sx={{
			width: 240,
			bgcolor: 'white',
			borderRadius: 1,
			boxShadow: 1,
			p: 2,
			cursor:'pointer'
		  }}
		>
		  <Typography
			variant="subtitle2"
			sx={{ fontWeight: 600, color: '#0033A0', mb: 1 }}
		  >
			Executions Overview
		  </Typography>
		  <Typography variant="body2" sx={{ color: 'black', mb: 1 }}>
			Daily execution count over the last 5 days. Trending upward due to
			increased testing activity.
		  </Typography>
		  <Divider sx={{ my: 1 }} />
		 
		</Box>
	  );
	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.7%',bgColor: '#0033A0' }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper elevation={4} sx={{ p: 3, bgcolor: 'white',height: '90%' }}>
			<Typography variant='h6' gutterBottom sx={{ color: '#0033A0',fontWeight: 900 }}>
			<Tooltip style={{cursor:'pointer'}} title={<CustomTooltipContent />}
  arrow
  placement="top"
  
>	Service Now Request </Tooltip>
			</Typography>

			<Grid container spacing={2} style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
				<Grid item xs={4}>
					<Typography variant='h4' sx={{ color: '#222222' }}>
					
 	9873 
						
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>Processed</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h4' sx={{ color: '#222222' }}>
						98
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>In-Progress</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant='h4' sx={{ color: '#222222' }}>
						57%
					</Typography>
					<Typography variant='body2' sx={{color: '#222222'}}>% Completed</Typography>
				</Grid>
			</Grid>
		</Paper>
		</Grid>
		</Grid>
	);
};

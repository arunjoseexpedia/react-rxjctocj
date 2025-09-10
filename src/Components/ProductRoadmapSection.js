import { Paper, Typography, Grid } from '@mui/material';

export const ProductRoadmapSection = () => {
	const roadmapItems = [
		{ name: 'Portal', year: '2027', type: 'Re-Platform' },
		{ name: 'WM', year: '2027', type: 'Re-Platform' },
		{ name: 'SolMan', year: '2027', type: 'Re-Platform' },
		{ name: 'SAP Gateway/Fiori', year: '2027', type: 'Re-Platform' },
		{ name: 'Live Compare', year: '2026', type: 'Upgrade' },
		{ name: 'Data Masking', year: '2026', type: 'Upgrade' },
	];

	return (
		<Grid container sx={{ width: '100%', height: '100%',padding:'.4%'  }}>
		<Grid item xs={12} sx={{ width: '100%', height: '100%',textAlign:'center' }} >
		<Paper elevation={4} sx={{ p: 5, bgcolor: 'white',borderRadius: 2  }} >
			<Typography variant='h6' gutterBottom sx={{ color: '#0033A0',fontWeight: 900 }}>
				Product EOL/Roadmap
			</Typography>

			<Grid container spacing={2} style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>
				{roadmapItems.map((item, index) => (
					<Grid item xs={2} key={index}>
						<Typography variant='body1' sx={{color: '#222222'}}>{item.name}</Typography>
						<Typography variant='h6' sx={{ color: '#00000066' }}>
							{item.year}
						</Typography>
						<Typography variant='body2' sx={{color: '#222222'}}>
							{item.type}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Paper>
		</Grid>
		</Grid>
	);
};

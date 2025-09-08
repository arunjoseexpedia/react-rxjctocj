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
		<Paper elevation={4} sx={{ p: 5, bgcolor: 'background.paper' }} >
			<Typography variant='h6' gutterBottom>
				Product EOL/Roadmap
			</Typography>

			<Grid container spacing={2}>
				{roadmapItems.map((item, index) => (
					<Grid item xs={2} key={index}>
						<Typography variant='body1'>{item.name}</Typography>
						<Typography variant='h6' color='warning.main'>
							{item.year}
						</Typography>
						<Typography variant='body2' color='success.main'>
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

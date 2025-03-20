import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from '@mui/material';

function App() {
	return (
		<>
			{/* Navbar */}
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' sx={{ flexGrow: 1 }}>
						MUI Dashboard
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>

			{/* Main Content */}
			<Container sx={{ marginTop: 4 }}>
				<Typography variant='h4' gutterBottom>
					Welcome to Your Dashboard
				</Typography>
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={3}>
						{/* Cards */}
						{Array.from({ length: 3 }).map((_, index) => (
							<Grid item xs={12} md={4} key={index}>
								<Card>
									<CardContent>
										<Typography variant='h6'>Card {index + 1}</Typography>
										<Typography variant='body2' color='text.secondary'>
											This is a simple card example using MUI components.
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</>
	);
}

export default App;

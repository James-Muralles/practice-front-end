import React from "react";
import { AppBar, Toolbar, Typography, ThemeProvider } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
// import {ThemeProvider} from 'styled-components'

const style = {
	background: 'red'
}
const AppHeader = () => (
	<AppBar style={style} position="static">
		<Toolbar>
			<Typography variant="h6" color="inherit">
				My React App
			</Typography>
		</Toolbar>
	</AppBar>
);

export default AppHeader;

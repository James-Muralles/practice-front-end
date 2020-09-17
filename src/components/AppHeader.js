import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
// import { red } from "@material-ui/core/colors";
import LoginButton from "./LoginButton";

const style = {
	background: "red",
};

const styles = {
	flex: {
		flex: 1,
	},
};

const AppHeader = ({ classes }) => (
	<AppBar style={style} position="static">
		<Toolbar>
			<Typography variant="h6" color="inherit">
				My React App
			</Typography>
			<div className={classes.flex} />
			<LoginButton />
		</Toolbar>
	</AppBar>
);

export default withStyles(styles)(AppHeader);


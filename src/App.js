import React, { Fragment } from "react";
import { Route } from 'react-router-dom';
import { ImplicitCallback } from '@okta/okta-react';
import { CssBaseline, withStyles } from "@material-ui/core";
import AppHeader from './components/AppHeader'
import Home from "./components/pages/Home";
import Weather from "./components/Weather"

const styles = (theme) => ({
	main: {
		padding: theme.spacing(3),
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(2),
		},
	},
});

const App = ({ classes }) => (
	<Fragment>
		<CssBaseline />
		<AppHeader />
		<main className={classes.main}>
			<Home />
			<Weather/>
			<Route exact path="/" component={Home} /> 
		</main>
	</Fragment>
);

export default withStyles(styles)(App);

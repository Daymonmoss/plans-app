import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import React from "react";
import ReactDOM from "react-dom";
import {Shell} from "./components/Shell/Shell";
import {Editor} from "./components/Editor/Editor";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Root = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path={'/editor'} component={Editor}/>
				<Route path={'/'} component={Shell}/>
			</Switch>
		</BrowserRouter>
		)
}

ReactDOM.render(<Root/>, document.getElementById("root"));

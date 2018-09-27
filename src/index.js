import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import React from "react";
import ReactDOM from "react-dom";
import {Player} from "./components/Player/Player";
import {Editor} from "./components/Editor/Editor";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Root = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path={'/editor'} component={Editor}/>
				<Route path={'/'} component={Player}/>
			</Switch>
		</BrowserRouter>
		)
}

ReactDOM.render(<Root/>, document.getElementById("root"));

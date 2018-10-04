import "./style.scss";

import React from "react";
import ReactDOM from "react-dom";
import {Shell} from "./components/Shell/Shell";
//import {Editor} from "./components/Editor/Editor";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Root = (props) => {
	return (
		<BrowserRouter>
			<Switch>
				{/*<Route path={'/editor'} component={Editor}/>*/}
				<Route path={'/'} render={()=><Shell plansType={props.plansType}/>} />
			</Switch>
		</BrowserRouter>
	)
}

window.planWidget = (el, config) => {
	ReactDOM.render(<Root plansType={config.plansType}/>, document.querySelector(el));
}

//ReactDOM.render(<Root/>, document.getElementById("root"));

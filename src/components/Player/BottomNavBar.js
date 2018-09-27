import {routes} from "../../routes";
import React from 'react';
import {withRouter} from "react-router-dom";

@withRouter
export class BottomNavBar extends React.Component {
	constructor(props) {
		super(props);
		this.getNextRoute = this.getNextRoute.bind(this);
	}

	render() {
		return (

				<div className={"row  my-5"}>
					<div className="col-12">
						<hr/></div>
					<div className="col-12 text-right mb-3">
						<button className={"btn btn-primary"} onClick={this.onForward.bind(this)}>Следующий шаг {(!!this.getNextRoute() ? `(${this.getNextRoute().label})` : ``)}</button>
					</div>
				</div>

		)
	}

	getNextRoute(){
		let currentObject = routes.find(route => route.path === this.props.location.pathname);
		let nextObjectIndex = routes.indexOf(currentObject) + 1;
		return routes[nextObjectIndex];
	}

	onForward() {
		let prevRoute = this.getNextRoute();
		if (!!prevRoute) this.props.history.push(prevRoute.path)
	}
}





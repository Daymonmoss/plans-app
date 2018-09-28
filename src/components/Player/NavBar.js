import React from 'react';
import {routes} from "../../routes";
import {NavLink, withRouter} from 'react-router-dom';
import BackButton from "../../assets/back.svg";
import RestartButton from '../../assets/restart.svg';

import {AppStore} from "../../store";

@withRouter
export class NavBar extends React.Component {
	render() {
		return (
			<div className="row align-items-center my-5">
				<div className="col-auto"><BackButton size={24} onClick={this.onBackward.bind(this)}/></div>
				<div className="col text-center">
					<div className="NavBar">
						{routes.map((route, key) => (
							<NavLink exact className={"NavBar__element NavBarElement"}
									 activeClassName={'NavBarElement_active'}
									 to={route.path}
									 key={key}

							>
							<img src={route.icon} className={"NavBarElement__image"} alt={""}/>
							<div className="NavBarElement__label">{route.label}</div>
							</NavLink>
						))}
					</div>
				</div>
				<div className="col-auto">
					<RestartButton size={24} onClick={this.onStartAgain.bind(this)}/>
				</div>
				<div className="col-12 mt-3">
					<hr/>
				</div>
			</div>
		)
	}


	onBackward() {
		let currentObject = routes.find(route => route.path === this.props.location.pathname);

		let prevObjectIndex = routes.indexOf(currentObject) - 1;
		if (!!routes[prevObjectIndex]) this.props.history.push(routes[prevObjectIndex].path)
	}


	onStartAgain() {
		AppStore.toDefaultState();
		// Doesn't mean anything, just pushing to some non-existing page before pushing to starting page
		// Thats the way to redraw component if we already on starting page
		// It doesn't work also
		this.props.history.push('/GEN_RESET');
		this.props.history.push(routes[0].path);
	}
}


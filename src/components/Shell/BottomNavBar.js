import {getNextRoute, isLastRoute} from "../../routes";
import React from 'react';
import {withRouter} from "react-router-dom";

@withRouter
export class BottomNavBar extends React.Component {
	render() {
		return (
		
		
			<div className={"form-submit row"}>
				<div className="col-12">
					<hr/>
				</div>
				<div className="col-12 text-center">
				{!isLastRoute(this.props.location.pathname) &&
					<button className={"btn btn-success col-sm-3 font-weight-bold"}
							onClick={this.onForward.bind(this)}>Далее</button>}
				</div>
				<div className="col-12">
					<hr/>
				</div>
			</div>

		)
	}

	onForward() {
		if (!!getNextRoute(this.props.location.pathname)) this.props.history.push(getNextRoute(this.props.location.pathname).path)
	}
}





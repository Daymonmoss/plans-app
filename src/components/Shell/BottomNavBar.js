import {getNextRoute, isLastRoute} from "../../routes";
import React from 'react';
import {withRouter} from "react-router-dom";

@withRouter
export class BottomNavBar extends React.Component {
	render() {
		return (
			<div>
				{!isLastRoute(this.props.location.pathname) && <div className={"form-submit row"}>
					<div className="col-12">
						<hr/>
					</div>
					<div className="row center-block">
					<div className='col-sm-auto'>
					    <button className={"btn btn-primary  font-weight-bold"}
								onClick={this.onForward.bind(this)}>Посмотреть планировки
						</button></div>
						<div className='col-sm-auto'>
						<button className={"btn btn-success  font-weight-bold"}
								onClick={this.onForward.bind(this)}>Далее
						</button></div>

					</div>
					<div className="col-12">
						<hr/>
					</div>
				</div>
				}
			</div>

		)
	}

	onForward() {
		if (!!getNextRoute(this.props.location.pathname)) this.props.history.push(getNextRoute(this.props.location.pathname).path)
	}
}





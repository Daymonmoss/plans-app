import {getNextRoute, isLastRoute} from "../../routes";
import React from 'react';
import {withRouter} from "react-router-dom";
import { Link } from 'react-router-dom';

@withRouter
export class BottomNavBar extends React.Component {
	render() {
		return (
			<div>
				{!isLastRoute(this.props.location.pathname) && <div className={"form-submit row"}>
					<div className="col-12">
						<hr/>
					</div>
					<div className="col-12">
						<div className="row">
							<div className='col-sm-6 text-center'>
								<Link to={`./result`}>
										
								<button className={"btn btn-primary  font-weight-bold"}>Посмотреть планировки</button>
										
										
										</Link>
								</div>
							<div className='col-sm-6 text-center'>
								<button className={"btn btn-success  font-weight-bold"}
										onClick={this.onForward.bind(this)}>Далее -->
								</button></div>

						</div>
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





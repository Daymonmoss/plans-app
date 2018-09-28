import React from "react";
import {NotFound} from "./NotFound";
import {Route, Switch} from "react-router-dom";

import {routes} from "../../routes";
import {NavBar} from "./NavBar";
import {BottomNavBar} from "./BottomNavBar";
import {AppStore} from "../../store";
import {PhoneCollector} from "./PhoneCollector";
import {Provider} from "mobx-react";

export class Player extends React.Component {
	render() {
		return (
			<Provider AppStore={AppStore}>
				<div className="container">
					<div className="row">
						<div className="col-12">

							<NavBar/>
							<Switch>
								{routes.map(({path, component}, key) => {
									let Component = component;
									return (
										<Route exact path={path} render={() => <Component store={AppStore}/>}
											   key={key}/>
									)
								})}
								<Route exact component={NotFound}/>
							</Switch>
							<BottomNavBar/>
							<PhoneCollector/>

						</div>
					</div>
				</div>
			</Provider>

		)
	}
}

import React from "react";
import {NotFound} from "./NotFound";
import {Route, Switch} from "react-router-dom";

import {routes} from "../../routes";
import {NavBar} from "./NavBar";
import {BottomNavBar} from "./BottomNavBar";
import {AppStore} from "../../store";
import {PhoneCollector} from "./PhoneCollector";
import {Provider} from "mobx-react";

export class Shell extends React.Component {
	render() {
		return (
			<Provider AppStore={AppStore}>
				<div className="container">
					<div className="row">
						<div className="col-12">
						<header>
						    <h2 className="h25, text-center">Информация о Вашей будущей квартире</h2>
							<p className="h25, text-center">Почти все поля необязательны для заполнения, но благодаря этим данным мы создадим максимально подходящие для Вас планировки.</p>
						</header>
							[DEBUG] Запросов к серверу в очереди:  {AppStore.requestsPending}
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
							<footer>
							<BottomNavBar/>
							<PhoneCollector/>
							</footer>
						</div>
					</div>
				</div>
			</Provider>

		)
	}
}

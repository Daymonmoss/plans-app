import React from 'react';
import {inject, observer} from "mobx-react";
import {PlanView} from "./PlanView";

@inject('AppStore')
@observer
export class SuggestedPlans extends React.Component {
	componentDidMount() {
		console.log('Did results mount!');
		this.props.AppStore.getResults();
	}

	render() {
		return (
			
			<div className={"row no-gutters"}>

				{this.props.AppStore.loading && (
					<div className={"col-12"}><div className="progress">

					<div
						className="progress-bar progress-bar-striped progress-bar-animated"
						role="progressbar"
						style={{'width': '100%'}}>&nbsp;</div>
				</div></div>)}
				{!this.props.AppStore.loading && !!this.props.AppStore.results.length && this.props.AppStore.results.map((result, key) => (
				<div className="col" key={key}><PlanView data={result}/></div>
				))}
				{!this.props.AppStore.loading && !this.props.AppStore.results.length && <div>Ничего не найдено, что вы там выбрали? 0_0</div>}
			</div>
			
		)
	}
}
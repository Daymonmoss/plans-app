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
			<div className={"col"}>
				{this.props.AppStore.loading && <div className="progress">
					<div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
						 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{'width': '75%'}}></div>
				</div>}
				{!this.props.AppStore.loading && this.props.AppStore.results.map((result, key) => (
					<PlanView data={result} key={key}/>
				))}
			</div>
		)
	}
}
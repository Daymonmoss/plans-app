import React from 'react';
import {inject, observer} from "mobx-react";
import {PlanView} from "./PlanView";

@inject('AppStore')
@observer
export class SuggestedPlans extends React.Component {
	componentDidMount() {
		this.props.AppStore.getResults();
	}

	render() {
		return (
			<div className={"сol-sm-6"}>
				{this.props.AppStore.results.map((result, key) => (
					<div className="row"><PlanView data={result} key={key}/></div>
				))}
			</div>
		)
	}
}
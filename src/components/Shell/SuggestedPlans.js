import React from 'react';
import {inject} from "mobx-react";
import {PlanView} from "./PlanView";
import {observer} from "mobx-react";

@inject('AppStore')
@observer
export class SuggestedPlans extends React.Component{
	componentDidMount(){
		this.props.AppStore.getResults();
	}

	render(){
		return(
			<div className={"row"}>
			{this.props.AppStore.results.map( (result, key) => (
				<div className={"col"}><PlanView data={result} key={key}/></div>
			))}
			</div>
		)
	}
}
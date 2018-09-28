import React from 'react';
import {FinalSubmission} from "./FinalSubmission";
import {inject} from "mobx-react";

@inject('AppStore')
export class Result extends React.Component{
	render(){
		return(
			<div>
				<FinalSubmission/>
			</div>

		)
	}

	componentDidMount(){
		this.props.AppStore.getResults();
	}
}
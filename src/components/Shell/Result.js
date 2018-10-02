import React from 'react';
import {FinalSubmission} from "./FinalSubmission";
import {inject} from "mobx-react";
import {SuggestedPlans} from "./SuggestedPlans";

@inject('AppStore')
export class Result extends React.Component{
	render(){
		return(
			<div>
				<SuggestedPlans/>
				<FinalSubmission/>
			</div>

		)
	}


}
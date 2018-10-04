import React from 'react';


// const ExplainedView = props => <div>
// 	{Object.keys(props.elements).map((key, index) => (
// 		<div><b>{key}</b>: {props.elements[key].join(', ')}</div>
// 	))}
// </div>

export class PlanView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			explained: false,
		}
	}

	render() {
		let plan = this.props.data;
		return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{plan.planName}</h5>
			</div>
			<img className="card-img-bottom img-fluid" src={plan.planImage} alt={plan.planName} />

		</div>)
	}
}
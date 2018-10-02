import React from 'react';


const ExplainedView = props => <div>
	{Object.keys(props.elements).map((key, index)=>(
		<div><b>{key}</b>: {props.elements[key].join(', ')}</div>
	))}
</div>

export class PlanView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			explained:false,
		}
	}

	render() {
		let {plan, searchResult} = this.props.data;
		return (<div className="card">
			<img className="card-img-top" src={plan.planImage} alt={plan.planName}/>
			<div className="card-body">
				<h5 className="card-title">{plan.planName} ({searchResult.score} очков)</h5>

				<ul className="list-group list-group-flush">
					<li className="list-group-item">Очков: <b>{searchResult.score}</b></li>
					<li className="list-group-item">
						<h4>Позиций совпало</h4>
						<ExplainedView elements={searchResult.matched}/>
					</li>
					<li className="list-group-item">
						<h4>Позиций не совпало: </h4>
						<ExplainedView elements={searchResult.notMatched}/>
						
					</li>

				</ul>
			</div>
		</div>)
	}
}
import React from 'react';
import {observer} from "mobx-react";
import {linkedControl} from "../../foundation/utils";
import {Checkbox} from "../FormControls";

@observer
class BedroomForm extends React.Component {
	constructor(props) {
		super(props);
		this.store = props.store.formData.bedroomItems;
	}

	render() {
		return (
			<form>
				<div className="form-row form-group">
					<div className="col-12">
						<h5>Предметы спальни:</h5>
					</div>
					<div className="col-6">

						<Checkbox
							label={"Диван-кровать"}
							{...linkedControl(this.store, 'bedCoach', true)}
						/>

						<Checkbox
							label={"Кровать"}
							{...linkedControl(this.store, 'bed', true)}

						/>
						<Checkbox
							label={"Комод"}
							{...linkedControl(this.store, 'bureau', true)}
						/>
						<Checkbox
							label={"Телевизор"}
							{...linkedControl(this.store, 'tv', true)}
						/>
						<Checkbox
							label={"Туалетный столик"}
							{...linkedControl(this.store, 'dresser', true)}
						/>
						<Checkbox
							label={"Прикроватные тумбочки"}
							{...linkedControl(this.store, 'bedsideTable', true)}
						/>

						<Checkbox
							label={"Компьютерный стол"}
							{...linkedControl(this.store, 'computerTable', true)}
						/>


					</div>
				</div>
			</form>)
	}
}

export {BedroomForm}
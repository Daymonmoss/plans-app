import React from 'react';
import {observer} from "mobx-react";
import {linkedControl} from "../../foundation/utils";
import {Checkbox} from "../FormControls";




@observer
class BathroomForm extends React.Component {
	constructor(props) {
		super(props);
		this.store = props.store.formData.bathroomItems;
	}

	render() {
		return (
			<form>
				<div className="form-row form-group">
						<div className="col-12">
							<h5>Предметы санузла:</h5>
						</div>
					<div className="col-6">
						<Checkbox
							label={"Ванна"}
							{...linkedControl(this.store, 'bath', true)}

						/>
						<Checkbox
							label={"Душевая кабина"}
							{...linkedControl(this.store, 'showerCabin', true)}
						/>
						<Checkbox
							label={"Унитаз"}
							{...linkedControl(this.store, 'toilet', true)}
							disabled
						/>
						<Checkbox
							label={"Биде"}
							{...linkedControl(this.store, 'bidet', true)}
						/>
						<Checkbox
							label={"Стиральная машина"}
							{...linkedControl(this.store, 'washingMachine', true)}
						/>

						<Checkbox
							label={"Полотенцесушитель"}
							{...linkedControl(this.store, 'heatedTowelRail', true)}
						/>
						<Checkbox
							label={"Пенал для хранения"}
							{...linkedControl(this.store, 'case', true)}
						/>
					</div>




				</div>
			</form>)
	}
}

export {BathroomForm}
import React from 'react';
import {observer} from "mobx-react";
import {linkedControl} from "../../foundation/utils";
import {Checkbox, LinkedRadioGroup} from "../FormControls";



@observer
class LivingRoomForm extends React.Component {
	constructor(props) {
		super(props);
		this.store = props.store.formData.livingRoomItems;
	}

	render() {
		return (
			<form>
				<div className="form-row form-group">
					<div className="col-12">
						<h5 className={"mb-3"}>Предметы гостиной:</h5>
					</div>
					<div className="col-6">

							<Checkbox
								label={"Диван"}
								{...linkedControl(this.store, 'coach', true)}
							/>
						<div className={"ml-3"}>
							<LinkedRadioGroup
								disabled={!this.store.coach}
								linkObject={this.store}
								options={[
									{linkKey: 'straightCoach', label: 'Прямой'},
									{linkKey: 'cornerCoach', label: 'Угловой'},
									{linkKey: 'armchairCoach', label: 'Кресло'},
									{linkKey: 'bedCoach', label: 'Диван-кровать'}
								]}
							/>
						</div>
						<Checkbox
							label={"Стеллаж для книг"}
							{...linkedControl(this.store, 'booksRack', true)}

						/>
						<Checkbox
							label={"Шкаф для одежды"}
							{...linkedControl(this.store, 'wardrobe', true)}
						/>
						<Checkbox
							label={"Комод"}
							{...linkedControl(this.store, 'bureau', true)}
						/>
						<Checkbox
							label={"Комьютерный стол"}
							{...linkedControl(this.store, 'computerTable', true)}
						/>
						<Checkbox
							label={"Телевизор"}
							{...linkedControl(this.store, 'tv', true)}
						/>

						<Checkbox
							label={"Журнальный столик"}
							{...linkedControl(this.store, 'coffeeTable', true)}
						/>


					</div>
				</div>
			</form>)
	}
}

export {LivingRoomForm}
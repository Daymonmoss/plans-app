import React from 'react';
import {inject, observer} from "mobx-react";
import {linkedControl} from "../../foundation/utils";
import {Checkbox, LinkedRadioGroup} from "../FormControls";



@observer
class KitchenForm extends React.Component {
	constructor(props) {
		super(props);
		this.store = props.store.formData.kitchenItems;
	}

	render() {
		return (
			<form>
				<div className="form-row form-group">
					<div className="col-12">
						<h5 className={"mb-3"}>Предметы кухни:</h5>
					</div>
					<div className="col-6">

							<Checkbox
								label={"Варочная панель"}
								{...linkedControl(this.store, 'cookingSurface', true)}
							/>
						<div className={"ml-3"}>
							<LinkedRadioGroup
								disabled={!this.store.cookingSurface}
								linkObject={this.store}
								options={[
									{linkKey: 'fourBurnersSurface', label: 'Четыре комфорки'},
									{linkKey: 'twoBurnersSurface', label: 'Две комфорки'}
									
								]}
							/>
						</div>
						<Checkbox
							label={"Холодильник"}
							{...linkedControl(this.store, 'refrigerator', true)}
                            disabled
						/>
						<Checkbox
							label={"Духовой шкаф"}
							{...linkedControl(this.store, 'owen', true)}
						/>
						<Checkbox
							label={"Микроволновая печь"}
							{...linkedControl(this.store, 'microwave', true)}
						/>
						<Checkbox
							label={"Круглый стол"}
							{...linkedControl(this.store, 'roundTable', true)}
						/>
						<Checkbox
							label={"Прямоугольный стол"}
							{...linkedControl(this.store, 'squareTable', true)}
						/>

						<Checkbox
							label={"Барная стойка"}
							{...linkedControl(this.store, 'bar', true)}
						/>
						<Checkbox
							label={"Телевизор"}
							{...linkedControl(this.store, 'tv', true)}
						/>
						<Checkbox
							label={"Стиральная машина"}
							{...linkedControl(this.store, 'washingMachine', true)}
						/>

					</div>
				</div>
			</form>)
	}
}

export {KitchenForm}
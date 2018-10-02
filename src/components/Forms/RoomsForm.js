import {linkedControl} from "../../foundation/utils";
import {Checkbox} from "../FormControls";
import React from "react";
import {observer} from "mobx-react";

@observer
export class RoomsForm extends React.Component {
	constructor(props) {
		super(props);
		this.store = props.store;
	}

	render() {
		return (<form>
			<div className="form-group col-sm-6">
				<label className={"font-weight-bold"}>Количество проживающих:</label>
				<div className="row">
					<div className="row mx-1">
						<label className={"col my-auto"}>Взрослые</label>
						<select className={"form-control col"}{...linkedControl(this.store.occupants, 'adults')}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>
					</div>
					<div className="row mx-1">
						<label className={"col my-auto"}>Дети</label>
						<select className={"form-control col"}{...linkedControl(this.store.occupants, 'children')}>
							<option value="0">0</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
						</select>
					</div>
				</div>
			</div>

			{/* CHECKBOXES */}

			<div className="col-sm-6">

				<label className={"font-weight-bold"}>Помещения, которые необходимо разместить</label>

				<div className="row">
					<div className="col">
						<Checkbox
							label={"Прихожая"}
							{...linkedControl(this.store.rooms, 'lobby', true)}
							disabled
						/>
						<Checkbox
							label={"Ванная комната"}
							{...linkedControl(this.store.rooms, 'bathroom', true)}
							disabled
						/>
						<Checkbox
							label={"Кухня"}
							{...linkedControl(this.store.rooms, 'kitchen', true)}
							disabled
						/>
						<Checkbox
							label={"Столовая"}
							{...linkedControl(this.store.rooms, 'diningRoom', true)}
						/>
						<Checkbox
							label={"Гостиная"}
							{...linkedControl(this.store.rooms, 'livingRoom', true)}
						/>
					</div>
					<div className="col">
						<Checkbox
							label={"Спальня"}
							{...linkedControl(this.store.rooms, 'bedroom', true)}
						/>
						<Checkbox
							label={"Кабинет"}
							{...linkedControl(this.store.rooms, 'cabinette', true)}
						/>
						<Checkbox
							label={"Гардеробная"}
							{...linkedControl(this.store.rooms, 'wardrobe', true)}
						/>
						<Checkbox
							label={"Детская"}
							{...linkedControl(this.store.rooms, 'childrenRoom', true)}
						/>
						<Checkbox
							label={"Кладовая"}
							{...linkedControl(this.store.rooms, 'pantry', true)}
						/>
					</div>
				</div>
			</div>
		</form>)
	}
}
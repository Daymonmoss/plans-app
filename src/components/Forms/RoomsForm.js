import {linkedControl} from "../../foundation/utils";
import {Checkbox} from "../FormControls";
import React from "react";
import {observer} from "mobx-react";

@observer
export class RoomsForm extends React.Component{
	constructor(props) {
		super(props);
		this.store = props.store;
	}
	render(){
		return(<form>
			<div className="form-row form-group">
				<div className="col-6">
					<label>Количество взрослых</label>
					<select className={"form-control"}{...linkedControl(this.store.occupants, 'adults')}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</select>
				</div>
				<div className="col-6">
					<label htmlFor="">Количество детей</label>
					<select className={"form-control"} {...linkedControl(this.store.occupants, 'children')}>
						<option value="0">Без детей</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
					</select>
				</div>
			</div>
			{/* CHECKBOXES */}
			<div className="form-row form-group mt-5">

				<h3 className={"mb-3"}>Комнаты, которые необходимо разместить</h3>

				<div className="col-6">
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
				<div className="col-6">
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
		</form>)
	}
}
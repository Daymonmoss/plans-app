import React from 'react';
import {inject, observer} from "mobx-react";
import {linkedControl} from "../../foundation/utils";
import {Checkbox, Input} from "../FormControls";
import {RoomsForm} from "./RoomsForm";


@observer
class MainForm extends React.Component {
	constructor(props) {
		super(props);
		this.store = props.store.formData;
	}

	render() {
		return (
			<div>
			<form>

				<div className="form-group col-sm-6">
					{/*<h3 className={"mb-3"}>Основная информация</h3>*/}
					<Input
						type="text"
						label={"Ваше имя"}
						placeholder={"Иванов Иван Иванович"}
						required
						{...linkedControl(this.store, 'customerName')}
					/>
					<Input
						type="email"
						label={"Электронная почта"}
						placeholder={"example@mail.com"}
						required
						{...linkedControl(this.store, 'customerEmail')}
					/>
				</div>
			</form>
			<RoomsForm store={this.store}/>
			</div>)
	}
}

export {MainForm}
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

				<div className="form-group">
					<h3 className={"mb-3"}>Основная информация</h3>
					<Input
						type="text"
						label={"Ваше имя"}
						placeholder={"Ваше имя"}
						required
						{...linkedControl(this.store, 'customerName')}
					/>
					<Input
						type="email"
						label={"Ваша электронная почта"}
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
import React from 'react';
import {Input} from "../FormControls";
import {linkedControl} from "../../foundation/utils";
import {inject} from "mobx-react";

@inject('AppStore')
export class FinalSubmission extends React.Component {
	render() {
		return (
		<div className="row">
			<div className="col-4">
			<form>
			<div className="form-group align-items-center justify-content-center form-container">
				<Input
					type="text"
					label={"Ваше имя"}
					placeholder={"Ваше имя"}
					required
					{...linkedControl(this.props.AppStore, 'customerName')}
				/>
				<Input
					type="email"
					label={"Ваша электронная почта"}
					placeholder={"example@mail.com"}
					required
					{...linkedControl(this.props.AppStore, 'customerEmail')}

				/>
			</div>

		</form>
			</div>
		</div>
		)

	}


}
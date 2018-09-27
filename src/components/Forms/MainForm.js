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
				<RoomsForm store={this.store}/>
			)
	}
}

export {MainForm}
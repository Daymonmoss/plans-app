import React from 'react';
import {observer} from "mobx-react";
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
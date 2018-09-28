import React from 'react';
import {inject, observer} from "mobx-react";
import {LinkedRadioGroup} from "../FormControls";


export class RadioGroup extends React.Component {

	static getDerivedStateFromProps(props, state) {
		return {
			value: props.value,
		}
	}

	render() {
		return (<div>
			{this.props.children.map(Child => console.log(<Child/>))}
		</div>)
	}

}



@observer
class LobbyForm extends React.Component {
	constructor(props) {
		super(props);
		this.store = props.store.formData.lobbyItems;
	}

	render() {
		return (
			<form>
				<div className="form-row form-group">
					<div className="col-12">
						<h5 className={"mb-3"}>Предметы прихожей:</h5>
						<LinkedRadioGroup
							linkObject={this.store}
							options={[
								{label:'Крючки и калошница', linkKey:'hooksAndKaloshnitca'},
								{label:'Закрытый шкаф', linkKey:'locker'},
								{label:'И то, и другое', linkKey:'allOptions'},
							]}
						/>
					</div>
				</div>
			</form>)
	}
}

export {LobbyForm}
import React from 'react';
import {observer} from "mobx-react";
import {LinkedRadioGroup} from "../FormControls";

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
						<h5>Предметы прихожей:</h5>
						<LinkedRadioGroup
							linkObject={this.store}
							options={[
								{label: 'Крючки и калошница', linkKey: 'hooksAndKaloshnitca'},
								{label: 'Закрытый шкаф', linkKey: 'locker'},
								{label: 'И то, и другое', linkKey: 'allOptions'},
							]}
						/>
					</div>
				</div>
			</form>)
	}
}

export {LobbyForm}
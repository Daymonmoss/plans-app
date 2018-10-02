import {inject, observer} from "mobx-react";
import React from 'react';
import {getBase64} from "../../foundation/utils";

@inject('EditorStore')
@observer
export class FileSelect extends React.Component {
	constructor(props) {
		super(props);
		this.store = props.EditorStore;
	}

	render() {
		return (
			<div className={" mb-3 p-3 border border-ok rounded"}>
				<div className="form-group">
					<label htmlFor="fileselect">Изображение планировки</label>
					<input type="file" className="form-control-file" id="fileselect"
						   onChange={this.onFileChange.bind(this)}/>
					</div>
					{!!this.props.EditorStore.image && <img src={this.props.EditorStore.image} alt="" className="img-fluid rounded"/>}
			</div>)
	}

	onFileChange(event) {

		getBase64(event.target.files[0]).then(result => this.props.onChange(result));

	}

	onFileDelete(event) {

	}
}
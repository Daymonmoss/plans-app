import React from 'react';
import {EditorStore} from "../../store/editor";
import {FileSelect} from "../Player/FileSelect";
import {observer, Provider} from "mobx-react";
import {RoomsForm} from "../Forms/RoomsForm";
import {BathroomForm} from "../Forms/BathroomForm";
import {Input} from "../FormControls";
import {linkedControl} from "../../foundation/utils";
import {LobbyForm} from "../Forms/LobbyForm";
import {KitchenForm} from "../Forms/KitchenForm";
import {LivingRoomForm} from "../Forms/LivingRoomForm";
import {BedroomForm} from "../Forms/BedroomForm";
import saveAs from 'file-saver';

@observer
export class Editor extends React.Component {
	constructor(props) {
		super(props);
		this.store = EditorStore;
	}

	render() {
		return (
			<Provider EditorStore={EditorStore}>

				<div className={"container"}>
					<div className="col-lg-8 offset-lg-2">
						<h1>Редактор планировок</h1>

						<div className="mb-1">
							<Input label={"Название плана"} value={"Тестовый план"}
								   {...linkedControl(this.store, 'name')}
							/>
						</div>

							<FileSelect
								value={this.store.image}
								onChange={this.onFileChange.bind(this)}
							/>

						<RoomsForm store={this.store.formData}/>
						<LobbyForm store={this.store}/>
						<BathroomForm store={this.store}/>
						<KitchenForm store={this.store}/>
						<LivingRoomForm store={this.store}/>
						<BedroomForm store={this.store}/>
						<hr/>
						<button onClick={this.onJsonSave.bind(this)} className={"btn btn-primary"}>Скачать файл планировки</button>
					</div>
					</div>
			</Provider>
		)
	}

	onFileChange(file) {
		this.store.image = file;

	}

	onJsonSave(event){
		let blob = new Blob([JSON.stringify(this.store.toJS())], {type: "application/json"});
		saveAs(blob, "plan.json")
	}

}
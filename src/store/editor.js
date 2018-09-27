import {observable, autorun, toJS, action, set} from "mobx";
import defaultState from './defaultState';
import {AppConfig} from "../config";


class Store {
	@observable formData;
	@observable image = null;
	@observable name = 'Новый план помещения';

	@action toDefaultState(){
		this.formData = defaultState;
	}

	constructor(props) {
		this.toDefaultState();
	}

	toJS(){
		let obj = {
			planName:this.name,
			planImage:this.image,
			...this.formData
		};

		delete obj.customerName;
		delete obj.customerEmail;
		return obj;
	}
}

let EditorStore = new Store();

export {EditorStore};

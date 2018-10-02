import {action, observable} from "mobx";
import defaultState from './defaultState';


class Store {
	@observable formData;
	@observable image = null;
	@observable name = 'Новый план помещения';

	constructor(props) {
		this.toDefaultState();
	}

	@action toDefaultState() {
		this.formData = defaultState;
	}

	toJS() {
		let obj = {
			planName: this.name,
			planImage: this.image,
			...this.formData
		};

		delete obj.customerName;
		delete obj.customerEmail;
		return obj;
	}
}

let EditorStore = new Store();

export {EditorStore};

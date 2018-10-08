import {action, observable} from "mobx";
import defaultState from './defaultState';


class Store {
	@observable formData;
	@observable plans = [];
	@observable currentPlan = {};
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


	}
}

let EditorStore = new Store();

export {EditorStore};

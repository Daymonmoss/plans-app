import {action, autorun, observable, set, toJS} from "mobx";
import defaultState from './defaultState';
import {AppConfig} from "../config";



class Store {
	@observable requestsPending = 0;
	@observable formData = {};
	@observable customerName = '';
	@observable customerEmai = '';
	@observable results = [];
	@observable plansType = null;
	@observable loading = false;

	constructor(props) {
		this.toDefaultState();
		if (AppConfig.spoolStore) this.restore();
	}

	@action restore() {
		let state = localStorage.getItem(AppConfig.localStorageKey);
		set(this.formData, JSON.parse(state))
	}

	@action toDefaultState() {
		this.formData = defaultState;
	}

	@action
	async getResults() {
		this.loading = true;
		const rawResponse = await fetch(`${AppConfig.apiAddress}getPlan`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.toJS()),
		});

		const content = await rawResponse.json();
		if(AppConfig.debug){
			this.results = content;
			this.loading = false;
		}else{
			this.results = content;
			this.loading = false;
		}




	}

	toJS() {
		let data = toJS(this.formData);
		data.plansType = this.plansType;
		return data;
	}

}

let AppStore = new Store();

if (AppConfig.spoolStore) {
	autorun(() => {
		localStorage.setItem(AppConfig.localStorageKey, JSON.stringify(AppStore.toJS()));
	})
}

export {AppStore};

import {observable, autorun, toJS, action, set} from "mobx";
import defaultState from './defaultState';
import {AppConfig} from "../config";



class Store {
	@observable requestsPending = 0;
	@observable formData = {};
	@observable customerName = '';
	@observable customerEmai = '';
	@observable results = [];

	@action restore() {
		let state = localStorage.getItem(AppConfig.localStorageKey);
		set(this.formData, JSON.parse(state))
	}

	@action toDefaultState(){
		this.formData = defaultState;
	}

	constructor(props) {
		this.toDefaultState();
		if(AppConfig.spoolStore) this.restore();
	}

	@action async getResults(){

		const rawResponse = await fetch(`${AppConfig.apiAddress}getPlan`, {
			method:'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body:JSON.stringify(this.toJS()),
		});

		const content = await rawResponse.json();

		this.results = content;





	}

	toJS(){
		return toJS(this.formData);
	}

}

let AppStore = new Store();

if(AppConfig.spoolStore){
	autorun(()=>{
		localStorage.setItem(AppConfig.localStorageKey, JSON.stringify(AppStore.toJS()));
	})
}

export {AppStore};

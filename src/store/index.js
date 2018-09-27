import {observable, autorun, toJS, computed, action, set} from "mobx";
import defaultState from './defaultState';
import {AppConfig} from "../config";


class Store {
	@observable formData;

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

}

let AppStore = new Store();

if(AppConfig.spoolStore){
	autorun(()=>{
		localStorage.setItem(AppConfig.localStorageKey, JSON.stringify(toJS(AppStore.formData)));
	})
}

export {AppStore};

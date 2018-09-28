import {AppConfig} from "../config";

export const getPlan = searchObject => fetch(`${AppConfig.apiAddress}sendmail`, {
	method:'POST',
	body:searchObject,
});
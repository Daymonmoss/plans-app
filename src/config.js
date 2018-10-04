const hostname = process.env.REACT_APP_URL;

const AppConfig = {
	spoolStore: true,
	localStorageKey: 'APP_TEST',
	debug:true,
	apiAddress: `${hostname}/api/`
}

export {AppConfig}



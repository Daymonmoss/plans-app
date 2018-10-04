const port = process.env.PORT || 80;
const hostname = process.env.REACT_APP_HOST || 'localhost'
const protocol = !!process.env.REACT_APP_HOST ? 'http' : 'http';
const AppConfig = {
	spoolStore: true,
	localStorageKey: 'APP_TEST',
	debug:true,
	apiAddress: `${protocol}://${hostname}:${port}/api/`
}

export {AppConfig}



const port = process.env.PORT || 80;
const hostname = process.env.H_APP_NAME || 'localhost'
const protocol = !!process.env.H_APP_NAME ? 'http' : 'http';
const AppConfig = {
	spoolStore: true,
	localStorageKey: 'APP_TEST',
	debug:true,
	apiAddress: `${protocol}://${hostname}:${port}/api/`
}

export {AppConfig}



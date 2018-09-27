/**
 * Binds EventTarget to object in two-way fashion
 * @example <input {...linkedObject(object, 'customerName')}/>
 * @param object object to link to and from
 * @param name key in object to bind to
 * @return {}
 */
export const linkedControl = (object, name, checkable = false) => {

	const handler = event => {

		if (event.target.type === 'radio' || event.target.type === 'checkbox') {
			object[name] = !!event.target.checked
		} else {
			object[name] = event.target.value
		}
	};
	let linker;

	if (checkable) {

		linker = {
			onChange: handler,
			checked: object[name],
		}
	} else {
		linker = {
			onInput: handler,
			onChange: handler,
			value: object[name],

		}
	}

	return linker;
}


export function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

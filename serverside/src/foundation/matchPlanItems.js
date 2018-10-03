const matchPlanItems = (left, right) => {
	let matched = [];
	let notMatched = []

	Object.keys(left).forEach(key => {
		if (left[key] === right[key]) matched.push(key); else notMatched.push(key);
	})

	return {
		matched,
		notMatched
	}


}


module.exports = matchPlanItems

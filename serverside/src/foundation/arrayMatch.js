/**
 * Matches two arrays' contents
 * Returns three arrays:
 * one containing all elements found in both of the arrays,
 * second, containing elements which exists in leftArray but not found in rightArray,
 * and the third array will contain elements found in rightArray but not found in leftArray;
 */


const arrayMatch = (left, right) => {
	let match = [],
		restLeft = [...left],
		restRight = [...right];

	restLeft.forEach((element, leftIndex) => {

		let rightIndex = restRight.indexOf(element);

		if (rightIndex !== -1) {

			restLeft.splice(leftIndex, 1);
			let matchedElement = restRight.splice(rightIndex, 1)[0]
			match.push(matchedElement)
		}
	});

	return {
		match,
		restLeft,
		restRight,
	};


}



module.exports = arrayMatch;
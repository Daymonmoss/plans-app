const JsonDB = require('node-json-db');
const db = new JsonDB("./serverside/data/myDataBase", true, false);
const matchPlanItems = require('../foundation/matchPlanitems');

const findPlans = (req, res) => {
	const searchObject = req.body;
	let plans = db.getData('/plans');

	let found = plans.map(plan => {

		let searchResult = [
			{key: 'kitchenItems', power: 1},
			{key: 'lobbyItems', power: 1},
			{key: 'bathroomItems', power: 1},
			{key: 'livingRoomItems', power: 1},
			{key: 'bedroomItems', power: 1},
			{key: 'rooms', power: 2}
		].reduce((matches, {key, power}) => {
			let searchObjectItems = searchObject[key];
			let planObjectItems = plan[key];
			let {matched, notMatched} = matchPlanItems(searchObjectItems, planObjectItems)
			matches.matched[key] = matched;
			matches.notMatched[key] = notMatched;
			matches.score += matched.length * power - notMatched.length * power;
			return matches;
		}, {score: 0, matched: {}, notMatched: {}})

		return {
			searchResult,
			plan,
		}

	}).sort((plan, nextPlan) => nextPlan.searchResult.score - plan.searchResult.score);

	const topPick = found.splice(0, 3);


	res.status(200).send(JSON.stringify(topPick));
}


module.exports = findPlans;
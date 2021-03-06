const JsonDB = require('node-json-db');
const db = new JsonDB("./serverside/data/myDataBase", true, false);
const matchPlanItems = require('../foundation/matchPlanItems');

const scorable = item => ({score:0, ...item});
const notNull = item => item.score !== 0;

const scoreByItems = searchObject => plan => {

	let searchResult = [
		{key: 'kitchenItems', power: 1},
		{key: 'lobbyItems', power: 1},
		{key: 'bathroomItems', power: 1},
		{key: 'livingRoomItems', power: 1},
		{key: 'bedroomItems', power: 1},
		{key: 'rooms', power: 3}
	].reduce((result, {key, power}) => {
		let searchObjectItems = searchObject[key];
		let planObjectItems = plan[key];
		let {matched, notMatched} = matchPlanItems(searchObjectItems, planObjectItems)
		result.score += matched.length * power - notMatched.length * power;
		return result;
	}, {score:0, matched: [], notMatched: []});


	// plan.matched = searchResult.matched;
	// plan.notMatched = searchResult.notMatched;
	plan.score = searchResult.score;
	return plan;

}
const scoreByOccupants = searchObject => plan => {

	let planAdults = +plan.occupants.adults;
	let planChildren = +plan.occupants.children;

	let searchAdults = +searchObject.occupants.adults;
	let searchChildren = +searchObject.occupants.children;

	let adultsScore = 0;
	let childrenScore = 0;

	let adultsDifference = planAdults - searchAdults;
	let childrenDifference = planChildren - searchChildren;

	let topScore = 4;

	if (childrenDifference === 0) childrenScore += topScore;
	if (adultsDifference === 0) adultsScore += topScore;

	if (childrenDifference > 0) {
		childrenScore = (childrenDifference > topScore) ? 0 : topScore - Math.abs(childrenDifference);
	}
	if (adultsDifference > 0) {
		adultsScore = (adultsDifference > topScore) ? 0 : topScore - Math.abs(adultsDifference)
	}

	plan.score += ((childrenScore + adultsScore) / 2);
	return plan;


}
const byScore = (a, b) => b.score - a.score;

const byType = type => element => element.planType===type;
const findPlans = (req, res) => {
	const input = req.body;

	let plans = db.getData('/plans');

	let found = plans
	.filter(byType(input.plansType))
	.map(scorable)
	.map(scoreByOccupants(input))
	.filter(notNull)
	.map(scoreByItems(input))
	.sort(byScore)

	const info = found.map( found => ({...found, planImage:'OMITTED'}))
	const topPick = found.slice(0, 3);

	res.status(200).send(JSON.stringify({topPick,info}));
}


module.exports = findPlans;
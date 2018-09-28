/**
 * TRANSLATION
 * lobby: Прихожая
 * bathroom: Ванная, санузел
 * kitchen: Кухня
 * bedroom: Спальня
 * diningRoom: Столовая
 * bedroom: Спальня
 * cabinette: Кабинет
 * childrenRoom: Детская
 * wardrobe: Гардеробная
 * pantry: Кладовка
 * hooksAndKaloshnitca,
 * locker: Шкаф (для одежды)
 * bath ванна: (предмет)
 * showerCabin: душевая кабина
 * toilet: унитаз
 * bidet: биде
 * heaterTowelRail: полотенцесушитель
 * washingMachine: стиральная машина
 * case: пенал, полка
 * towBurnersSurface: поверхность с двумя комфорками
 * fourBurnersSurface: поверхность с четырмя комфорками
 * refrigerator: холодильник
 * owen: духовка, духовой шкаф
 * microwave: микроволновка
 * roundTable: круглый стол
 * squareTable: квадратный стол
 * bar: барная стойка
 * tv: телевизор
 * straightCoach: диван прямой
 * cornerCoach: диван угловой
 * armchairCoach: диван-кресло
 * bedCoach: диван-кровать
 * booksRack: стойка для книг (полка)
 * bureau: комод
 * computerTable: компьютерный стол
 * tv: телевизор
 * coffeeTable: журнальный столик
 * bed: кровать
 * bedsideTable: тумбочка
 * dresser: туалетный столик
 */

/**
 * That is default state for applications forms
 */

export default {

	occupants: {
		children: 0,
		adults: 1,
	},
	rooms: {
		lobby: true,
		bathroom: true,
		kitchen: true,
		bedroom: true,
		diningRoom: false,
		livingRoom:true,
		cabinette: false,
		childrenRoom: false,
		wardrobe: false,
		pantry: false
	},
	lobbyItems: {
		hooksAndKaloshnitca: true,
		locker: false,
		allOptions: false
	},
	bathroomItems: {
		bath: true,
		showerCabin: false,
		toilet: true,
		bidet: false,
		heatedTowelRail: true,
		washingMachine: false,
		case: false
	},
	kitchenItems: {
		cookingSurface: true,
		fourBurnersSurface: false,
		twoBurnersSurface: true,
		refrigerator: true,
		owen: true,
		microwave: false,
		roundTable: true,
		squareTable: false,
		bar: false,
		tv: false,
		washingMachine: false
	},
	livingRoomItems: {
		coach:true,
		straightCoach: true,
		cornerCoach: false,
		armchairCoach:false,
		bedCoach: false,
		wardrobe:true,
		booksRack: false,
		bureau: false,
		computerTable: false,
		tv: false,
		coffeeTable: false
	},
	bedroomItems: {
		bedCoach: true,
		bed: false,
		bureau: true,
		dresser: false,
		tv: false,
		bedsideTable: false,
		computerTable: false
	}
}



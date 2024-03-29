var windowPresenterLeft;
var windowPresenterRight;
var windowPresenterCenter;

window.addEventListener("load", OnStartup, false);
function OnStartup()
{
	windowPresenterLeft = new GameUnitCardWindowPresenter($("#battle-unit-card-window-left"), 'left');
	windowPresenterRight = new GameUnitCardWindowPresenter($("#battle-unit-card-window-right"), 'right');
	windowPresenterCenter = new GameUnitCardWindowPresenter($("#battle-unit-card-window-center"), 'center');

	// todo вызов Одного из Тестов для отображения в UI
	TestArcher1();
	TestArcher2();
	TestDeadcountess1();

}

// карта (конфиг) всех юнитов типа Лучник
var unitCardArcher = {
	blockFront: 0.60,
	blockSide: 0.30,
	armor: 0.08,

	isAlive: true,
	isUncontrollable: false,
	moveDistance: 3,

	strength: 18,
	range: 6,
	critChance: 0.005,

	cooldownMove: 1,
	cooldownAttack: 1,
};



// карта (конфиг) всех юнитов типа Мёртвая графиня
var unitCardDeadcountess = {
	blockFront: 0.00,
	blockSide: 0.00,
	armor: 0.00,

	isAlive: true,
	isUncontrollable: false,
	moveDistance: 3,

	attackfreeze:"",// NOTE НЕ АТАКУЕТ, А ПРИМЕНЯЕТ СПОСОБНОСТЬ "Заморозка"
	range:2,
	critChance: "",

	cooldownMove: 1,
	cooldownAttack: 2,
};

function TestArcher2()
{
	// инстанс юнита - Лучник
	let unit = {
		type: "archer",
		currentHealth: 30,
		health: 40,
		cooldown: 1, // !
		effects: {
			isOnFocus: false,
			isOnBarrier: false,
			isOnFreeze: false,
			isOnPoison: false,
			isOnArmor: false,
		},
	};

	windowPresenterLeft.Show(unit, unitCardArcher);
}

// todo в UI должно быть (вместо цифры атаки) "Атака - Заморозка" (и без шанса крита) - см скрин "TestDeadcountess1.png"
function TestDeadcountess1()
{
	// инстанс юнита - Мёртвая графиня
	let unit = {
		type: "deadcountess",
		currentHealth: 35,
		health: 35,
		cooldown: 0,


		effects: {
			isOnFocus: false,
			isOnBarrier: false,
			isOnFreeze:false,
			isOnPoison: false,
			isOnArmor: false,
		},
	};

	windowPresenterRight.Show(unit, unitCardDeadcountess);
}

function TestArcher1()
{
	// инстанс юнита - Лучник
	let unit = {
		type: "archer",
		currentHealth: 30,
		health: 40,
		cooldown: 1, // !
		effects: {
			isOnFocus: false,
			isOnBarrier: true,	// todo баффы должны отображаться
			isOnFreeze: true,	// todo баффы должны отображаться
			isOnPoison: true,	// todo баффы должны отображаться
			isOnArmor: true,	// todo баффы должны отображаться
		},
	};

	windowPresenterCenter.Show(unit, unitCardArcher);
}

let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц', '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money === '' || money === null) {
		money = Number(prompt('Ваш бюджет на месяц', ''));
	}
}
start();

const appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Введите обязательную статью расходов в этом месяце', '');
		const b = prompt('Во сколько обойдется?', '');

		if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
			console.log('Done');
			appData.expenses[a] = b;
		} else {
			console.log('False');
			i--;
		}
	}
}
chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
}
detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('Минимальный уровень достатка');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('Средний уровень достатка');
	} else if (appData.moneyPerDay > 2000) {
		console.log('Высокий уровень достатка');
	} else {
		console.log('Произошла ошибка');
	}
}
detectLevel();

function checkSavings() {
	if(appData.savings) {
		let save = +prompt('Какая сумма накоплений?'),
				percent = +prompt('Под какой процент?');
				
		appData.monthIncome = save / 100 / 12 * percent;

		alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
	}
}
checkSavings();

function chooseOptExpenses() {
	let i = 1;

	while(i <= 3) {
		let optionalExpenses = prompt('Введите статью необязатьльных расходов');

		if (optionalExpenses !== null && optionalExpenses !== '') {
			appData.optionalExpenses[i] = optionalExpenses;
			i++; 
		} else {
			console.log('False');
		}
	}
}
chooseOptExpenses();
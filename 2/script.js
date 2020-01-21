const money = Number(prompt('Ваш бюджет на месяц', ''));
const time = prompt('Введите дату в формате YYYY-MM-DD', '');
const appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

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

// let attempt = 2;
// while (attempt > 0) {
// 	const a = prompt('Введите обязательную статью расходов в этом месяце', '');
// 	const b = prompt('Во сколько обойдется?', '');

// 	if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
// 		console.log('Done');
// 		appData.expenses[a] = b;
// 		attempt--;
// 	} 
// }

// let attempt = 2;
// do {
// 	const a = prompt('Введите обязательную статью расходов в этом месяце', '');
// 	const b = prompt('Во сколько обойдется?', '');

// 	if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
// 		console.log('Done');
// 		appData.expenses[a] = b;
// 		attempt--;
// 	} 
// } while (attempt > 0);

appData.moneyPerDay = appData.budget / 30;
alert(`Ежемесячный бюджет: ${appData.moneyPerDay}`);

if (appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}
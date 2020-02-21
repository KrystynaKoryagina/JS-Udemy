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
	savings: true,
	chooseExpenses() {
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
	},
	detectDayBudget() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
	},
	detectLevel() {
		if (appData.moneyPerDay < 100) {
			console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('Произошла ошибка');
		}
	},
	checkSavings() {
		if(appData.savings) {
			let save = +prompt('Какая сумма накоплений?'),
					percent = +prompt('Под какой процент?');
					
			appData.monthIncome = save / 100 / 12 * percent;
	
			alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
		}
	},
	chooseOptExpenses() {
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
	},
	chooseIncome() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', ''),
				msg = 'Способы доп. заработка: \n';

		if (typeof items !== 'string' || items === null || items === '') {
			console.log("Вы ввели некорректные данные или не ввели их вовсе");
		} else {
			appData.income = items.split(',');
			appData.income.push(prompt('Может что-то еще?'));
			appData.income.sort();
		}

		appData.income.forEach((item, i) => {
			msg +=  `${i+1}. ${item} \n`;
		});
		
		alert(msg);
	}
};

for(let key in appData) {
	console.log(`Наша программа включает в себя данные: ${key} - ${appData[key]}`);
}
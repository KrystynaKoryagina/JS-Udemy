const startBtn = document.getElementById('start'),

			budget = document.getElementsByClassName('budget-value')[0],
			dayBudget = document.getElementsByClassName('daybudget-value')[0],
			levelValue = document.getElementsByClassName('level-value')[0],
			expensesValue = document.getElementsByClassName('expenses-value')[0],
			optExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
			incomeValue = document.getElementsByClassName('income-value')[0],
			monthSavings = document.getElementsByClassName('monthsavings-value')[0],
			yearSavings = document.getElementsByClassName('yearsavings-value')[0],

			expensesItems = document.querySelectorAll('.expenses-item'),
			optExpensesItems = document.querySelectorAll('.optionalexpenses-item'),

			expensesBtn = document.getElementsByTagName('button')[0],
			optExpensesBtn = document.getElementsByTagName('button')[1],
			budgetBtn = document.getElementsByTagName('button')[2],

			incomeInput = document.querySelector('.choose-income'),
			savingsCheck = document.querySelector('#savings'),
			sum = document.querySelector('.choose-sum'),
			percent = document.querySelector('.choose-percent'),
			year = document.querySelector('.year-value'),
			month = document.querySelector('.month-value'),
			day = document.querySelector('.day-value');

const appData = {
	budget: '',
	timeData: '',
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

startBtn.addEventListener('click', () => {
	let time = prompt('Введите дату в формате YYYY-MM-DD', ''),
			money = +prompt('Ваш бюджет на месяц', ''),
  		date = new Date(Date.parse(time));

	while (isNaN(money) || money === '' || money === null) {
		money = +(prompt('Ваш бюджет на месяц', ''));
	}

	appData.budget = money;
	appData.timeData = time;

	budget.textContent = money.toFixed();

	year.value = date.getFullYear();
	month.value = date.getMonth() + 1;
	day.value = date.getDate();

	expensesBtn.disabled = false;
	optExpensesBtn.disabled = false;
	budgetBtn.disabled = false;
});

expensesBtn.addEventListener('click', () => {
	let sum = 0;

	for (let i = 0; i < expensesItems.length; i++) {
		const a = expensesItems[i].value,
					b = expensesItems[++i].value;

		if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
			appData.expenses[a] = b;
			sum += +b;
		} 
	}

	expensesValue.textContent = sum;
});

optExpensesBtn.addEventListener('click', () => {

	for (let i = 0; i < optExpensesItems.length; i++) {
		const optExpense = optExpensesItems[i].value;
		appData.optionalExpenses[i] = optExpense;

		optExpensesValue.textContent += `${appData.optionalExpenses[i]} `;
	}
});

budgetBtn.addEventListener('click', () => {
	
	if (appData.budget !== '') {
		appData.moneyPerDay = +((appData.budget - +expensesValue.textContent) / 30).toFixed();

		dayBudget.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay <= 100) {
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Средний уровень достатка';
		} else {
			levelValue.textContent = 'Высокий уровень достатка';
		}

	} else {
		dayBudget.textContent = 'Произошла ошибка. Нажмите на кнопку "Начать расчет"';
	}	
});

incomeInput.addEventListener('input', () => {
	let items = incomeInput.value;
	appData.income = items.split(',');

	incomeValue.textContent = appData.income;
});

savingsCheck.addEventListener('click', () => {

	if (appData.savings) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sum.addEventListener('input', getSavings);

percent.addEventListener('input', getSavings);

function getSavings() {

	if (appData.savings) {
		const save = +sum.value,
					percentValue = +percent.value;

		appData.monthIncome = (save / 100 / 12 * percentValue).toFixed(2);
		appData.yearIncome = (save / 100 * percentValue).toFixed(2);

		monthSavings.textContent = appData.monthIncome;
		yearSavings.textContent = appData.yearIncome;
	}
}
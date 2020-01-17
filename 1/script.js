const money = prompt('Ваш бюджет на месяц', '');
const time = prompt('Введите дату в формате YYYY-MM-DD', '');
const appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};
const expensesArticle = prompt('Введите обязательную статью расходов в этом месяце', '');
const expensesCost = prompt('Во сколько обойдется?', '');
const expensesArticle2 = prompt('Введите обязательную статью расходов в этом месяце', '');
const expensesCost2 = prompt('Во сколько обойдется?', '');
appData.expenses[expensesArticle] = expensesCost;
appData.expenses[expensesArticle2] = expensesCost2;

alert(`Бюджет на 1 день: ${appData.moneyData / 30}`);

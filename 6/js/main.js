// Получить кнопку "Начать расчет" через id
const startBtn = document.getElementById('start');

// Получить все блоки в правой части программы через классы
// (которые имеют класс название-value, 
// начиная с <div class="budget-value"></div> и 
// заканчивая <div class="yearsavings-value"></div>)
const budget = document.getElementsByClassName('budget-value')[0];
const dayBudget = document.getElementsByClassName('daybudget-value')[0];
const level = document.getElementsByClassName('level-value')[0];
const expenses = document.getElementsByClassName('expenses-value')[0];
const optExpenses = document.getElementsByClassName('optionalexpenses-value')[0];
const incomeValue = document.getElementsByClassName('income-value')[0];
const monthSavings = document.getElementsByClassName('monthsavings-value')[0];
const yearSavings = document.getElementsByClassName('yearsavings-value')[0];

//  Получить поля(input) c обязательными расходами через класс. 
//(class=”expenses-item”)
const expensesInput = document.getElementsByClassName('expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag
//каждую в своей переменной. 
const expensesBtn = document.getElementsByTagName('button')[0];
const optExpensesBtn = document.getElementsByTagName('button')[1];
const calculateBtn = document.getElementsByTagName('button')[2];

// Получить поля для ввода необязательных расходов
// (optionalexpenses-item) при помощи querySelectorAll
const optExpensesInput = document.querySelectorAll('.optionalexpenses-item');

// Получить оставшиеся поля через querySelector 
// (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
const incomeInput = document.querySelector('.choose-income');
const savingsCheck = document.querySelector('#savings');
const sum = document.querySelector('.choose-sum');
const percent = document.querySelector('.choose-percent');
const year = document.querySelector('.year-value');
const month = document.querySelector('.month-value');
const day = document.querySelector('.day-value');
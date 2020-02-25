const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');

// Восстановить порядок в меню
menu.insertBefore(menuItem[2], menuItem[1]); 

// Добавить пятый пункт
const li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);

// Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// Поменять заголовок, добавить слово "подлинную" 
//( Получится - "Мы продаем только подлинную технику Apple")
const title = document.querySelector('.title');
title.textContent = "Мы продаем только подлинную технику Apple";

// Удалить рекламу со страницы

const adv = document.querySelector('.adv');
adv.remove();
//const columns = document.querySelectorAll('.column');
// columns[1].removeChild(adv);

//Спросить у пользователя отношение к технике apple и 
//записать ответ в блок на странице с id "prompt"
const userAnswer = prompt('Ваше отношение к технике Apple', '');
const promptBlock = document.getElementById('prompt');
promptBlock.textContent = userAnswer;
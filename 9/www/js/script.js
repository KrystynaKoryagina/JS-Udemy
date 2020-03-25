window.addEventListener('DOMContentLoaded', (e) => {
	'use strict';

	// Tabs
	const tab = document.querySelector('.info-header'),
				tabLink = document.querySelectorAll('.info-header-tab'),
				tabContent = document.querySelectorAll('.info-tabcontent');
	
	const hideTabContent = from => {

		for (let i = from; i < tabContent.length; i++) {
			tabContent[i].classList.add('hide');
			tabContent[i].classList.remove('show');
		}
	};

	const showTabContent = idx => {
		tabContent[idx].classList.add('show');
		tabContent[idx].classList.remove('hide');
	};

	const showActiveTabLink = idx => {
		tabLink[idx].classList.add('active');
	};

	const hideTabLink = () => {

		for (let i  = 0; i < tabLink.length; i++) {
			tabLink[i].classList.remove('active');
		}
	};

	hideTabContent(1);
	showActiveTabLink(0);

	tab.addEventListener('click', e => {
		const target = e.target;

		if (target && target.matches('.info-header-tab')) {

			for (let i = 0; i < tabLink.length; i++) {
				if (target == tabLink[i]) {
					hideTabContent(0);
					hideTabLink();
					showTabContent(i);
					showActiveTabLink(i);
				}
			}
		}
	});


	// Timer
	//const deadline = '2020-03-24';
	const deadline = '2020-03-24T23:06:00';

	const getTimeRemaining = endtime => {
		const timeLeft = Date.parse(endtime) - new Date().getTime(),
					seconds = Math.floor(timeLeft / 1000 % 60),
					minutes = Math.floor(timeLeft / 1000 / 60 % 60),
					hours = Math.floor(timeLeft / (1000 * 60 * 60));

					// hours = Math.floor(timeLeft / 1000 / 60 / 60 % 24);
					// days = Math.floor(timeLeft / (1000 * 60 * 60 * 24);

		return {
			total: timeLeft,
			sec: seconds,
			min: minutes,
			h: hours
		};
	};

	const setTimer = (elemSelector, endtime) => {
		const timer = document.querySelector(elemSelector),
					hours = timer.querySelector('.hours'),
					minutes = timer.querySelector('.minutes'),
					seconds = timer.querySelector('.seconds'),
					timerId = setInterval(updateTimer, 1000);
					
		function updateTimer() {
			const time = getTimeRemaining(endtime);

			hours.textContent = time.h >= 10 ? time.h : `0${time.h}`;
			minutes.textContent = time.min >= 10 ? time.min : `0${time.min}`;
			seconds.textContent = time.sec >= 10 ? time.sec : `0${time.sec}`;

			if(time.total <= 0) {
				clearInterval(timerId);
				
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	};

	setTimer('#timer', deadline);
});
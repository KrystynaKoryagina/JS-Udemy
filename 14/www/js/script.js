window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// Tabs
	const tab = document.querySelector('.info-header'),
				tabLink = document.querySelectorAll('.info-header-tab'),
				tabContent = document.querySelectorAll('.info-tabcontent');
	
	const hideTabs = () => {

		tabContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		}); 

		tabLink.forEach(link => link.classList.remove('active'));
	};

	const showTab = (idx = 0) => {
		tabContent[idx].classList.add('show');
		tabContent[idx].classList.remove('hide');

		tabLink[idx].classList.add('active');
	};

	hideTabs();
	showTab();

	tab.addEventListener('click', e => {
		const target = e.target;

		if (target && target.matches('.info-header-tab')) {

			tabLink.forEach((item, i) => {
				if (target === item) {
					hideTabs();
					showTab(i);
				}
			});
		}
	});


	// Timer

	const deadline = '2020-04-24';
	//const deadline = '2020-03-24T23:06:00';

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

		updateTimer();
					
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

	// Modal

	function openModal(e) {
		const target = e.target,
					body = document.body,
					modal = document.querySelector('.overlay'),
					closeBtn = modal.querySelector('.popup-close');

		modal.style.display = 'block';
		body.style.overflow = 'hidden';
		target.classList.add('more-splash');

		closeBtn.addEventListener('click', () => {
			modal.style.display = 'none';
			body.style.overflow = '';
			target.classList.remove('more-splash');
		});
	}

	document.querySelector('.more').addEventListener('click', openModal);
	document.querySelectorAll('.description-btn').forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	// Slider

	const sliderItems = document.querySelectorAll('.slider-item'),
				prev = document.querySelector('.prev'),
				next = document.querySelector('.next'),
				dotsWrap = document.querySelector('.slider-dots'),
				dots = document.querySelectorAll('.dot');
	
	let activeSlider = 1;

	const hideSliders = () => {
		sliderItems.forEach(slider => slider.style.display = 'none');
		dots.forEach(dot => dot.classList.remove('dot-active'));
	};

	const showSlider = () => {

		hideSliders();

		sliderItems[activeSlider - 1].style.display = 'block';
		dots[activeSlider - 1].classList.add('dot-active');
	};

	showSlider();

	const plusSlider = num => {
		activeSlider += num;

		if (activeSlider < 1) {
			activeSlider = sliderItems.length;
		}
		if (activeSlider > sliderItems.length) {
			activeSlider = 1;
		}
		
		showSlider();
	};

	prev.addEventListener('click', e => {
		e.preventDefault();

		plusSlider(-1);
	});

	next.addEventListener('click', e => {
		e.preventDefault();

		plusSlider(1);
	});

	dotsWrap.addEventListener('click', e => {
		e.preventDefault();

		const target = e.target;

		if(target && target.classList.contains('dot')) {

			dots.forEach((dot, i) => {
				if (target === dot) {
					activeSlider = i + 1;

					showSlider();
				}
			});
		}
	});

	// Form

	// function sendFormData(formSelector) {
	// 	const form = document.querySelector(formSelector);

	// 	const statusMessage = {
	// 		loading: 'Отправка...',
	// 		success: 'Спасибо! Ваши данные успешно отправлены!',
	// 		error: 'Что-то пошло не так...'
	// 	};

	// 	const statusBlock = document.createElement('div');
	// 	statusBlock.classList.add('status');
	
	// 	form.addEventListener('submit', e => {
	// 		e.preventDefault();
	
	// 		form.append(statusBlock);
	
	// 		const xhr = new XMLHttpRequest();
	
	// 		xhr.open('POST', './server.php');
	// 		xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	
	// 		const formData = new FormData(form);
	// 		let obj = {};
	// 		formData.forEach((value, key) => obj[key] = value);
	// 		const jsonData = JSON.stringify(obj);
	
	// 		xhr.send(jsonData);
	
	// 		xhr.addEventListener('readystatechange', () => {
	
	// 			if (xhr.readyState < 4) {
	// 				statusBlock.textContent = statusMessage.loading;
	// 			} else if (xhr.readyState === 4 && xhr.status === 200) {
	// 				statusBlock.textContent = statusMessage.success;
	// 			} else {
	// 				statusBlock.textContent = statusMessage.error;
	// 			}
	// 		});
	
	// 		form.reset();
			
	// 		setTimeout(() => statusBlock.remove(), 3000);
	// 	});
	// }

	//Promise

	function sendFormData(formSelector) {
		const form = document.querySelector(formSelector);

		const statusMessage = {
			loading: 'Отправка...',
			success: 'Спасибо! Ваши данные успешно отправлены!',
			error: 'Что-то пошло не так...'
		};

		const statusBlock = document.createElement('div');
		statusBlock.classList.add('status');
	
		form.addEventListener('submit', e => {
			e.preventDefault();
	
			form.append(statusBlock);
			const formData = new FormData(form);

			const request = (data) => new Promise( (resolve, reject) => {

				const xhr = new XMLHttpRequest();
				xhr.open('POST', './server.php');
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

				xhr.addEventListener('readystatechange', () => {
					if (xhr.readyState !== 4) {
						statusBlock.textContent = statusMessage.loading;
						return;
					} else if (xhr.status === 200 && xhr.readyState === 4) {
						resolve(statusMessage.success);
					} else {
						reject(statusMessage.error);
					}
				});

				xhr.send(data);
			});

			request(formData)
				.then((message) => statusBlock.textContent = message)
				.catch((error) => statusBlock.textContent = error)
				.then(() => {
					form.reset();
					setTimeout(() => statusBlock.remove(), 3000);
				});		
		});
	}

	sendFormData('.main-form');
	sendFormData('#form');

});


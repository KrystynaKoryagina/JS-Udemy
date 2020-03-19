window.addEventListener('DOMContentLoaded', (e) => {
	'use strict';

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
});
'use strict'
const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

const tabsItem = (index) => tabs[index];
const tabContentItem = (index) => tabContent[index];

for (let i = 0; i < tabs.length; i++) {
	tabsItem(i).onclick = () => {
		if (tabsItem(i).closest('.tab__navigation').querySelector('.tab_active')) {
			tabsItem(i).closest('.tab__navigation').querySelector('.tab_active').classList.remove('tab_active');
		}
		tabsItem(i).classList.add('tab_active');

		if (tabContentItem(i).closest('.tab__contents').querySelector('.tab__content_active')) {
			tabContentItem(i).closest('.tab__contents').querySelector('.tab__content_active').classList.remove('tab__content_active');
		}
		tabContent[tabs.indexOf(tabsItem(i))].classList.add('tab__content_active');

	}
}
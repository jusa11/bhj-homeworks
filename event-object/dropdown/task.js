'use strict'
const dropDown = Array.from(document.querySelectorAll('.dropdown'));
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

const getDropDown = (index) => dropDown[index];
const getDropdownItem = (index) => dropdownItem[index];

for (let i = 0; i < dropDown.length; i++) {
	getDropDown(i).querySelector('.dropdown__value').onclick = () => {
		getDropDown(i).querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
	}
}

for (let i = 0; i < dropdownItem.length; i++) {

	getDropdownItem(i).onclick = () => {
		getDropdownItem(i).closest('.dropdown').querySelector('.dropdown__value').textContent = getDropdownItem(i).textContent;
		getDropdownItem(i).closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
		return false
	}
}



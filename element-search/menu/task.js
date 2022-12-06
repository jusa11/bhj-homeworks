'use strict'
const menuItem = Array.from(document.querySelectorAll('.menu__item'));		// массив всех пунктов меню
const menuSub = Array.from(document.querySelectorAll('.menu_sub'));			// массив вложенных меню


const getMenuClick = (index) => menuItem[index];

for (let i = 0; i < menuItem.length; i++) {
	let getLink = getMenuClick(i);

	const linkParent = getLink.querySelector('.menu_sub');		// поиск вложенного меню

	getLink.onclick = () => {
		let linkIndex = menuSub.findIndex(link => link.classList.contains('menu_active'));		// получаем индекс меню из массива вложенных меню
		// если открыто более 1 вложенного меню найдено, удалить у последнего класс menu_active
		if (linkIndex >= 0) {
			menuSub[linkIndex].classList.remove('menu_active');
		}
		// если у пункта меню есть вложенное меню, то добавить ему menu_active, чтобы вывести его
		if (linkParent) {
			linkParent.classList.toggle('menu_active');
			return false;
		}
	}
}




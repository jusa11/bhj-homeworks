const menuItem = Array.from(document.querySelectorAll('.menu__item'));

const getMenuItem = (index) => menuItem[index];

for (let i = 0; i < menuItem.length; i++) {
	getMenuItem(i).querySelector('.menu__link').onclick = () => {
		if (getMenuItem(i).querySelector('.menu_active')) {
			getMenuItem(i).querySelector('.menu_active').classList.remove('menu_active');
			return false;
		}
		if (getMenuItem(i).closest('.menu_main').querySelector('.menu_active')) {
			getMenuItem(i).closest('.menu_main').querySelector('.menu_active').classList.remove('menu_active');
		}
		if (getMenuItem(i).querySelector('.menu_sub')) {
			getMenuItem(i).querySelector('.menu_sub').classList.add('menu_active');
			return false;
		}
	}
}
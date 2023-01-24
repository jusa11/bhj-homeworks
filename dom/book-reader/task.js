'use strict'
const book = document.getElementById('book');
const bookTag = Array.from(book.getElementsByTagName('a'));
let sizeIndex = null;
let colorIndex = null;
let backIndex = null;


bookTag.forEach(item => {

	const selectSize = (event) => {
		if (item.closest('.book__control_font-size')) {

			/* Панель управления размером текста*/
			if (item.closest('.book__control').querySelector('.font-size_active')) {
				item.closest('.book__control').querySelector('.font-size_active').classList.remove('font-size_active');
			}

			if (book.classList.contains(sizeIndex)) {
				book.classList.remove(sizeIndex);
			}

			/* изменение размера текста */
			item.classList.add('font-size_active');
			book.classList.add(`book_fs-${item.getAttribute('data-size')}`)

			sizeIndex = `book_fs-${item.getAttribute('data-size')}`;
		}

		if (item.closest('.book__control_color')) {

			// Панель управления цветом текста
			if (item.closest('.book__control').querySelector('.color_active')) {
				item.closest('.book__control').querySelector('.color_active').classList.remove('color_active');
			}

			if (book.classList.contains(colorIndex)) {
				book.classList.remove(colorIndex);
			}

			/* изменение цвета текста */
			item.classList.add('color_active');
			book.classList.add(`book_color-${item.getAttribute('data-text-color')}`)

			colorIndex = `book_color-${item.getAttribute('data-text-color')}`;
		}

		if (item.closest('.book__control_background')) {

			// Панель управления цветом текста
			if (item.closest('.book__control').querySelector('.color_active')) {
				item.closest('.book__control').querySelector('.color_active').classList.remove('color_active');
			}

			if (book.classList.contains(backIndex)) {
				book.classList.remove(backIndex);
				
			}
			/* изменение цвета текста */
			item.classList.add('color_active');
			book.classList.add(`book_bg-${item.getAttribute('data-bg-color')}`)

			backIndex = `book_bg-${item.getAttribute('data-bg-color')}`;
		}

		event.preventDefault();
	}

	item.addEventListener('click', selectSize);
});




// bookTag.forEach(item => {

// 	const selectColor = (event) => {

// 		/* Панель управления размером */
// 		if (item.closest('.book__controls').querySelector('.color_active')) {
// 			item.closest('.book__controls').querySelector('.font-size_active').classList.remove('color_active');
// 		}

// 		if (item.closest('.book').classList.contains(sizeIndex)) {
// 			item.closest('.book').classList.remove(sizeIndex);
// 		}

// 		item.classList.add('color_active');
// 		item.closest('.book').classList.add(`book_color-${item.getAttribute('data-text-color')}`)

// 		sizeIndex = `book_color-${item.getAttribute('data-text-color')}`;

// 		event.preventDefault();
// 	}

// 	item.addEventListener('click', selectColor);
// });


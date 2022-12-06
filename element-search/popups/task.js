'use strict'
/* объявление пермеменных */
let modalMain = document.getElementById('modal_main');			// первое окно
let modalSuccess = document.getElementById('modal_success');	// второе окно
let showSuccess = document.querySelector('.show-success');		// кнопка сделать хорошо
let btnSuccess = document.querySelector('.btn_success');			// кнопка Хорошо сделано!
let modalClose = document.querySelectorAll('.modal__close');	// закрыть окно на крестик
let arrayClose = Array.from(modalClose);								// массив крестиков из первого и второго окна


// функции показа, перехода и удаления окон
const modalActive = () => modalMain.classList.add('modal_active');		// при загрузке страницы показ первого окна
const successShow = () => modalSuccess.classList.add('modal_active');	// показ второго окна при клике на кнопку
const closeModal = (modal) => {
	modal.classList.remove('modal_active');
}

// показ первого окна
modalActive();

// при нажатии на крестик закрывает первое окно
arrayClose[0].onclick = () => {
	closeModal(modalMain);
}

// при нажатии на крестик закрывает второе окно
arrayClose[2].onclick = () => {
	closeModal(modalMain);
	closeModal(modalSuccess);
}

// при нажатии на кнопкe Хорошо сделано! закрывает второе окно
btnSuccess.onclick = () => {
	closeModal(modalMain);
	closeModal(modalSuccess);
}

// при нажатии на кнопку переход ко второму окну
showSuccess.onclick = () => {
	successShow();
}

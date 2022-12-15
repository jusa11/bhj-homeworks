'use strict'
/* объявление пермеменных */
const modalMain = document.getElementById('modal_main');							// первое окно
const modalSuccess = document.getElementById('modal_success');					// второе окно
const modalClose = Array.from(document.querySelectorAll('.modal__close'));	// закрыть окно на крестик
const modalBtn = Array.from(document.querySelectorAll('.btn'));					// кнопки


/* функции показа, перехода и удаления окон */
const modalActive = () => modalMain.classList.add('modal_active');		// при загрузке страницы показ первого окна
const successShow = () => modalSuccess.classList.add('modal_active');	// показ второго окна при клике на кнопку

/* показ первого окна */
modalActive();

const getModalClose = (index) => modalClose[index];
const getModalBtn = (index) => modalBtn[index];

/* закрытие окна на крестик */
for (let i = 0; i < modalClose.length; i++) {
	getModalClose(i).onclick = () => getModalClose(i).closest('.modal').classList.remove('modal_active');
}

/* закрытие окна на кнопку */
for (let i = 0; i < modalBtn.length; i++) {
	getModalBtn(i).onclick = () => {
		if (getModalBtn(i) === modalBtn[0]) {
			getModalBtn(i).closest('.modal').classList.remove('modal_active');
			successShow();
		}
		else {
			getModalBtn(i).closest('.modal').classList.remove('modal_active');
		}
	}
}



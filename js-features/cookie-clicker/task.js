"use strict"
// объявление переменных
let clickerCookie = document.getElementById('cookie');	// получение печеньки
let getTime = new Date();	// текущее время
let speedTime = 0;	// скорость клика 
let count = 0;		// счетчик кликов

// событие по клику
clickerCookie.onclick = () => {
	let getNewTime = new Date(); 		// новое время после клика
	let speedClick = (getNewTime - getTime) / 1000;		// перевод времени клика в секунды
	speedTime = 1 / speedClick;		// расчет скоростик клика
	speed__counter.textContent = speedTime; 	// вывод скорости клика на страницу
	getTime = getNewTime;	// новое время после клика сделать текущим времени перед следующим кликом
	count++;		// дабавить клик
	clicker__counter.textContent = count;	// вывод количества кликов на страницу
	
	// проверка на наличие класса с шириной картинки
	if (cookie.classList.contains("clicker__cookie")) {
		cookie.classList.remove("clicker__cookie");
	}
	else {
		cookie.classList.add("clicker__cookie");
	}

}




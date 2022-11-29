"use strict"
/* Объявление переменных */
// вывод количества нажатий на страницу
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

// счетчики нажатий
let deadCount = 0;
let lostCount = 0;

// функция обнуления количества нажатий
const resetCount = () => {
	deadCount = 0;
	lostCount = 0;
	dead.textContent = 0;
	lost.textContent = 0;
}

// поиск лунки
const getHole = index => document.getElementById(`hole${index}`);

// задание каждой лунке события
for (let i = 1; i < 10; i++) {
	let hole = getHole(i);		// лунка с id

	// событие по клику
	hole.onclick = () => {
		if (hole.classList.contains('hole_has-mole')) {
			deadCount++;
			dead.textContent = deadCount;
		}
		else {
			lostCount++;
			lost.textContent = lostCount;
		}
		if (deadCount === 5) {
			alert("Вы выйграли");
			resetCount();
		}
		else if (lostCount === 5) {
			alert('Вы проиграли');
			resetCount();
		}
	}
}

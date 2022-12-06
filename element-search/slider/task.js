'use strict'
let arrowPrev = document.querySelector('.slider__arrow_prev');							// левая стрелочка
let arrowNext = document.querySelector('.slider__arrow_next');							// правая стрелочка
let sliderItem = Array.from(document.querySelectorAll('.slider__item'));			// масстив картинок сладера
let countSliders = sliderItem.length - 1;														// количество слайдов
let dotItem = Array.from(document.querySelectorAll('.slider__dot'));					// масстив точек сладера
let activeSlide = 0;																					// текущая слайд

function showSlides(index) {
	let indexActive = index;
	activeSlide = sliderItem.findIndex(slide => slide.classList.contains('slider__item_active'));  		// поиск индекса актавного слайда
	let activeDot = dotItem.findIndex(dot => dot.classList.contains('slider__dot_active'));				// поиск индекса актавной точки
	sliderItem[activeSlide].classList.remove('slider__item_active');												// удаление активного слайда
	dotItem[activeDot].classList.remove('slider__dot_active');														// удаление активного точки
	// проверка на несущестувющий слайд
	if (indexActive < 0) {
		indexActive = countSliders;  			// переход к последнему слайду
	}
	if (indexActive > countSliders) {
		indexActive = 0;							// переход к первому слайду
	}

	sliderItem[indexActive].classList.add('slider__item_active');						// вывод следующего активного слайда
	dotItem[indexActive].classList.add('slider__dot_active');							// вывод активной точки
}


// событие по клику на левую стрелочку
arrowPrev.onclick = () => {
	activeSlide = sliderItem.findIndex(slide => slide.classList.contains('slider__item_active'));  // поиск индекса актавного слайда
	showSlides(activeSlide - 1);							// сделать предыдущий слайд
}
// событие по клику на правую стрелочку
arrowNext.onclick = () => {
	activeSlide = sliderItem.findIndex(slide => slide.classList.contains('slider__item_active'));	// поиск индекса актавного слайда
	showSlides(activeSlide + 1);							// сделать следующий слайд
}


/* управление активнымы точками */
const pointTransition = (index) => dotItem[index];

for (let i = 0; i < dotItem.length; i++) {
	let getDot = pointTransition(i);

	getDot.onclick = () => {
		let activeDot = dotItem.findIndex(dot => dot.classList.contains('slider__dot_active'));		// поиск индекса актавной точки
		dotItem[activeDot].classList.remove('slider__dot_active');												// удаление актавной точки
		getDot.classList.toggle('slider__dot_active');																// вывод новой актавной точки
		activeDot = dotItem.findIndex(dot => dot.classList.contains('slider__dot_active'));				// поиск индекса новой актавной точки
		showSlides(activeDot);																								// вывод изображения, соответстувующего актавной точке
	}


}


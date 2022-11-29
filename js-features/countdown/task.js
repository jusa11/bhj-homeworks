"use strict"
// Таймер обратного отсчёта
// let countdownTimer = timer.textContent;

// let timerId = setInterval(() => {
// 	document.getElementById('timer').innerHTML = --countdownTimer;
// 	if (countdownTimer < 0) {
// 		document.getElementById('timer').innerHTML = 0;
// 		alert('Вы победили в конкурсе!');
// 		clearInterval(timerId);
// 	}
// }, 1000);


/* Повышенный уровень сложности #1 */

// объявление переменных
let hoursTimer = hours.textContent; 		// часы
let minutesTimer = minutes.textContent;	// минуты
let secondsTimer = seconds.textContent;	// секунды

// запуск часов
let timerIdHours = setInterval(() => {
	document.getElementById('hours').innerHTML = --hoursTimer;
	hours.textContent = hoursTimer < 10 ? '0' + hoursTimer : hoursTimer; 	// если значение меньше 10, то добавить 0 перед ним
	if (hoursTimer == 0) {
		document.getElementById('hours').innerHTML = "00";
		clearInterval(timerIdHours);
		// запуск минут
		let timerIdMinutes = setInterval(() => {
			document.getElementById('minutes').innerHTML = --minutesTimer;
			minutes.textContent = minutesTimer < 10 ? '0' + minutesTimer : minutesTimer;	// если значение меньше 10, то добавить 0 перед ним
			if (minutesTimer == 0) {
				document.getElementById('minutes').innerHTML = "00";
				clearInterval(timerIdMinutes);
				// запуск секунд
				let timerIdSeconds = setInterval(() => {
					document.getElementById('seconds').innerHTML = --secondsTimer;
					seconds.textContent = secondsTimer < 10 ? '0' + secondsTimer : secondsTimer;	// если значение меньше 10, то добавить 0 перед ним
					if (secondsTimer == 0) {
						document.getElementById('seconds').innerHTML = "00";
						alert('Чтобы начать загрузку, закройте это окно');
						location = "file.zip";
						clearInterval(timerIdSeconds);
					}
				}, 1000);
			}
		}, 1000);
	}
}, 1000);


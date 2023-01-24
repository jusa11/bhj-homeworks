'use strict'
const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let count = 0;

function rotatorAction() {
	if (count > rotator.length - 1) {
		count = 0;
	}

	rotator.forEach((item, index) => {
		item.classList.toggle('rotator__case_active', count === index);
		let colorText = item.getAttribute('data-color');
		item.style.color = colorText;
	});

	let dataSpeed = rotator[count].getAttribute('data-speed');
	console.log(`${count + 1} скорость - ${dataSpeed}`);
	count++;
	timer(dataSpeed);
}

function timer(speed) {
	setTimeout(rotatorAction, speed);
}

timer()


/* Первый вариант */
// 'use strict'
// const rotator = Array.from(document.querySelectorAll('.rotator__case'));
// let count = 0;

// function rotatorAction() {
// 	rotator.forEach((item, index) => {
// 		item.classList.toggle('rotator__case_active', count === index);
// 		let colorText = item.getAttribute('data-color');
// 		item.style.color = colorText;
// 	});

// 	count++;

// 	if (count >= rotator.length) {
// 		count = 0;
// 	}
// }

// setInterval(rotatorAction, 1000);



'use strict'
const rotator = Array.from(document.querySelectorAll('.rotator__case'));
let count = 0;

function rotatorAction() {
	rotator.forEach((item, index) => {
		item.classList.toggle('rotator__case_active', count === index);
		let colorText = item.getAttribute('data-color');
		item.style.color = colorText;
	});

	count++;

	if (count >= rotator.length) {
		count = 0;
	}
}

setInterval(rotatorAction, 1000);
'use strict'
const reveal = Array.from(document.querySelectorAll('.reveal'));

const revealS = (index) => reveal[index];

for (let i = 0; i < reveal.length; i++) {
	revealS(i);

	function onReveal() {
		const { top, bottom } = revealS(i).getBoundingClientRect();

		if (bottom < 0) {
			return false;
		}

		if (top > window.innerHeight) {
			return false;
		}

		revealS(i).classList.add('reveal_active');
	}

	window.addEventListener('scroll', onReveal);
}



'use strict'
const interest = Array.from(document.querySelectorAll('.interest'));
const interestCheck = Array.from(document.querySelectorAll('.interest__check'));
let arr = [];  // пустой массив 


interestCheck.forEach(element => {

	let elementItem = Array.from(element.closest('.interest').querySelectorAll('.interest__check'));

	arr.push(elementItem)				// добавление элементов контретного родителя в массив 

	interest.forEach(childs => {
		let child = Array.from(childs.children);              // дети всех элементов с тегом li



		element.addEventListener('click', function () {
			// если у родительского чекбокса есть дети, то проставить им галочку, либо снять
			if (child.length > 1) {

				if (element.checked) {
					elementItem.map(item => item.checked = true)
				}

				if (element.checked === false) {
					elementItem.map(item => item.checked = false)
				}

			}
		})
	});
});










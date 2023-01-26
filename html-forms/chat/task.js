'use strict'
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const chatWidgetMessages = document.getElementById('chat-widget__messages');
const bottomElemnt = [];
const botResponse = [
	'Привет, кожаный ублюдок!',
	'беги Форест!',
	'Хьюстон, у нас проблема!',
	'Улыбаемся и машем, парни, улыбаемся и машем...',
	'К сожалению все операторы заняты...'
];
const botQuestion = [
	'Ты где?',
	"Кожаный ублюдок, ты где?",
	"Еще остались вопросы, кожаный?",
	"Форест, беги обратно!",
	"Оператор освободился",
	"Как делишки? Что делаешь?"
];

// время HH:MM
function getCurrentFormattedTime() {
	let currentTime = new Date();
	const hours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : `${currentTime.getHours()}`;
	const minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : `${currentTime.getMinutes()}`;

	return `${hours}:${minutes}`;
}

// ответ бота
function randomBotResponce() {
	let index = Math.floor(Math.random() * botResponse.length);
	return botResponse[index];
}

// вопрос бота
function randomBotQuestion() {
	let index = Math.floor(Math.random() * botQuestion.length);
	return botQuestion[index];
}

// прокрутка окна 
function scrollToBottom() {
	let elArr = Array.from(document.querySelectorAll('.message__text'));
	bottomElemnt.push(elArr[elArr.length - 1]);

	elArr[elArr.length - 1].scrollIntoView({ behavior: "smooth" })
}

// открытие чата 
chatWidget.addEventListener('click', () => {
	chatWidget.classList.add('chat-widget_active');
});

// чат
chatWidgetInput.addEventListener('keydown', (e) => {

	if (e.keyCode === 13) {

		// не отправлять пустое сообшение
		if (chatWidgetInput.value === '') {
			return false;
		}

		// отправка сообщение в чат
		chatWidgetMessages.innerHTML +=
			`<div class="message message_client">
				<div class="message__time">${getCurrentFormattedTime()}</div>
				<div class="message__text">
					${chatWidgetInput.value}
				</div>
		 	</div>
			<div class="message">
				<div class="message__time">${getCurrentFormattedTime()}</div>
				<div class="message__text">
		 	 		${chatWidgetMessages.innerHTML = randomBotResponce()}
				</div>
	 		</div>`;

		chatWidgetInput.value = '';

		// прокрутка окна вниз
		scrollToBottom()
	}

});

// вопрос бота если при простое
function afkTime() {
	setInterval(() => {
		chatWidgetMessages.innerHTML +=
			`<div class="message">
				<div class="message__time">${getCurrentFormattedTime()}</div>
				<div class="message__text">
		 	 		${chatWidgetMessages.innerHTML = randomBotQuestion()}
				</div>
	 		</div>`;
		scrollToBottom()
	}, 30000)
}

chatWidgetInput.addEventListener('focus', afkTime)



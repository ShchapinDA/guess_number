let guessNumber = Math.round(Math.random()*30);
let tries = 10;

//string const
function restartMessage() {
	return "Загаданное число поменялось";
}

function triesMore() {
	return "Попыток осталось: " + tries;
}

//Boolean funcs
function isLose() {
	return tries === 0;
}
function isWin(number) {
	return guessNumber === number;
}
function isGt(number) {
	return guessNumber > number;
}
function isLt(number) {
	return guessNumber < number;
}

//Action funcs
function makeTriesLess() {
	tries--;
}
function init() {
	guessNumber = Math.round(Math.random()*30);
	tries = 10;
}
function win() {
	init();
	return `Правильно! ${restartMessage()}`;
}
function lose() {
	init();
	return `Попытки закончились. Вы проиграли. ${restartMessage()}`;
}

function gt() {
	makeTriesLess();
	return `Загаданное число больше. ${triesMore()}`;
}

function lt() {
	makeTriesLess();
	return `Загадачное число меньше. ${triesMore()}`;
}

function guess(number) {
	if (isLose()) {
		return lose();
	}
	if (isWin(number)) {
		return win();
	}
	if (isGt(number)) {
		return gt();
	}
	if (isLt(number)) {
		return lt();
	}
	return "ошибка";
}

$(document).ready(function() {
	$(".btn").click(function() { //ищем эл-т с классом .btn
		const inputValue = $("input").val();  //получаем значение из текстового поля
		const resultValue = guess (+inputValue); //+ преобразует строку в число
		const $result = $(".result"); // ищет тег, куда вставить результат
		$result.html(resultValue); //вставляет результат в тэг
	});
});
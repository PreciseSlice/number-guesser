var randomNumber = Math.floor(Math.random() * 100 );
var guessBtn = document.getElementById('guess-btn');
var firstInput = document.querySelector('.first-input');
var guessValue = document.querySelector('.guess-value');
var clearBtn = document.getElementById('clear-button');
var feedback = document.querySelector('.feedback');
var resetBtn = document.querySelector('.reset-btn');
var lastGuess = document.querySelector('.last-guess');
var minInput = document.getElementById('min');
var maxInput = document.getElementById('max');
var max = 100;
var min = 0;


guessBtn.addEventListener('click', answer);
guessBtn.addEventListener('click', checkNumber);
clearBtn.addEventListener('click', clear);
resetBtn.addEventListener('click', reset);
minInput.addEventListener('blur', userMinMax);
maxInput.addEventListener('blur', userMinMax);

function userMinMax() {
	var userMin = parseInt(minInput.value)
	var userMax = parseInt(maxInput.value)
	randomNumber = Math.floor(Math.random() * (userMax - userMin + 1) + userMin);
	console.log('this ' + randomNumber)
}

function answer(event) {
	event.preventDefault();
	var theNumber = parseInt(firstInput.value);
	guessValue.innerText = theNumber;
	console.log(theNumber)
	enableBtn()
}

function clear(event) {
	event.preventDefault();
	firstInput.value = null;
}

function reset(event) {
	window.location.reload(true);
}

function enableBtn() {
	resetBtn.disabled=false
	clearBtn.disabled=false
}

function onWin() {
	var userMin = parseInt(minInput.value);
	var userMax = parseInt(maxInput.value);

	minInput.value = userMin - 10;
	maxInput.value = userMax + 10;
}

function checkNumber() {
	var userMin = parseInt(minInput.value)
	var userMax = parseInt(maxInput.value)
	var theNumber = parseInt(firstInput.value);
	lastGuess.innerText = "Your last guess was."
	
	if (theNumber > userMax) {
		feedback.innerText = "Please choose a number < or = the maximum value"
	}

	else if (theNumber < userMin) {
		feedback.innerText = "Please choose a number > or = to the minimum value"
	}

	else if (theNumber > randomNumber) {
		feedback.innerText = "That is too high.";
	}

	else if (theNumber < randomNumber) {
		feedback.innerText = "That is too low."
	}

	else if (theNumber === randomNumber) {
		feedback.innerText = "BOOM!";
		onWin();
		userMinMax();

		console.log(minInput.value)
		console.log(maxInput.value)
		console.log(randomNumber)
	}

	else { 
		feedback.innerText = "What have you done! Please enter a number."
	}
}

console.log(randomNumber)






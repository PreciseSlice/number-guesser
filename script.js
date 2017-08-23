var randomNumber = Math.floor(Math.random() * 100 );
var guessBtn = document.getElementById('guess-btn');
var firstInput = document.querySelector('.first-input');
var guessValue = document.querySelector('.guess-value');
var clearBtn = document.getElementById('clear-button');
var feedback = document.querySelector('.feedback');
var resetBtn = document.querySelector('.reset-btn');
var lastGuess = document.querySelector('.last-guess');


guessBtn.addEventListener('click', answer);
guessBtn.addEventListener('click', checkNumber);
clearBtn.addEventListener('click', clear);
resetBtn.addEventListener('click', reset);

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

function checkNumber() {
	var theNumber = parseInt(firstInput.value);
	lastGuess.innerText = "Your last guess was."
	
	if (theNumber > 100) {
		feedback.innerText = "Please choose a number < or = 100"
	}

	else if (theNumber < 1) {
		feedback.innerText = "Please choose a number > 0"
	}

	else if (theNumber > randomNumber) {
		feedback.innerText = "That is too high.";
	}

	else if (theNumber < randomNumber) {
		feedback.innerText = "That is too low."
	}

	else if (theNumber === randomNumber) {
		feedback.innerText = "BOOM!"
	}

	else { 
		feedback.innerText = "what have you done! Please enter a number."
	}
}

console.log(randomNumber)






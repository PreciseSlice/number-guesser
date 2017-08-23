var randomNumber = Math.floor(Math.random() * 100 );
var guessBtn = document.getElementById('guess-btn');
var firstInput = document.querySelector('.first-input');
var guessValue = document.querySelector('.guess-value');
var clearBtn = document.getElementById('clear-button');
var feedback = document.querySelector('.feedback');
var resetBtn = document.querySelector('.reset-btn');


guessBtn.addEventListener('click', answer);
guessBtn.addEventListener('click', checkNumber);
clearBtn.addEventListener('click', clear);
resetBtn.addEventListener('click', reset);

function answer(event) {
	event.preventDefault();
	var theNumber = parseInt(firstInput.value);
	guessValue.innerText = theNumber;
	console.log(theNumber)
}

function clear(event) {
	event.preventDefault();
	firstInput.value = null;
}

function reset(event) {
	window.location.reload(true);
}

function checkNumber() {
	var theNumber = parseInt(firstInput.value);

	if (theNumber > randomNumber) {
		feedback.innerText = "That is too high.";
	}

	else if (theNumber < randomNumber) {
		feedback.innerText = "That is too low."
	}

	else if (theNumber === randomNumber) {
		feedback.innerText = "BOOM!"
	}

	else { 
		feedback.innerText = "what have you done!"
	}
}

console.log(randomNumber)






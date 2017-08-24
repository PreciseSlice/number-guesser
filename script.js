// Global variables 
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

// Event listeners
guessBtn.addEventListener('click', answer);
guessBtn.addEventListener('click', checkNumber);
clearBtn.addEventListener('click', clear);
resetBtn.addEventListener('click', reset);
minInput.addEventListener('blur', userMinMax);
maxInput.addEventListener('blur', userMinMax);

// Functions

// Gathers values specified by user and generates new random number with those variables.
function userMinMax() {
	var userMin = parseInt(minInput.value);
	var userMax = parseInt(maxInput.value);
	randomNumber = Math.floor(Math.random() * (userMax - userMin + 1) + userMin);
}

// Turns input value into a number, displays number in h2, makes gues value into theNumber, turns on disabled buttons.
function answer(event) {
	event.preventDefault();
	var theNumber = parseInt(firstInput.value);
	guessValue.innerText = theNumber;
	enableBtn();
}

// Clears first input when clear button is clicked.
function clear(event) {
	event.preventDefault();
	firstInput.value = null;
}

// Reloads page when reset button is clicked.
function reset(event) {
	window.location.reload(true);
}

// Enables buttons that are disabled on page load once the guess button is clicked.
function enableBtn() {
	resetBtn.disabled=false;
	clearBtn.disabled=false;
}

// Triggers actions when user wins. Turns the values into number, and then increments max by 10, decrments min by -10. Displays alert which explains to user that they won and the new range.
function onWin() {
	var userMin = parseInt(minInput.value);
	var userMax = parseInt(maxInput.value);
	minInput.value = userMin - 10;
	maxInput.value = userMax + 10;
	window.alert("BOOM You won! Time for the next level. Your range of numbers has grown. The minimum has decreased by -10 the maximum has increased by +10. Good luck!");
}

// Function with if else logic tree.

// Function turns the guess and range into a number. Displays "your last was." on h3. Displays the users last guess on h2.

// If else logic runs through possible cases where user might put undisired inputs in and displays error messages. Also checks to see if user won then triggers win functions.

function checkNumber() {
	var userMin = parseInt(minInput.value);
	var userMax = parseInt(maxInput.value);
	var theNumber = parseInt(firstInput.value);
	lastGuess.innerText = "Your last guess was.";
	var guessInput = document.querySelector('.first-input');
	guessInput.value = "";
	
	if (theNumber > userMax) {
		feedback.innerText = "Please choose a number < or = the maximum value";
	}

	else if (theNumber < userMin) {
		feedback.innerText = "Please choose a number > or = to the minimum value";
	}

	else if (theNumber > randomNumber) {
		feedback.innerText = "That is too high.";
	}

	else if (theNumber < randomNumber) {
		feedback.innerText = "That is too low.";
	}

	else if (theNumber === randomNumber) {
		feedback.innerText = "BOOM!";
		onWin();
		userMinMax();
	}

	else { 
		feedback.innerText = "What have you done! Please enter a number.";
	}
}
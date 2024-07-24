// Generate a random number between 1 and 100
/*const randomNumber = Math.floor(Math.random() * 100) + 1;

// Variables to store references to DOM elements
const guessField = document.getElementById('guessField');
const submitButton = document.querySelector('button');
const message = document.getElementById('message');
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
    let userGuess = Number(guessField.value);
    attempts++;

    if (attempts === 1) {
        message.textContent = 'Previous guesses: ';
    }

    message.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        message.textContent += "\n"
        message.style.color = 'green';
        gameOver();
    } else if (attempts === 10) {
        message.textContent = `Game Over. The number was ${randomNumber}.`;
        message.textContent += "\n"
        message.style.color = 'red';
        gameOver();
    } else {
        message.textContent += userGuess < randomNumber ? ' - Too low, try again.' : ' - Too high, try again.';
        message.textContent += " "
        message.style.color = 'black';
    }

    guessField.value = '';
    guessField.focus();
}

// Function to end the game
function gameOver() {
    guessField.disabled = true;
    submitButton.disabled = true;
}*/
let userHand = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10)]
let userTotal = 0
const button = document.getElementById("new-button")

function drawHand()
{
    for (var i = 0; i < userHand.length; i++)
    {
        userTotal = userTotal += userHand[i]
    }
    return userHand
}
drawHand()

function pushButton()
{
    if (button)
        {
            userHand.push(Math.floor(Math.random() * 10))
            drawHand()
            console.log(userTotal)
        }
    
}

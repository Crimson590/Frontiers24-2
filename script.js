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
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}

let dealerHand = [randInt(1, 10), randInt(1, 10)]
let dealerTotal
let userHand = [randInt(1, 10), randInt(1, 10)]
let userTotal

const button = document.getElementById("draw-button")
const textOutput = document.getElementById("text-output");
const instCheckbox = document.getElementById("inst-checkbox")
const instructions = document.getElementById("BlackJackInst")
const restartButton = document.getElementById("restart-button")
const endTurnButton = document.getElementById("end-draw-button") 

function checkInstBox()
{
    if (instCheckbox.checked)
    {
        instructions.style.display = "block"
    }
    else
    {
        instructions.style.display = "none"
    }
}

function drawHand()
{
    userTotal = 0
    for (var i = 0; i < userHand.length; i++)
    {
        userTotal += userHand[i]
    }
    return userTotal
}
//drawHand()

function drawDealerHand()
{
    dealerTotal = 0
    for (var x = 0; x < dealerHand.length; x++)
    {
        dealerTotal += dealerHand[x] 
    }
    return dealerTotal
}

console.log(userHand)
console.log("User Total: " + drawHand())
console.log(dealerHand)
console.log("Dealer Total: " + drawDealerHand())

function pushButton()
{
    if (button)
        {
            var last = randInt(1, 10)
            userHand.push(last)
            console.log(last)
            drawHand()
            
            console.log(userTotal)
        }
}

function textFieldChanged() {
    let score = userTotal;
    textOutput.innerHTML = `${score}`;
    if (score > 21)
        {
            alert(`Game Over!, your score was ${score}!`)
            userTotal = 0
            score = 0
        }
}

function endTurn()
{
    while (dealerTotal < 16 || (dealerTotal > userTotal && dealerTotal <= 21))
    {
        var last = randInt(1, 10)
        dealerHand.push(last)
        console.log(last)
        drawDealerHand()
        
        console.log(userTotal)
        console.log(dealerTotal)
        if (dealerTotal >= 16)
        {
            if (dealerTotal < userTotal)
            {
                alert("You win! You drew " + String(userTotal) + " while the dealer drew " + String(dealerTotal))
            }
            break;
        }
        else if (dealerTotal > userTotal && dealerTotal <= 21)
        {
            alert("You Lose! The Dealer drew " + String(dealerTotal) + " which is greater than " + String(userTotal))
        }
    }
}
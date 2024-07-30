const button = document.getElementById("draw-button")
const textOutput = document.getElementById("text-output");
const DealerOutput = document.getElementById("dealer-output")
const instCheckbox = document.getElementById("inst-checkbox")
const instructions = document.getElementById("BlackJackInst")
const restartButton = document.getElementById("restart-button")
const endTurnButton = document.getElementById("end-draw-button") 

function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}

// Initialize Variables
let dealerHand = [randInt(1, 10), randInt(1, 10)]
let dealerTotal 
let userHand = [randInt(1, 10), randInt(1, 10)]
let userTotal = userHand[1] + userHand[0]

function checkInstBox()
{
    // checks if instruction box is checked
    if (instCheckbox.checked)
    {
        instructions.style.display = "block"
    }
    else
    {
        instructions.style.display = "none"
    }
}

//Draw initial hand
function drawHand()
{
    userTotal = 0
    for (var i = 0; i < userHand.length; i++)
    {
        userTotal += userHand[i]
    }
    return userTotal
}
textOutput.innerHTML = `Your Total: ${userTotal}`

//draw Dealer Hand
function drawDealerHand()
{
    dealerTotal = 0
    for (var x = 0; x < dealerHand.length; x++)
    {
        dealerTotal += dealerHand[x] 
    }
    //console.log("Dealer Total: " + dealerTotal)
    return dealerTotal
}

DealerOutput.innerHTML = `Dealer Hand: *, ${dealerHand[1]}`

//Console Dev Stuff
console.log("UserHand = " + userHand)
console.log("User Total: " + drawHand())
console.log("DealerHand = *, " + dealerHand[1])
console.log("Dealer Total: " + drawDealerHand())

function pushButton()
{
    //Push Draw Button Function
    if (button)
    {
        var last = randInt(1, 10)
        userHand.push(last)
        console.log("Last number in User Array: " + last)
        drawHand()
        
        console.log("User Total: " + userTotal)
    }
    
}

function textFieldChanged() {
    //Text Field Changed Function
    let score = userTotal;
    textOutput.innerHTML = `Your Total: ${score}`;
    if (score > 21)
    {
        alert(`Game Over!, your score was ${score}!`)
        location.reload()
    }
}

function endTurn()
{
    //User Pressed End Turn Button
    while (dealerTotal <= 16)
    {
        var last = randInt(1, 10)
        dealerHand.push(last)
        console.log("Last number in Dealer Array: " + last)
        drawDealerHand()
        
        console.log("User Total: " + userTotal)
        console.log("Dealer Total: " + dealerTotal)
    }
    winners()
}

function winners()
{
    //Determine Winners
    if (dealerTotal >= 16)
        {
            if (dealerTotal < userTotal)
            {
                alert("You win! You drew " + String(userTotal) + " while the dealer drew " + String(dealerTotal))
                
            }
            else if (dealerTotal > 21)
            {
                alert("Dealer drew out! You Win!")
            }
            else if (dealerTotal === userTotal)
            {
                alert("It's a tie...?")
            }
            else if (dealerTotal > userTotal && dealerTotal <= 21)
            {
                alert("You Lose! The Dealer drew " + String(dealerTotal) + " which is greater than " + String(userTotal))
                location.reload()
            }
            location.reload()
        }
    
}
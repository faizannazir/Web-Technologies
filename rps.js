function init()
{
const options = ['rock', 'paper', 'scissor'];
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const result = document.getElementById('result')
const yourPick = document.getElementById('yourPick')
const comPick = document.getElementById('comPick')
const yourScore = document.getElementById('yourScore')
const comScore = document.getElementById('comScore')
const tie = document.getElementById('tie')
let tieValue 
let yourScoreValue
let comScoreValue 
const reset = document.getElementById('reset')
let computerSelection;
let userSelection;

function getRandomValue(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}



rock.addEventListener('click', function() {
    userSelection = this.getAttribute('data-value');
    computerSelection = getRandomValue(options);
    yourPick.innerHTML = userSelection
    comPick.innerHTML = computerSelection
    result.innerHTML = checkWinner(userSelection,computerSelection)
});

paper.addEventListener('click', function() {
    userSelection = this.getAttribute('data-value');
    computerSelection = getRandomValue(options);
    yourPick.innerHTML = userSelection
    comPick.innerHTML = computerSelection
    result.innerHTML = checkWinner(userSelection,computerSelection)
});

scissor.addEventListener('click', function() {
    userSelection = this.getAttribute('data-value');
    computerSelection = getRandomValue(options);
    yourPick.innerHTML = userSelection
    comPick.innerHTML = computerSelection
    result.innerHTML = checkWinner(userSelection,computerSelection)
});

function checkWinner(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
         tieValue = parseInt(document.getElementById('tie').innerHTML)
        tie.innerHTML = tieValue+1
        return "It's a tie";
    } 
    else if (userSelection === options[0] && computerSelection === options[2] ||
               userSelection === options[1] && computerSelection === options[0] ||
               userSelection === options[2] && computerSelection === options[1])
    {
         yourScoreValue = parseInt(document.getElementById('yourScore').innerHTML)
        yourScore.innerHTML =  yourScoreValue+1
        return "You win";
    } else {
         comScoreValue = parseInt(document.getElementById('comScore').innerHTML)
        comScore.innerHTML = comScoreValue + 1
        return "Computer wins";
    }
}
reset.addEventListener('click', function() {
    comScore.innerHTML = 0
    yourScore.innerHTML = 0
    tie.innerHTML = 0
});



}

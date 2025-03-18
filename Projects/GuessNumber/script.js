const rndmNo = parseInt(Math.random() * 100 + 1 )   //no. can be 100 but not 0

const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const result = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(input.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //check validations 1-100
    if(isNaN(guess)){
        alert('please enter valid number')
    }
    else if(guess < 1){
        alert('please enter number more than 1')
    }
    else if(guess > 100){
        alert('please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuesses == 11){
            displayGuess(guess)
            displayMsg(`Game Over , Random number was ${rndmNo}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //random no. not equal
}

function displayGuess(guess){
    //clean values update remaining 
}

function displayMsg(msg){
    //DOM interaction
}

function newGame(){

}

function endGame(){

}
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
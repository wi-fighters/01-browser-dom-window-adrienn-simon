const randomizer = Math.ceil(Math.random() * 10);
let randomNumber = randomizer;
let playerNumber = prompt("Guess a number between 1-10:");
let attempts = 0;

if (playerNumber === randomNumber) {
    alert(`Success, the number was ${
        randomNumber
    }! Attempts: ${attempts}`)
}
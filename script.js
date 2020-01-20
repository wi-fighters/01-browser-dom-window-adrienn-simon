//getting random number
let randomNumber = Math.ceil(Math.random() * 10);
//converting user input to integer
let playerNumber = parseInt(prompt("Guess a number between 1-10:"));
//defining the number of attempts possible
let attempts = 2;

//for developers to see the actual number
console.log("actual number:" +
    randomNumber);

//create function
const evaluation = () => {
    //check number of attempts, and if player number equals with random number
    while (attempts !== 0 && randomNumber !== playerNumber) {
        //decrementing the number of attempts
        --attempts;
        //in case the number is wrong, print error message
        playerNumber = parseInt(prompt(`Nope, try again! Attempts left: ${attempts+1}`));
        //if number is true, print success
        if (playerNumber === randomNumber) {
            alert(`Success, the number was ${
                randomNumber
            }! Attempts: ${attempts+1}`)
        }

        console.log(attempts)

    }
    //in case there's no attempts left and no match, get fail message, and option to play again
    if (attempts === 0) {
        let tryAgain = confirm(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}`);
        if (tryAgain) {
            attempts = 3;
            randomNumber = Math.ceil(Math.random() * 10)
            evaluation();
        }
    }
}
evaluation();


// else {
//     prompt(`Nope, try again! Attempts left: ${attempts}`)
// }
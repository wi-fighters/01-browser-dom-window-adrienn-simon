(() => {
    const promptForGuesses = number => {

        let attempts = 0;
        let userGuess = prompt(`Guess a number between 1 and 10:`);


        while (attempts < 3) {

            if (randomNumber !== parseInt(userGuess, 10)) {
                prompt(`Nope, sorry, try again. You have still ${2 - attempts} attempts left.`);
                attempts += 1;
            }
            if (randomNumber === parseInt(userGuess, 10)) {
                prompt(`Yeah! Congratulations you made it!`);
                return randomNumber;
            }
            if (attempts === 2) {
                alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber} !`);
                return;
            }
        };


    };


    const randomNumber = Math.floor(Math.random() * 10) + 1;
    promptForGuesses(randomNumber);
    // console.log(promptForGuesses(randomNumber));
})();
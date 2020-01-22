(() => {
    const promptForGuesses = number => {

        let attempts = 0;
        let userNumber = prompt(`Guess a number between 1 and 10:`);

        while (attempts < 2) {

            if (randomNumber !== parseInt(userNumber, 10)) {
                prompt(`Nope, sorry, try again. You have still ${2 - attempts} attempts left.`);
                attempts += 1;
            }
            if (randomNumber === parseInt(userNumber, 10)) {
                prompt(`Yeah! Congratulations you made it!`);
                return randomNumber;
            }
            if (attempts === 2) {
                return alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber} !`);
            }
        };

    };


    const randomNumber = Math.floor(Math.random() * 10) + 1;
    promptForGuesses(randomNumber);
})();
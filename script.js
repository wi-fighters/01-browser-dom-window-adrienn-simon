(() => {
    const promptForGuesses = number => {

        const attempts = 0;

        let userNumber = prompt(`Guess a number between 1 and 10:`);


        while (attempts < 3) {

            if (randomNumber !== parseInt(userNumber, 10)) {
                prompt(`"Nope, sorry, try again"`);
                attempts++;
            } else {
                prompt(`You reached max Numbers of tries`);
            } if (randomNumber === parseInt(userNumber, 10)) {
                prompt(`Yeah! Congratulations you made it!`);
            }

        };


        // if (the user guesses a correct number)
        // print success message and number of attempts
        // stop the loop (TODO: break? return?)

        // else 
        // update prompt message: "Nope, sorry, try again"
        // }

        // assuming we didn't return before
        // print fail message: "Sorry, you failed to guess the number in three attempts. The number was 2!"
    };


    const randomNumber = Math.floor(Math.random() * 10) + 1;
    promptForGuesses(randomNumber);
})();
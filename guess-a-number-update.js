function guessANumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let guess;
    let numberOfGuesses = 0;
    





    let recursiveAsyncReadLine = function () {
        
            readline.question(`Guess the number (0-100):`, (number) => {

                guess = Number(number);
                numberOfGuesses++;

                if (numberOfGuesses === 11) {
                    console.log('Out of tries');
                    return readline.close();
   
                  }


                if (guess <= 100 && guess >= 0) {

                    if (guess === computerGuess) {
                        console.log('You guess it!');
                        return readline.close();
                    } else if (guess < computerGuess) {
                        console.log(`Too low! ${10 -numberOfGuesses} tries left!`);                        
                        recursiveAsyncReadLine();
                    } else if (guess > computerGuess) {
                        console.log(`Too high! ${10 -numberOfGuesses} tries left!`); 
                        recursiveAsyncReadLine();
                    }
                } else {
                    console.log('Invalid number! Try again.');
                    recursiveAsyncReadLine();
                }
  

            })

           

    }
    recursiveAsyncReadLine()
}
guessANumber()

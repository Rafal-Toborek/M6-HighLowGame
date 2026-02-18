let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;



// Create while loop that continues for as long as the user guesses are incorrect.
while(userGuess != randomNumber) {
    attempts ++; // Loop should count the number of guesses.
    if (userGuess == '999') {
        break; // Loop should exit if user enters 999 and not display "Too high!"
    }
    else if (userGuess < randomNumber) { // If the guess is too low, the user should be promped "Too low!" and be able to guess again.
        window.alert("too low")
    }
    else if (userGuess > randomNumber) { // If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
        window.alert("Too high")
    }

    else {
        window.alert("Invalid input try again") // If anything else is entered, the user should be prompted that their input is invalid and 
    }
    userGuess = Number(prompt("Too high! Guess again:")); // Prompt user for a number between 1 and 10, or type 999 to exit.

}
if (userGuess == randomNumber) {
    alert("Congratulations, you've guessed it in " + attempts + ' tries!'); 
}





// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.
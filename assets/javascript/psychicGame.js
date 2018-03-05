
// Creates an array that lists out all of the options (various letters).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];


//need computer to guess start initial letter
    window.onload = function() {
      var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      var userGuess = event.key;
      lettersGuessed.push(userGuess);
        console.log(userGuess)


      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
        if ((userGuess === computerGuess[0]) && (guessesLeft >0)){
          wins++;
          guessesLeft = 9;
          lettersGuessed.length = 0;
          computerGuess.length = 0;
          var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
          computerGuess.push(compGuess);
          console.log(computerGuess[0]);
        }

        else if((userGuess !== computerGuess[0]) && (guessesLeft >0)) {
            guessesLeft=guessesLeft-1;
            console.log(guessesLeft);            
        }

        else {
            losses++;
            guessesLeft = 9;
            lettersGuessed.length = 0;
            computerGuess.length = 0;
	        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	        computerGuess.push(compGuess);
	        console.log(computerGuess[0]);
        }


        
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
       // "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>You chose: " + userGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    
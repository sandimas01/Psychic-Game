
// Creates an array that lists out all of the options (various letters).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

var userGuess = " "
var ascii9 = "ASCII9 ART";

//need computer to guess start initial letter
    window.onload = function() {
      var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      computerGuess.push(compGuess);
        console.log(computerGuess[0]);

        var html =
         "<p>You chose: " + userGuess + "</p>" +
         "<p>wins: " + wins + "</p>" +
         "<p>losses: " + losses + "</p>" +
         "<p>Guesses Left: " + guessesLeft + "</p>" +
         "<p>Your guesses so far: " + lettersGuessed + "</p>";
          document.querySelector("#game").innerHTML = html;

         var html2 =
          "<p>" + ascii9 + "</p>" ;
          document.querySelector("#game2").innerHTML = html2;
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

        if (guessesLeft === 9){
            var ascii9 = "ASCII9 ART";
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

        


        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html2 =
        "<p>" + ascii9 + "</p>" ;
        // "<p>" + ascii8 + "</p>" +
        // "<p>" + ascii7 + "</p>" +
        // "<p>" + ascii6 + "</p>" +
        // "<p>" + ascii5 + "</p>" +
        // "<p>" + ascii4 + "</p>" +
        // "<p>" + ascii3 + "</p>" +
        // "<p>" + ascii2 + "</p>" +
        // "<p>" + ascii1 + "</p>" +
        // "<p>" + ascii0 + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game2").innerHTML = html2;

      }
    
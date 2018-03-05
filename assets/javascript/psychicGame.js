// i need some for loops to get 'guesses left' working
// and get 'losses counter' working correctly 
//press letters 9 times

// push in the array user guesses



    // Creates an array that lists out all of the options (various letters).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var lettersGuessed = [];
    var computerGuess = [];




// Set up an array of numbers.
//var nums = [1, 8, 2, 3, 1, 1, 6, 6, 6];

    
    // Creating an empty array for our favorite TV shows.
    // var favTVshows = [];
    // var tvShow;
    
    // --------------------------------------------------------------------------


    // This function is run whenever the user presses a key.
    // Determines which key was pressed.
    //var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); ***save for later***

    document.onkeyup = function(event) {
      var userGuess = event.key;
      lettersGuessed.push(userGuess);
        console.log(userGuess)


      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      computerGuess.push(compGuess);
        console.log(computerGuess[0]);

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
        if ((userGuess === computerGuess[0]) && (guessesLeft >0)){
          wins++;

        }
        else if((userGuess !== computerGuess[0]) && (guessesLeft >0)) {
            guessesLeft=guessesLeft-1;
            console.log(guessesLeft);
            
            
        }
        else {
            losses++;

        }
        //----------------------------------------------------------------------------
// Set up an array of numbers.
      //var nums = [1, 8, 2, 3, 1, 1, 6, 6, 6];

    //   // Loop through the array we just set up.
    //   for (var i = 0; i < computerChoices.length; i++) {
    //     // If the current number is greater than 2..
    //     if (computerChoices[i] > 2) {
    //       // Log "number is greater than 2".
    //       console.log("number is greater than 2");
    //     }
    //     // Otherwise
    //     else {
    //       // Log "number is not greater than 2"
    //       console.log("number is not greater than 2");
    //     }
    //   }

//  // For-Loop that will repeat three times.
//  for (var i = 1; i < 4; i++) {

//    // Each time it asks the user for their #1, #2, or #3 TV show.
//    tvShow = prompt("What's your #" + i + " favorite TV show?");

//    // It then takes the user's response and "pushes" (or adds) the variable to the end of the favTVshows array.
//    favTVshows.push(tvShow);
//  }


//  // We then loop through the favTVshows array...
//  for (var j = 0; j < favTVshows.length; j++) {

//    // ...and create alert messages listing out each show in our array.
//    console.log(favTVshows[j]);
//  }



 //--------------------------------------------------------------------------------------------

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>";
          "<p>losses: " + losses + "</p>";
          "<p>Your guesses so far: " + lettersGuessed + "</p>";

         // "<p>losses: " + nums + "</p>";
        //   "<p>losses: " + favTVshows + "</p>";
        //   "<p>losses: " + tvShow + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }
    
$(document).ready(function(){

  var words = ["awkward", "bungler", "corrupt", "collusion", "liar", "braggard", "glutton", "hazard", "insecure", "impeach", "simpleton", "jailtime", "unqualified", "klutz", "numbskull","unzip", "trophy", "twitter", "yacht", "imbecile", "zigzag", "grope", "zombie"];
  var winsCnt = 0;     // games won
  var word = "";    // word to guess
  var lives;    // number of guesses left
  var guesses ="";  // string of guessed letters
  var picked = [];
  var rightCnt; // count of correct guesses
  var pick = "";

  console.log("Variables declared.");

  // parse word into letters and display as a horizontal, unordered list
  // create HTML tags and insert into currentWord
  displaySpaces = function() {
    // console.log("Begin displaySpaces.")
    var ul = document.createElement("ul"), li, tx;
    for (var i = 0; i < word.length; i++) {
      li = document.createElement("li");
      tx = document.createTextNode('_');
      var ltrID = "ltr" + i;
      li.appendChild(tx);
      li.setAttribute('id', ltrID);
      ul.appendChild(li);
    }
    currentWord.innerHTML = "";
    currentWord.appendChild(ul);
    // console.log("End displaySpaces.")
  }

  checkForMatch = function(char) {
    console.log("Begin checkForMatch()");
    for (var j = 0; j < word.length; j++) {
      // console.log("cFM loop" + j " word is " + word + ", char is " + char );
      if (char === word.charAt(j)) {
        console.log("  found a match!");
        var ltrID = "ltr" + j;
        document.getElementById(ltrID).innerHTML = char;
        rightCnt++;
        if (rightCnt === word.length){
          alert("You won!");
          countdown.innerHTML = "You win!";
          button.innerHTML = "Play again";
          winsCnt++;
          wins.innerHTML = winsCnt;
        }
      }
    }
    console.log("End checkForMatch()");
  }

  guess = function(char){
    console.log("Begin guess()");
    guesses = guesses + char + " ";
    guessedLetters.innerHTML = guesses;
    checkForMatch(char);
    console.log("End guess()");
  }

  // play Hangman
  playHangman = function() {
    lives = 8;
    rightCnt = 0;
    guesses = "";
    guessedLetters.innerHTML = "";
    countdown.innerHTML = lives;
    word = words[Math.floor(Math.random() * words.length)];  // get word
    // alert(word);
    displaySpaces();
    document.onkeyup = function(event) {
      if (lives > 0) {
        pick = event.key;
        guess(pick);
      }
      lives--;
      countdown.innerHTML = lives;
      if (lives <= 0) {
        alert("You lost!");
        countdown.innerHTML = "You lose!";
        button.innerHTML = "Play again";
      }
    }

  }

  // main
  $("button").click(function(){
    debugger;
    console.log("Begin Main");
    playHangman();
  });


//  }
});

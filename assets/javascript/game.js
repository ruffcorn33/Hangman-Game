$(document).ready(function(){

  var words = ["awkward", "bungler", "corrupt", "collusion", "liar", "braggard", "glutton", "hazard", "insecure", "impeach", "simpleton", "jailtime", "unqualified", "klutz", "numbskull","unzip", "trophy", "twitter", "yacht", "imbecile", "zigzag", "grope", "zombie"];
  var wins = 0;     // games won
  var word = "";    // word to guess
  var lives = 0;    // number of guesses left
  var guesses ="";  // string of guessed letters
  var picked = [];
  var rightCnt = ""; // count of correct guesses


  // get word from words[]
  getWord = function() {
    word = words[Math.floor(Math.random() * words.length)];
  }

  // parse word into letters and display as a horizontal, unordered list
  // create HTML tags and insert into currentWord
  displaySpaces = function() {
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
  }

  // give the player more guesses than letters with a minimum of 8
  getLives = function() {
    lives = (Math.ceil(word.length * 1.5));
    if (lives < 8) {
      lives = 8;
    }
    countdown.innerHTML = lives;  // move number of guesses to HTML
    // console.log(lives);
  }

  guessUL = function() {
    var ul = document.createElement("ul");
    ul.setAttribute('id', 'guessList');
    ul.setAttribute('class', 'd-flex justify-content-center');
    guessedLetters.innerHTML = "";
    guessedLetters.appendChild(ul);
  }

  guessLI = function(x) {
      li = document.createElement("li");
      tx = document.createTextNode(x);
      li.appendChild(tx);
      guessList.appendChild(li);
  }

  checkForAlpha = function(x) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var str = "/" + x + "/i";
    var res = alphabet.match(str);
    console.log("Letter: " + x + "  string: " + str + "  result: " + res);
    if (res != null) {
      return true;
    }
  }

  guess = function(i){
    document.onkeyup = function(letter){
      checkForAlpha(letter.key)
      if (checkForAlpha(true)){
        for (var x = 0; x < picked.length; x++) {
          if (letter.key === picked[x]) {
            alert("You already chose that letter.  Pick another.");
          }
        }
      }
      else {
        alert("That is not an alphabet key.  Pick another.");
      }
      picked.push(letter.key);
      console.log(picked);

      console.log(letter.key);
      console.log("Guess Count: " + i);
      countdown.innerHTML = lives - i;
      console.log("Lives: " + lives);
      // guesses = guesses + letter.key + " ";
      // guessedLetters.innerHTML = guesses;
      console.log(guesses);
      guessLI(letter.key);
    }
  }

  // play Hangman
  playHangman = function() {
    getWord();
    displaySpaces();
    getLives();
    guessUL();
    // for (i = 0; i < lives; i++) {
    for (var i = lives; i > 0; i--) {
        console.log("Lives: " + lives);
      guess(i);
    }
    playMsg.innerHTML = "Press any key to play again.";
  }

  document.onkeyup = function(event) {
    playMsg.innerHTML = "";
    playHangman();

  }
});

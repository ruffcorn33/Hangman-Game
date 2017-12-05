// declarations
var wordList = ["awkward", "bungler", "corrupt", "collusion", "liar", "braggard", "glutton", "hazard", "insecure", "impeach", "simpleton", "jailtime", "unqualified", "klutz", "numbskull","unzip", "trophy", "twitter", "yacht", "imbecile", "zigzag", "grope", "zombie"];
var wins = 0;
var word = "";
var allowedCnt = 0;
// var guessCnt = 0;
var guesses ="";

document.onkeyup = function() {
  playMsg.innerHTML = "";

  // generate a random number between 0 and length of wordlist array
  // to use as index for wordList array
  var idx = (Math.floor((Math.random()*wordList.length)));

  word = wordList[idx];
  // give the player more guesses than letters with a minimum of 6
  allowedCnt = (Math.ceil(word.length * 1.5));
  if (allowedCnt < 8) {
    allowedCnt = 8;
  }
  // console.log(allowedCnt);
  // move number of guesses to HTML
  countdown.innerHTML = allowedCnt;

  // parse word into letters and display as a horizontal, unordered list
  // create HTML tags and insert into currentWord
  var ul = document.createElement("ul"), li, tx;
  for (var i = 0; i < word.length; i++) {
      li = document.createElement("li");
      // tx = document.createTextNode(word.charAt(i));
      tx = document.createTextNode('_');
      var ltrID = "ltr" + i;
      li.appendChild(tx);
      li.setAttribute('id', ltrID);
      // li.setAttribute('class', 'masked');
      ul.appendChild(li);
  }
  // clear the last word and append the new spaces
  currentWord.innerHTML = "";
  currentWord.appendChild(ul);

  for (i=0; i < allowedCnt; i++) {
    document.onkeyup = function(letter){
      console.log(letter.key);
      console.log("Guess Count: " + i);
      countdown.innerHTML = allowedCnt - i;
      guesses = guesses + letter.key + " ";
      guessList.innerHTML = guesses;
      console.log(guesses);
    }
  }


  playMsg.innerHTML = "Press any key to play again.";

}

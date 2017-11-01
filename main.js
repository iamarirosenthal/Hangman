var word = require("./word.js");
var prompt = require("prompt");

console.log("Let's Play Hangman!");
console.log("Guess the letter of the name of a band");
console.log("-----------------------------");
prompt.start();




game = {
    wordList: ["Deftones", "GodHead", "SmashingPumpkins", "TheCure" ],
    wordsWon: 0,
    guessesRemaining: 10,
    currentWrd: null,

    startGame: function (wrd) {
      this.resetGuesses();
      this.currentWrd = new Word(this.wordList[math.floor(Math.random()* this.wordList.length)]);
      this.currentWrd.getlet();
      this.prompUser();
    },

    resetGuesses: function(){
        this.guessesRemaining = 10;
    },

    prompUser: function(){
      var self = this;
      prompt.get(["guessLet"], function(err, result){
        console.log("You chose: " + result.guessLet);
        var ManyGuessed = self.currentWrd.checkLetter(result.guessLet);

        if(ManyGuessed ==0) {
          console.log("Incorrect")
            self.guessesRemaining--;
        }else {
          console.log("Correct!");
             if(self.currentWrd.findWord()){
               console.log("You Won!");
               console.log("-------------------");
               return;
             }
        }

        console.log("Guesses Remaining: " + self.guessesRemaining);
        console.log("-------------------");
        if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
              self.prompUser();
        }
        else if(self.guessesRemaining ==0) {
           console.log("Game Over. You got it ", self.currentWrd.target);
        }else {
            console.log(self.currentWrd.wordRender());
        }
      });
    }
};

game.startGame();

var letter = function(let){
  this.char = let;
  this.appear = false;
  this.letterRender = function(){
         return !(this.appear) ? "_" : this.char;
  };
};

module.exports = letter;

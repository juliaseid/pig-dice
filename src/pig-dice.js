export function Player(name, roll, tempScore, totalScore){
  this.name = name,
  this.roll = roll,
  this.tempScore = tempScore,
  this.totalScore = totalScore;
}

  var toss = function(){
    console.log("hello");
  var randomDice = Math.floor((Math.random() *6))+1;
  return randomDice;
};

// expect((myPlayer.roll > 0) && (myPlayer.roll < 7)) // jest -> contains
Player.prototype.roll = function() {
  this.roll = toss();
 }

Player.prototype.scoreCheck = function() {
  
  if(this.roll === 1) {
    this.tempScore = 0 ; 
    alert(this.name + ", your turn is over, pass the mouse!");
  } else {
    this.tempScore += this.roll;
    //console.log(this.tempScore += this.roll);
  }
};



Player.prototype.hold = function(){
  this.totalScore = 0;
  this.totalScore += this.tempScore;
  this.tempScore = 0 ;
  alert(this.name + ", your turn is over, pass the mouse!");
};


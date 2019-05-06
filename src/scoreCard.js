'use strict'

function ScoreCard() {
  this.rolls = [];
  this.totalScore = 0;
};

ScoreCard.prototype.getRolls = function() {
  return this.rolls;
}

ScoreCard.prototype.addRoll = function (pins) {
  this.rolls.push(pins);
};

ScoreCard.prototype.getTotalScore = function () {
  for(var rollIndex = 0; rollIndex < this.rolls.length; rollIndex++ ) {
    if(this.isSpare(rollIndex)) {
      this.getSpareScore(rollIndex)
      rollIndex += 2;
    } else if (this.isStrike(rollIndex)) {
      this.getStrikeScore(rollIndex)
      rollIndex += 1;
    }
    this.totalScore += this.rolls[rollIndex];
  };
  return this.totalScore;
};

ScoreCard.prototype.isSpare = function(rollIndex) {
  return (this.rolls[rollIndex] + this.rolls[rollIndex + 1]) === 10;
};

ScoreCard.prototype.getSpareScore = function(rollIndex) {
  var roundScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  var spareBonus = this.rolls[rollIndex + 2];
  return this.totalScore += roundScore + spareBonus;
}

ScoreCard.prototype.isStrike = function(rollIndex) {
  return this.rolls[rollIndex] === 10;
};

ScoreCard.prototype.getStrikeScore = function(rollIndex) {
  var roundScore = 10
  var strikeBonus = this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
  return this.totalScore += roundScore + strikeBonus;
}

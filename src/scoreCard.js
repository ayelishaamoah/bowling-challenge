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
  for(var roll = 0; roll < this.rolls.length; roll++ ) {
    this.totalScore += this.rolls[roll];
  };
  return this.totalScore;
};

'use strict'

function ScoreCard() {
  this.rolls = [];
  this.totalScore = 0;
  this.MAX_FRAMES = 10;
};

ScoreCard.prototype.getRolls = function() {
  return this.rolls;
}

ScoreCard.prototype.addRoll = function (pins) {
  this.rolls.push(pins);
};

ScoreCard.prototype.getTotalScore = function () {
  var rollIndex = 0;
  for(var frameIndex = 0; frameIndex < MAX_FRAMES; frameIndex++ ) {
    if(this.isSpare(rollIndex)) {
      this.totalScore += this.getRoundScore(rollIndex) + this.getSpareBonus(rollIndex)
      rollIndex += 2;
    } else if (this.isStrike(rollIndex)) {
      var strike = 10
      this.totalScore += strike + this.getStrikeBonus(rollIndex)
      rollIndex += 1;
    } else {
      this.totalScore += this.getRoundScore(rollIndex);
      rollIndex += 2;
    };
  };
  return this.totalScore;
};

ScoreCard.prototype.isSpare = function(rollIndex) {
  return (this.rolls[rollIndex] + this.rolls[rollIndex + 1]) === 10;
};

ScoreCard.prototype.getRoundScore = function (rollIndex) {
  return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
};

ScoreCard.prototype.getSpareBonus = function(rollIndex) {
  return this.rolls[rollIndex + 2];
}

ScoreCard.prototype.isStrike = function(rollIndex) {
  return this.rolls[rollIndex] === 10;
};

ScoreCard.prototype.getStrikeBonus = function(rollIndex) {
  return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
}

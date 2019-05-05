'use strict'

function ScoreCard() {
  this.frames = [];
  this.totalScore = 0;
};

ScoreCard.prototype.getFrames = function() {
  return this.frames;
}

ScoreCard.prototype.addRoll = function (number) {
  this.totalScore += number;
};

ScoreCard.prototype.getTotalScore = function () {
  return this.totalScore;
};

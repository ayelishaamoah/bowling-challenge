'use strict'

function ScoreCard() {
  this.frames = [];
  this.totalScore = 0;
  this.currentFrame = [];
};

ScoreCard.prototype.getFrames = function() {
  return this.frames;
}

ScoreCard.prototype.addRoll = function (number) {
  if (this.currentFrame.length == 0){
    this.currentFrame.push(number);
  } else if (this.currentFrame.length == 1) {
    this.currentFrame.push(number);
    this.frames.push(this.currentFrame)
    this.currentFrame = [];
  }
  this.totalScore += number;
};

ScoreCard.prototype.getTotalScore = function () {
  return this.totalScore;
};

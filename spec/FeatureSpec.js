'use strict'

describe('Features', function() {
  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  });

  // a new scorecard should start with blank frames
  it('has an empty frames array', function() {
    expect(scoreCard.getFrames()).toEqual([]);
  });

  describe('addRoll', function() {
    it('allows a user to add a roll', function(){
       scoreCard.addRoll(2);
       expect(scoreCard.getTotalScore()).toEqual(2);
    });
  });

});

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

  // a user can add a roll
  describe('addRoll', function() {
    it('allows a user to add a roll', function(){
       scoreCard.addRoll(2);
       expect(scoreCard.getTotalScore()).toEqual(2);
    });

  // a user can take a complete return
    it('allows a user to complete a turn', function() {
      scoreCard.addRoll(2);
      scoreCard.addRoll(5);
      expect(scoreCard.getFrames()).toContain([2,5]);
    });
  });
});

'use strict'

describe('Features', function() {
  var scoreCard;

  beforeEach(function(){
    scoreCard = new ScoreCard();
  });

  // a user can add rolls
  describe('addRoll', function() {
    it('allows a user to add rolls', function() {
      scoreCard.addRoll(2);
      scoreCard.addRoll(5);
      for (var i = 0 ; i < 18; i++) {
        scoreCard.addRoll(0);
      }
      expect(scoreCard.getTotalScore()).toEqual(7);
    });
  });
});

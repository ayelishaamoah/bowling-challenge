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

    it('allows a user to roll a gutter game', function() {
      for (var i = 0 ; i < 20; i++) {
        scoreCard.addRoll(0);
      }
      expect(scoreCard.getTotalScore()).toEqual(0);
    });

    it('allows a user to roll a spare', function() {
      scoreCard.addRoll(4);
      scoreCard.addRoll(6);
      scoreCard.addRoll(3);
      for (var i = 0 ; i < 17; i++) {
        scoreCard.addRoll(0);
      };
      expect(scoreCard.getTotalScore()).toEqual(16);
    });

  });

});

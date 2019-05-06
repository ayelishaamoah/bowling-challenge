'use strict'

describe('Features', function() {
  var scoreCard;

  function multipleRolls(rolls, score) {
    for (var i = 0 ; i < rolls; i++) {
      scoreCard.addRoll(score);
    };
  };

  beforeEach(function(){
    scoreCard = new ScoreCard();
  });

  // a user can add rolls
  describe('addRoll', function() {
    it('allows a user to add rolls', function() {
      scoreCard.addRoll(2);
      scoreCard.addRoll(5);
      multipleRolls(18, 0);
      expect(scoreCard.getTotalScore()).toEqual(7);
    });

    it('allows a user to roll a gutter game', function() {
      multipleRolls(20, 0);
      expect(scoreCard.getTotalScore()).toEqual(0);
    });

    it('allows a user to roll a spare', function() {
      scoreCard.addRoll(4);
      scoreCard.addRoll(6);
      scoreCard.addRoll(3);
      multipleRolls(17, 0);
      expect(scoreCard.getTotalScore()).toEqual(16);
    });

  });

});

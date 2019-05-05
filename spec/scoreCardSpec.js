'use strict'

describe('ScoreCard', function() {

  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard;
  });

  // a new scorecard should start with blank frames
  it('has an empty frames array', function() {
    expect(scoreCard.frames).toEqual([]);
  });

  describe('addRoll', function() {
    it('allows a user to add a roll', function(){
      scoreCard.addRoll(2);
      expect(scoreCard.totalScore).toEqual(2);
    });
    // a user can take a complete return
      it('allows a user to complete a turn', function() {
        scoreCard.addRoll(2);
        scoreCard.addRoll(5);
        expect(scoreCard.frames).toContain([2,5]);
      });
    });
  });

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
});

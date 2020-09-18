/* eslint no-undef: 'off' */

describe('Highest ocurrences', function () {
  it('Defines highestOccurence', function () {
    expect(typeof highestOccurence).toBe('function');
  });

  it('highestOccurrence([2, 3, 2, 2, 2, 4, 2]) returns [2]', function () {
    expect(highestOccurence([2, 3, 2, 2, 2, 4, 2])).toEqual([2]);
  });

  it('highestOccurrence([2, 3, 2, 3, 2, 3, 4]) returns [2, 3]', function () {
    expect(highestOccurence([2, 3, 2, 3, 2, 3, 4])).toEqual([2, 3]);
  });

  it('highestOccurrence(["a", "b", "c", "a", "a", "a", "a"]) returns ["a"]', function () {
    expect(highestOccurence(['a', 'b', 'c', 'a', 'a', 'a', 'a'])).toEqual(["a"]);
  });

  it('highestOccurrence(["a", "a", 2, 2, 2, "a", 4]) returns [2, "a"]', function () {
    expect(highestOccurence(["a", "a", 2, 2, 2, "a", 4])).toEqual([2, "a"]);
  });
  
});

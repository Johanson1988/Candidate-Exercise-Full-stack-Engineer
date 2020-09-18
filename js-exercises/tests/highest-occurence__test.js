/* eslint no-undef: 'off' */

describe('Highest ocurrences', function () {
  it('Defines highestOccurence', function () {
    expect(typeof highestOccurence).toBe('function');
  });

  it('highestOccurrence([2, 3, 2, 2, 2, 4, 2]) returns [2]', function () {
    expect(highestOccurence([2, 3, 2, 2, 2, 4, 2]).length).toBe(1);
    expect(highestOccurence([2, 3, 2, 2, 2, 4, 2]).includes(2)).toBe(true);
  });

  it('highestOccurrence([2, 3, 2, 3, 2, 3, 4]) returns [2, 3]', function () {
    expect(highestOccurence([2, 3, 2, 3, 2, 3, 4]).length).toBe(2);
    expect(highestOccurence([2, 3, 2, 3, 2, 3, 4]).includes(2)).toBe(true);
    expect(highestOccurence([2, 3, 2, 3, 2, 3, 4]).includes(3)).toBe(true);
  });

  it('highestOccurrence(["a", "b", "c", "a", "a", "a", "a"]) returns ["a"]', function () {
    expect(highestOccurence(['a', 'b', 'c', 'a', 'a', 'a', 'a']).length).toBe(1);
    expect(highestOccurence(['a', 'b', 'c', 'a', 'a', 'a', 'a']).includes("a")).toBe(true);
  });

  it('highestOccurrence(["a", "a", 2, 2, 2, "a", 4]) returns [2, "a"]', function () {
    expect(highestOccurence(["a", "a", 2, 2, 2, "a", 4]).length).toBe(2);
    expect(highestOccurence(["a", "a", 2, 2, 2, "a", 4]).includes(2)).toBe(true);
    expect(highestOccurence(["a", "a", 2, 2, 2, "a", 4]).includes("a")).toBe(true);
  });
  
});

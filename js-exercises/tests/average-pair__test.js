/* eslint no-undef: 'off' */

describe('Average Pair', function () {
  it('Defines averagePair', function () {
    expect(typeof averagePair).toBe('function');
  });

  it('Empty array returns false', function () {
    expect(averagePair([], 4)).toBe(false);
  });

  it('averagePair([1,2,3], 2.5) returns true', function () {
    expect(averagePair([1,2,3], 2.5)).toBe(true);
  });

  it('averagePair([1,3,3,5,6,7,10,12,19], 8) returns true', function () {
    expect(averagePair([1,3,3,5,6,7,10,12,19], 8)).toBe(true);
  });

  it('averagePair([-1,0,3,4,5,6], 4.1) returns false', function () {
    expect(averagePair([-1,0,3,4,5,6], 4.1)).toBe(false);
  });
});

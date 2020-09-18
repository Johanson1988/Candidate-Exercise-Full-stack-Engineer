/* eslint no-undef: 'off' */

describe('Average Pair', function () {
  it('Defines averagePair', function () {
    expect(typeof averagePair).toBe('function');
  });

  it('First parameter larger', function () {
    expect(maxOfTwoNumbers(2, 1)).toBe(2);
  });

  it('Second parameter larger', function () {
    expect(maxOfTwoNumbers(1, 3)).toBe(3);
  });

  it('First and Second parameter equal', function () {
    expect(maxOfTwoNumbers(4, 4)).toBe(4);
  });
});

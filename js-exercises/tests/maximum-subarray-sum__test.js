/* eslint no-undef: 'off' */

describe('Maximum Subarray', function () {
  it('Defines maxSubarraySum', function () {
    expect(typeof maxSubarraySum).toBe('function');
  });

  it('maxSubarraySum([], 4) returns null', function () {
    expect(maxSubarraySum([], 4)).toEqual(null);
  });

  it('maxSubarraySum([1,2,5,2,8,1,5], 4) returns 17', function () {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 4)).toEqual(17);
  });

  it('maxSubarraySum([1,2,5,2,8,1,5], 2) returns 10', function () {
    expect(maxSubarraySum([1,2,5,2,8,1,5], 2)).toEqual(10);
  });

  it('maxSubarraySum([4,2,1,6], 1) returns 6', function () {
    expect(maxSubarraySum([4,2,1,6], 1)).toEqual(6);
  });

  it('maxSubarraySum([4,2,1,6,2], 4) returns 13', function () {
    expect(maxSubarraySum([4,2,1,6,2], 4)).toEqual(13);
  });
});
/**
 * Function
 * 
 * Iterates the array, creating chunks of n elements and calculating the sum. if the sum is higher than stored result,
 * new value is stored. Returns the highest value stored.
 * 
 * If empty array is provided, returns null.
 * 
 * @param {Array} input The array to analyze
 * @param {number} nItems Number of consecutive elements
 */

function maxSubarraySum (input, nItems) {
    if (!input.length) return null;
    return input.reduce(function(accumulator, currentValue, index) {
        const chuntkTotalSum = input.slice(index, index + nItems).reduce((accumulator, currentValue) => accumulator + currentValue);
        return chuntkTotalSum > accumulator ? chuntkTotalSum : accumulator;
    }, input[0])
}
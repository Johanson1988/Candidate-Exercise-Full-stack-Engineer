function maxSubarraySum (input, nItems) {
    
    if (!input.length) return null;

    return input.reduce((accumulator, currentValue, index) => {
        const chuntkTotalSum = input.slice(index, index + nItems).reduce((accumulator, currentValue) => accumulator + currentValue);
        return chuntkTotalSum > accumulator ? chuntkTotalSum : accumulator;
    }, input[0])
}


console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
// 17

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
// 10

console.log(maxSubarraySum([4,2,1,6], 1));
// 6

console.log(maxSubarraySum([4,2,1,6,2], 4));
// 13

console.log(maxSubarraySum([], 4));
function maxSubarraySum (input, nItems) {
    if (!input.length) return null;
    return input.reduce(function(accumulator, currentValue, index) {
        const chuntkTotalSum = input.slice(index, index + nItems).reduce((accumulator, currentValue) => accumulator + currentValue);
        return chuntkTotalSum > accumulator ? chuntkTotalSum : accumulator;
    }, input[0])
}
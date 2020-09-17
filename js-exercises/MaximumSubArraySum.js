function maxSubarraySum (input, nItems) {
    
    if (!input.length) return null;

    return input.reduce((accumulator, currentValue, index) => {
        const chuntkTotalSum = input.slice(index, index + nItems).reduce((accumulator, currentValue) => accumulator + currentValue);
        return chuntkTotalSum > accumulator ? chuntkTotalSum : accumulator;
    }, input[0])
}

const input1 = [1,2,5,2,8,1,5];
console.log("Input 1: ", input1);
console.log("maxSubarraySum(input1, 4)", maxSubarraySum(input1, 4));

const input2 = [1,2,5,2,8,1,5];
console.log("Input 2: ", input2);
console.log("maxSubarraySum(input2, 4)", maxSubarraySum(input2, 4));

const input3 = [4,2,1,6];
console.log("Input 3: ", input3);
console.log("maxSubarraySum(input3, 4)", maxSubarraySum(input3, 4));

const input4 = [4,2,1,6,2];
console.log("Input 4: ", input4);
console.log("maxSubarraySum(input4, 4)", maxSubarraySum(input4, 4));

const input5 = [];
console.log("Input 5: ", input5);
console.log("maxSubarraySum(input5, 4)", maxSubarraySum(input5, 4));
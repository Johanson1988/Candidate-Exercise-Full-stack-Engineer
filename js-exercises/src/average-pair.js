const averagePair = (input, average) => {
    for (let i= 0; i <= input.length; i++)
        for(let j = i + 1; j <= input.length; j++)
            if ((input[i] + input[j])/2 === average) 
                return true;
    return false;
}

const input1 = [1,2,3];
console.log("Input 1: ", input1);
console.log("averagePair(input1, 2.5)", averagePair(input1, 2.5));
const input2 = [1,3,3,5,6,7,10,12,19];
console.log("Input 2; ", input2);
console.log("averagePair(input2, 8)", averagePair(input2, 8));
const input3 = [-1,0,3,4,5,6];
console.log("Input 3: ", input3);
console.log("averagePair(input3, 4.1)", averagePair(input3, 4.1));
const input4 = [1];
console.log("Input 4: ", input4);
console.log("averagePair(input4, 4)", averagePair(input4, 4));
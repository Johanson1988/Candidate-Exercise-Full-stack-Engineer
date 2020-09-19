/**
 * Function
 * 
 * Iterates the array, checking if any of the possible pairs matchs the average. If match is found, execution stops
 * and true value is returned. Otherwise, returns false.
 * 
 * @param {Array} input The array to analyze
 * @param {number} average Target average
 */


const averagePair = (input, average) => {
    for (let i= 0; i <= input.length; i++)
        for(let j = i + 1; j <= input.length; j++)
            if ((input[i] + input[j])/2 === average) 
                return true;
    return false;
}
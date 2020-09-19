/**
 * Function
 * 
 * Iterates the array, creating a new object storing a hash map with element repetitions.
 * It also stores an array with the element/s with the higher number of repetitions. This array will be the final return.
 * 
 * This approach will only work if no numbers are passed as string, as understood from provided examples.
 * 
 * @param {Array} input The array to analyze
 */


const highestOccurence = input =>
    input.reduce((accumulator, currentValue) => {
        const prevMaxOcurr = accumulator[accumulator.maxOcurrences[0]];
        accumulator[currentValue] ?
            accumulator[currentValue]++ :
            accumulator[currentValue] = 1;
        switch(true) {
            case !accumulator.maxOcurrences[0]:
            case accumulator[currentValue] > prevMaxOcurr:
                accumulator.maxOcurrences = [currentValue];
                break;
            case accumulator[currentValue] === accumulator[accumulator.maxOcurrences[0]]:
                if ((accumulator.maxOcurrences.includes(currentValue)) === false)
                    accumulator.maxOcurrences.push(currentValue);
                break;
        }
      return accumulator;
    }, {maxOcurrences: []}).maxOcurrences;
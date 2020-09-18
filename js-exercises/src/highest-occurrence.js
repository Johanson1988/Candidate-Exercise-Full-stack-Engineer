/**
 * Function
 * 
 * Recorre el array creando un array, salvando en el objeto acumulador el elemento como key, y el número de ocurrencias como value.
 * También se guarda un array con el/los elemento/s con mayor número de coincidencias y este es el return de la función.
 * 
 * Esta aproximación funciona siempre que no se introduzcan números con string '1', como se deduce de los ejemplos aportados.
 * 
 * @param {*} input The array to analyze
 */

//Poner checkear que el array esté vacío y tal


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

const input1 = [2, 3, 2, 2, 2, 4, 2];
console.log("Input 1: ", input1);
console.log("highestOccurence(input1): ", highestOccurence(input1));

const input2 = [2, 3, 2, 3, 2, 3, 4];
console.log("Input 2: ", input2);
console.log("highestOccurence(input2): ", highestOccurence(input2));

const input3 = ['a', 'b', 'c', 'a', 'a', 'a', 'a'];
console.log("Input 3: ", input3);
console.log("highestOccurence(input3): ", highestOccurence(input3));

const input4 = ['a', 'a', 2, 2, 2, 'a', 4];
console.log("Input 4: ", input4);
console.log("highestOccurence(input4): ", highestOccurence(input4));
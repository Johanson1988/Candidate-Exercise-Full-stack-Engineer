const averagePair = (input, average) => {
    if (!input.length) return null;
    for (let i= 0; i <= input.length; i++)
        for(let j = i + 1; j <= input.length; j++)
            if ((input[i] + input[j])/2 === average) 
                return true;
    return false;
}
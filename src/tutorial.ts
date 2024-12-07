const processInput = (input: string | number): void => {
    if (typeof (input) === 'number') {
        console.log(input * 2);
    }
    else if (typeof (input) === 'string') {
        console.log(input.toUpperCase());
    }
}

processInput(12);
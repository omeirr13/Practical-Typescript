const processData = (input: string | number, config: {reverse: boolean} = {reverse:false}): string | number | void => {
    if(typeof(input) === "number"){
        return input**2;
    }
    else if(typeof(input) === "string"){
        let upper = input.toUpperCase();
        if(config.reverse){
            upper =  upper.split('').reverse().join('');
        }
        return upper;
    }
}

console.log(processData(9));
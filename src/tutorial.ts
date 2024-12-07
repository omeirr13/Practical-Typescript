const calculatePrice = (price: number, discount?: number): number => {
    return price - (discount || 0);
}
//function with optional parameter must work when they are not supplied.

let priceAfterDiscount: number = calculatePrice(100, 20);
//what if sometimes no discount..optional parameter

const calculateScore = (initialScore: number, penaltyPoint: number = 0): number => {
    return initialScore - penaltyPoint;
}

let scoreWithPenalty: number = calculateScore(100, 20);
let scoreWithoutPenalty: number = calculateScore(100);


function sum(message: string, ...numbers: number[]): string {
    const doubled: number[] = numbers.map((num) => num * 2);

    let total = numbers.reduce((previous, current) => {
        return previous + current
    }, 0);

    return `${message}${total}`;
}

let result: string = sum('The total is: ', 1, 2, 3, 4, 5);
console.log(result);


function logMessage(message: string): void{
    console.log(message);
}
logMessage("hello");

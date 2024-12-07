//implicity will get type any.
const sayHi = (name: string) => {
    console.log(`Hello ${name.toUpperCase()}`);
}

sayHi("omeir");


const calculateDiscount = (price: number): number => {
    return price * 0.9;
}

const finalPrice: number = calculateDiscount(200);
console.log(finalPrice);


// function addThree(number: any){
//     let num2: number = 3;
//     return num2 + number;
// }

// const ans = addThree(3);
// console.log(typeof(ans));
// ans.toUpperCase();
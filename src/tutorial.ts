// let tax: number | string = 10;
// tax = "100";

// let requestStatus: 'pending' | 'success' | 'error' = 'pending';
// let str:string = "pending";

// let foundNumber : string | undefined;
// let numbers:any = ["1", "2", "3", "4"];

// for(let number of numbers){
//     if(number === "1"){
//         foundNumber = number;
//     }
// }

// foundNumber?.length//automatically adds optional change

let orderStatus: 'processing' | 'shipping' | 'delivered' = 'processing';
// orderStatus = 'shipped';//error
orderStatus = 'delivered';

let discount: number | string = 20;
discount = "20%";
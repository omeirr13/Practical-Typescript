let car: {brand: string, year:number} = {
    brand: 'toyota',
    year: 2024,
}

let book = {title: 'book', cost: 20};
let pen = {title: 'pen', cost:20};
let notebook = {title:'notebook'};//have to make sure all have same keys and values have same type


let items : {readonly title:string, cost?: number}[] = [book, pen, notebook];
// items[0].title = "hello";
// we can also have optional properties

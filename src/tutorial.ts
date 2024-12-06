// let car: {brand: string, year:number} = {
//     brand: 'toyota',
//     year: 2024,
// }

// let book = {title: 'book', cost: 20};
// let pen = {title: 'pen', cost:20};
// let notebook = {title:'notebook'};//have to make sure all have same keys and values have same type


// let items : {readonly title:string, cost?: number}[] = [book, pen, notebook];
// // items[0].title = "hello";
// // we can also have optional properties


let bike : {brand: string, year: number} = {
    brand: "toyota",
    year: 2024
}

// bike.year = "2024"; string is not assinable to number
// bike.ok//ok does not exist

// let laptop: {brand: string, year: number} = {
//     brand: "lenovo",
// }
//cant do above
let laptop: {brand: string, year?: number} = {
    brand: "lenovo",
}
console.log(laptop);

let products : {title: string, price ?: number}[] = [
    {
        title: "laptop",
        price: 1000,
    },
    {
        title: "headphones",
    }
]
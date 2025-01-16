const sales = [
    { id: 1, product: "Laptop", category: "Electronics", price: 999.99, quantity: 1, date: "2023-05-01" },
    { id: 2, product: "Smartphone", category: "Electronics", price: 699.99, quantity: 2, date: "2023-05-02" },
    { id: 3, product: "Headphones", category: "Electronics", price: 199.99, quantity: 3, date: "2023-05-03" },
    { id: 4, product: "Running Shoes", category: "Sports", price: 89.99, quantity: 1, date: "2023-05-04" },
    { id: 5, product: "Coffee Maker", category: "Home", price: 79.99, quantity: 1, date: "2023-05-05" },
    { id: 6, product: "Yoga Mat", category: "Sports", price: 29.99, quantity: 2, date: "2023-05-06" },
    { id: 7, product: "Blender", category: "Home", price: 39.99, quantity: 1, date: "2023-05-07" },
    { id: 8, product: "Watch", category: "Electronics", price: 299.99, quantity: 1, date: "2023-05-08" },
    { id: 9, product: "T-shirt", category: "Clothing", price: 19.99, quantity: 3, date: "2023-05-09" },
    { id: 10, product: "Backpack", category: "Accessories", price: 49.99, quantity: 1, date: "2023-05-10" }
]
//q1
// let electronicsItems = sales.filter(item)=>{
//     return item.category==='Electronics';

// };
// console.log(electronicsItems);

//q2
// let productNames= sales.map(items)=>{
//     return items.product
// };
// console.log(productNames)

//q3
// let revenue = sales.reduce(accumulator,items=>{
//     let totalRevenue = accumulator + items.price*items.quantity
//         return totalRevenue;
    
// },0)
// console.log(totalRevenue.twofixded)

//q4
// let multipleUnits = sales.filter(items=>{
//     return items.quantity>1
// })
// let productNames = multipleUnits.map(items=>{
//     return items.productNames
// });
// console.log(productNames)

//q5
// let Categories= sales.reduce(accumulator, items=>{
//     if (accumulator(items.category)(
//         accumulator[items.category]
//     ));
//     accumulator(items.category.push(items.product))
//     return accumulator
// },[]);
// console.log(Categories)

//q6
let allElectronicSales = sales.filter(items=>{
    return items.category ==='Electronics'
}).map(items=>{
    return items.quantity
}).reduce(accumulator,items=>{
    let sum = accumulator + items.price
    return sum
})
 
console.log(allElectronicSales)

//q7
let productNamesandPrice = sales.map(items=>{
    return {
        'item':items.product, 
        'price':items.price
    }
         
}).reduce(accumulator, items=>{
    //  return items.price > max.price
    // console.log(maximum)
    if(items.price>accumulator.price){return accumulator=items}
    else return accumulator;
},{
    'product':'',
    'price':''
})
console.log(productNamesandPrice)

//q8
let sportSales = sales.filter(items=>{
    return items.category==='Sports'
})
let length = sportSales.length

let averageSports = sportSales.reduce(accumulator, items=>{

    return accumulator.price+= items.price

    // return accumulator.price+= items.price/sportSales.length
})
let average = sum/length

console.log(average)

//q9  Map to date and daily total, reduce to group by date, then find maximum.

let maxedPriceProduct= sales.map(items=>{
    return {
        'date': items.date,
        "total": items.price * items.quantity
        
    }
}).reduce(accumulator, items=>{
    if(accumulator.date) [
        accumulator[items.date] = 0
    ];
    accumulator[items.date]+=items.total;

    return accumulator
},{})

dateGroupData

console.log(dateGroupData)

let maxRevenueDetails = dateGroupData.reduce

//q10 Reduce to group and sum quantities by product.

let quantiesByProduct = sales.reduce(accumulator, items=>{
    if (accumulator[items.product])
       (accumulator[items.product]=[]);
    accumulator(items.product)+= items.quantity;
},{})
console.log(quantiesByProduct)
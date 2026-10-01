const products = [
    { name: 'Laptop', stock: 5, price: 1000 },
    { name: 'Mouse', stock: 0, price: 25 },
    { name: 'Keyboard', stock: 12, price: 75 },
    { name: 'Monitor', stock: 0, price: 300 }
];

products.push({name:'webcam',stock:8,price:50});

console.log(`The last item is: ${products.at(-1).name}`);

products.forEach((product)=>{
    if(product.stock>0){
        console.log(`${product.name} In Stock(${product.stock} units - price ${product.price})`);
    }
    else{
        console.log(`${product.name} - Out of Stock`);
    }
});


// const item =['laptop','mouse','keyboard','monitor','headphones'];
// const stock=[5,0,12,0,3];

// item.push('webcam');
// stock.push(8);

// for(let i=0;i<item.length;i++){
//     if(stock[i]>0){
//         console.log(`${item[i]} is in stock(${stock[i]} available)\n`)
//     }
//     else{
//         console.log(`${item[i]} is out of stock`);
//     }
// }

// console.log(`Last item added : ${item.at(-1)}`);

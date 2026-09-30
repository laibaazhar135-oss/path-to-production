const item =['laptop','mouse','keyboard','monitor','headphones'];
const stock=[5,0,12,0,3];
//simple array program
item.push('webcam');
stock.push(8);

for(let i=0;i<item.length;i++){
    if(stock[i]>0){
        console.log(`${item[i]} is in stock(${stock[i]} available)\n`)
    }
    else{
        console.log(`${item[i]} is out of stock`);
    }
}

console.log(`Last item added : ${item.at(-1)}`);

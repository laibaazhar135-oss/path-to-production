const products = [
  { name: "Laptop",     price: 1200, stock: 5,  category: "computers",   supplier: { name: "TechCorp", country: "USA" } },
  { name: "Mouse",      price: 25,   stock: 0,  category: "accessories", supplier: { name: "ClickCo",  country: "China" } },
  { name: "Keyboard",   price: 70,   stock: 12, category: "accessories", supplier: { name: "ClickCo",  country: "China" } },
  { name: "Monitor",    price: 300,  stock: 3,  category: "computers",   supplier: { name: "ViewMax",  country: "Korea" } },
  { name: "USB Cable",  price: 8,    stock: 50, category: "accessories", supplier: { name: "WireWorld", country: "China" } },
  { name: "Desktop PC", price: 5000,  stock: 0,  category: "computers",   supplier: { name: "TechCorp", country: "USA" } }
];
let inStock;
let productPrice;
let productName;
let discount;
let discountedPrice;
let max=0;
let supplierList=[];
let AllProductsPrice=0;

for(let i=0;i<products.length;i++){
    let totalPrice=0;
      console.log(`${products[i].name} - $${products[i].price} - Stock: ${products[i].stock}`);
      if(products[i].stock>0){
        totalPrice=products[i].price*products[i].stock;
        AllProductsPrice+=totalPrice;
        inStock=true;
        products[i].inStock=true;
        console.log(`${products[i].name} is in stock`);
        console.log(`Total price of all ${products[i].name} in stock is: ${totalPrice}`)
      }
      else{
        products[i].inStock=false;
        console.log(`${products[i].name} is out of stock`);
      }
      if(products[i].price>max && products[i].stock>0){
        max=products[i].price;
         productPrice=products[i].price;
          productName=products[i].name;
      }
      if(products[i].stock>10){
          discount=0.10;
          discountedPrice=products[i].price-(products[i].price*discount);
           products[i].price=discountedPrice;
           console.log(`${products[i].name} price after discount is: ${discountedPrice}`);
      }
      
     if(supplierList.includes(products[i].supplier.country)){
        continue;
     }
     else{
        supplierList.push(products[i].supplier.country);
     }
}
console.log(`All products price: ${AllProductsPrice}`);
console.log(`Most expensive product in store is ${productName} - ${productPrice}`);
console.log(`Suppliers are: `);
for(let i of supplierList){
    console.log(i);
}

const counts={};
for(let i =0;i<products.length;i++){
       const category=products[i].category;
       if(counts[category]===undefined){
        counts[category]= products[i].stock;
       }
       else{
        counts[category]+=products[i].stock;
       }
}
console.log(counts);

const double=n=>n+n;
console.log(double(2));

const product={
    name:'keychain',
    price:20,
    inStock:false
}
const isInStock=product=>{
     return product.inStock===true
}
console.log(isInStock(product));

const makesLabel=product=>console.log(`${product.name}-$${product.price}`);
makesLabel(product);

const toSummary=product=>{
    return {name:product.name,price:product.price}
}
const result=toSummary(product);
console.log(result);

const products = [
  { name: "Laptop",     price: 1200, stock: 5,  category: "computers",   supplier: { name: "TechCorp", country: "USA" } },
  { name: "Mouse",      price: 25,   stock: 0,  category: "accessories", supplier: { name: "ClickCo",  country: "China" } },
  { name: "Keyboard",   price: 70,   stock: 12, category: "accessories", supplier: { name: "ClickCo",  country: "China" } },
  { name: "Monitor",    price: 300,  stock: 3,  category: "computers",   supplier: { name: "ViewMax",  country: "Korea" } },
  { name: "USB Cable",  price: 8,    stock: 50, category: "accessories", supplier: { name: "WireWorld", country: "China" } },
  { name: "Desktop PC", price: 5000,  stock: 0,  category: "computers",   supplier: { name: "TechCorp", country: "USA" } }
];


const getUniqueCountries=product=>{
    let supplierList=[];
    for(let i=0;i<product.length;i++){
        if(!supplierList.includes(product[i].supplier.country)){
            supplierList.push(product[i].supplier.country);
        }
    }
    return supplierList;
}
console.log(getUniqueCountries(products));
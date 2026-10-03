const products = [
  { name: "Laptop",     price: 1200, stock: 5,  category: "computers",   supplier: { name: "TechCorp", country: "USA" } },
  { name: "Mouse",      price: 25,   stock: 0,  category: "accessories", supplier: { name: "ClickCo",  country: "China" } },
  { name: "Keyboard",   price: 70,   stock: 12, category: "accessories", supplier: { name: "ClickCo",  country: "China" } },
  { name: "Monitor",    price: 300,  stock: 3,  category: "computers",   supplier: { name: "ViewMax",  country: "Korea" } },
  { name: "USB Cable",  price: 8,    stock: 50, category: "accessories", supplier: { name: "WireWorld", country: "China" } },
  { name: "Desktop PC", price: 5000,  stock: 0,  category: "computers",   supplier: { name: "TechCorp", country: "USA" } }
];

function formatProduct(product){
    for(let i=0;i<product.length;i++){
    console.log(`${product[i].name}-$${product[i].price}-stock:${product[i].stock}`);
    }
}
function calculateInventoryValue(product){
    let Result='';
     let totalPice=0;
    for(let i=0;i<product.length;i++){
        let result=0;
         result= product[i].price*product[i].stock;
        totalPice+=result;
         Result+=product[i].name+' in stock are of total price of: '+result+'\n';
    }
    Result+='total price of all products in stock is: '+totalPice;
    return Result;
}

function findMostExpensiveOne(product){
    let max=0;
    let productName;
    let productPrice;
    let result='';
    for(let i=0;i<product.length;i++){
        if(product[i].stock>0){
       if(product[i].price>max){
            max=product[i].price;
            productPrice=product[i].price;
            productName=product[i].name;
       }
       result+='\n'+product[i].name+' is in stock: '+product[i].stock;
            }  
       else{
        result+='\n'+product[i].name+' is out of stock';
       }
    }
    if(productName===undefined){
        return null;
    }
    else{
    return [result,productName,productPrice];
    }
}

function countByCategory(product){
    let count={};
    for(let i=0;i<product.length;i++){
        let category=product[i].category;
        if(count[category]===undefined){
            count[category]=1;
        }
        else{
            count[category]+=1;
        }
    }
    return count;
}

function getUniqueCountries(product){
    let supplierList=[];
    for(let i=0;i<product.length;i++){
        if(!supplierList.includes(product[i].supplier.country)){
            supplierList.push(product[i].supplier.country);
        }
    }
    return supplierList;
}

function applyDiscount(product){
    let discount=0.10;
    let price=0;
    let result='';
    for(let i=0;i<product.length;i++){
        if(product[i].stock>10){
             price=product[i].price-(product[i].price*discount);
             product[i].price=price;
        } 
       result+='\n'+product[i].name+' after discount is: '+product[i].price;
    }
  return result;
}

formatProduct(products);

let result=calculateInventoryValue(products);
console.log(result);

let answer=countByCategory(products);
console.log(answer);

let res=getUniqueCountries(products);
console.log(`Supplier countries are: \n${res}`);

let ans=applyDiscount(products);
console.log(ans);

const found=findMostExpensiveOne(products);
if(found===null){
    console.log(`No product is in stock`);
}
else{
let [resul,productName,productPrice]=found;
console.log(`${resul}\n${productName}-${productPrice} is the most expensive one`);
}
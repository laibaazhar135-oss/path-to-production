const readline = require('readline/promises');
const {stdin:input,stdout:output}=require('process');

async function main(){
     const rl = readline.createInterface({input,output});
     const cart= await rl.question('Enter the number of items in cart: ');
      const cartItems = Number(cart);
      let price=[];//here we could use a simple variable as well...
      let discount=0;
      let total=0;
      for(let i=0;i<cartItems;i++){
        price[i]=await rl.question(`Enter the price of item ${i+1}: `);
        price[i]=Number(price[i]);
        if(isNaN(price[i])){
            console.log('Invalid price skipped...');
            continue;
        }
        total+=price[i];
      }
      if(total>=100){
        discount=0.15;
             total= total-(total*discount);
      }
      console.log(`Total price: ${total}\nDiscount : ${discount*100}%\n Total price after discount: ${total}\n`);
      rl.close();
}
main();
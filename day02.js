//Practice for learning the readline with async/await for user input...

// const readline = require('readline/promises');
// const {stdin:input ,stdout:output}=require('process');

// async function main(params) {
//     const rl = readline.createInterface({input,output});

//     const role =await rl.question('Enter your role: (vip/member/guest): ');
//     const priceInput = await rl.question('enter cart price: ');

//    const price = Number(priceInput);

//    console.log(`Price : ${price} and role: ${role}`);

//    rl.close();
// }

// main();

//-------------------------------------------------------------------------


const readline= require('readline/promises');
const {stdin:input ,stdout:output}= require('process');

async function main() {
    const rl = readline.createInterface({input,output});

    const role =await rl.question('Enter your role(VIP,MEMBER,GUEST): ');
    const priceInput= await rl.question('Enter the price of product: ');
    if(priceInput.trim()===''){
        console.log('Error, Price cannot be empty...');
        rl.close();
        return;
    }

    const price = Number(priceInput);
    let discount;

    switch(role.toLowerCase()){
        case 'vip':
            discount=0.20;
            break;
        case 'member':    
        discount=price>=100?0.10:0.05;
        break;
        case 'guest':
            discount=0;
            break;
            default:
                console.log('User role is unrecognized');
                rl.close();
                return;
    }
    let discountedPrice=price-(price*discount);

    const freeShipping=discountedPrice>=80?true:false;
    let FS= freeShipping? 'available':'not-available';
//also could be const freeShipping = discountedPrice>=80?'available:not-available;

    console.log(`Calculated discount: ${discount*100} % \nFinal Price: ${discountedPrice}\nFree shipping: ${FS}`);

    rl.close();
}

main();
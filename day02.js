const readline = require('readline/promises');
const {stdin:input ,stdout:output}=require('process');

async function main(params) {
    const rl = readline.createInterface({input,output});

    const role =await rl.question('Enter your role: (vip/member/guest): ');
    const priceInput = await rl.question('enter cart price: ');

   const price = Number(priceInput);

   console.log(`Price : ${price} and role: ${role}`);

   rl.close();
}

main();
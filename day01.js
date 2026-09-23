const item_price=80;
let user_balance=100;
let hasPrimeMembership=true;
const shipping_cost=15;

let effectiveShipping = hasPrimeMembership?0:shipping_cost;

let totalCost = item_price + effectiveShipping;

let remainingBalance = user_balance - item_price;
let canPurchaseAndBuffer = (user_balance>=totalCost && (remainingBalance>=5))

console.log('Total cost of the user: ',totalCost);
console.log('User can purchase with $5 buffer :',canPurchaseAndBuffer);
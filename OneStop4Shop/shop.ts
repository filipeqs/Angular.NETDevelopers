let choice: number;
const productId: number[] = [1001, 1002, 1003, 1004, 1005];
var productName: string[] = [
  'Chess board',
  'Alice in wonderland',
  'Nike running shoes',
  'Moto G5',
  'Landscape oil painting',
];
var price: number[] = [349.5, 250.25, 1700, 13000, 2750.75];

console.log('\n -----Welcome to the world of shopping-----');
console.log(' 1. View all products');
console.log(' 2. Bill products');
console.log(' 3. Exit');

choice = 2;

if (choice == 1) {
  //View the products
  console.log();
  console.log(' Product Id\tProduct Name\tPrice\n');
  for (let i = 0; i < productId.length; i++) {
    console.log(productId[i] + '\t' + productName[i] + '\t' + price[i]);
  }
} else if (choice == 2) {
  //Bill the products
  //Bill the products
  let subTotal = 0;
  for (let i = 0; i < price.length; i++) {
    subTotal += price[i];
  }
  const discount = 0.1;
  let discountPrice = 0;
  if (subTotal > 300) {
    discountPrice = subTotal * discount;
  }
  const total = subTotal - discountPrice;
  console.log(`Subtotal: $${subTotal}`);
  console.log(`Discount: ${discount * 100}% $${discountPrice}`);
  console.log(`Total: $${total}`);
} else if (choice == 3) {
  console.log('You have chosen to exit.');
} else {
  console.log('Please enter a valid menu option!');
}

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

choice = 1;
if (choice == 1) {
  //View the products
  console.log();
  console.log(' Product Id\tProduct Name\tPrice\n');
  for (let i = 0; i < productId.length; i++) {
    console.log(productId[i] + '\t' + productName[i] + '\t' + price[i]);
  }
} else if (choice == 2) {
  //Bill the products
  console.log('You have chosen to bill the products.');
} else if (choice == 3) {
  console.log('You have chosen to exit.');
} else {
  console.log('Please enter a valid menu option!');
}

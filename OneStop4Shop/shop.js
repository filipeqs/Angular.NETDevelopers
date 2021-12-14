var choice;
var productId = [1001, 1002, 1003, 1004, 1005];
var productName = [
    'Chess board',
    'Alice in wonderland',
    'Nike running shoes',
    'Moto G5',
    'Landscape oil painting',
];
var price = [349.5, 250.25, 1700, 13000, 2750.75];
console.log('\n -----Welcome to the world of shopping-----');
console.log(' 1. View all products');
console.log(' 2. Bill products');
console.log(' 3. Exit');
choice = 2;
if (choice == 1) {
    //View the products
    console.log();
    console.log(' Product Id\tProduct Name\tPrice\n');
    for (var i = 0; i < productId.length; i++) {
        console.log(productId[i] + '\t' + productName[i] + '\t' + price[i]);
    }
}
else if (choice == 2) {
    //Bill the products
    //Bill the products
    var subTotal = 0;
    for (var i = 0; i < price.length; i++) {
        subTotal += price[i];
    }
    var discount = 0.1;
    var discountPrice = 0;
    if (subTotal > 300) {
        discountPrice = subTotal * discount;
    }
    var total = subTotal - discountPrice;
    console.log("Subtotal: $".concat(subTotal));
    console.log("Discount: ".concat(discount * 100, "% $").concat(discountPrice));
    console.log("Total: $".concat(total));
}
else if (choice == 3) {
    console.log('You have chosen to exit.');
}
else {
    console.log('Please enter a valid menu option!');
}

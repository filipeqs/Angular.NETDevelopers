const productId: number = <number>(<any>'101');
const productName: string = 'Chess board';
const price: number = 99.5;
const isAvailable: boolean = true;
console.log('productID: ', productId);
console.log('productName: ', productName);
console.log('price: ', price);
console.log('Availability: ', isAvailable);

var contact: any;
console.log(typeof contact);

contact = 89418914894;
console.log(typeof contact);

contact = 'john@gmail.com';
console.log(typeof contact);

const productDesc: string = 'Biscuits';
const ProductDesc: string = 'Biscuits';

const picture = null;
console.log(picture); //shows null since the variable is assigned to null
console.log(typeof picture);

var cart;
console.log(cart); //shows undefined since it is not initialized
console.log(typeof cart);

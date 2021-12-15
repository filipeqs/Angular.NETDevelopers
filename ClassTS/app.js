var Customer = /** @class */ (function () {
    function Customer(id, name, contact, hasCard) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        if (hasCard != undefined) {
            this.hasCard = hasCard;
        }
        else {
            this.hasCard = false;
        }
    }
    Customer.prototype.RequestCard = function () {
        if (this.hasCard == false) {
            this.hasCard = true;
        }
        else {
            return true;
        }
    };
    return Customer;
}());
//defining a class and setting class parameters using a constructor
var customerOne = new Customer(1001, 'John', 7204011993);
console.log('customer Id:', customerOne.id);
console.log('customer name:', customerOne.name);
console.log('customer contact:', customerOne.contact);
console.log('customer has card:', customerOne.hasCard);
// calling a method
console.log('\n Calling the request method');
customerOne.RequestCard();
console.log('customer has card:', customerOne.hasCard);
var customerTwo = new Customer(1002, 'joe', 7204011994, true);
console.log('customer Id:', customerTwo.id);
console.log('customer name:', customerTwo.name);
console.log('customer contact:', customerTwo.contact);
console.log('customer has card:', customerTwo.hasCard);

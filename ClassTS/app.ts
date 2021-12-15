class Customer {
  id: number;
  name: string;
  contact: number;
  hasCard: boolean;

  constructor(id: number, name: string, contact: number);
  constructor(id: number, name: string, contact: number, hasCard: boolean);

  constructor(id: number, name: string, contact: number, hasCard?: boolean) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    if (hasCard != undefined) {
      this.hasCard = hasCard;
    } else {
      this.hasCard = false;
    }
  }

  RequestCard(): Boolean {
    if (this.hasCard == false) {
      this.hasCard = true;
    } else {
      return true;
    }
  }
}

//defining a class and setting class parameters using a constructor
var customerOne: Customer = new Customer(1001, 'John', 7204011993);
console.log('customer Id:', customerOne.id);
console.log('customer name:', customerOne.name);
console.log('customer contact:', customerOne.contact);
console.log('customer has card:', customerOne.hasCard);
// calling a method
console.log('\n Calling the request method');
customerOne.RequestCard();
console.log('customer has card:', customerOne.hasCard);
var customerTwo: Customer = new Customer(1002, 'joe', 7204011994, true);
console.log('customer Id:', customerTwo.id);
console.log('customer name:', customerTwo.name);
console.log('customer contact:', customerTwo.contact);
console.log('customer has card:', customerTwo.hasCard);

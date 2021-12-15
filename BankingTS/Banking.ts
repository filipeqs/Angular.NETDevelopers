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
    if (hasCard) {
      this.hasCard = hasCard;
    } else {
      this.hasCard = false;
    }
  }

  RequestCard(): Boolean {
    if (this.hasCard == false) {
      this.hasCard = true;
      return true;
    }

    return false;
  }
}

class Account {
  protected accountNumber: number;
  public customer: Customer;
  private _balance: number;

  get balance(): number {
    return this._balance;
  }
  set balance(balance: number) {
    this._balance = balance;
  }

  constructor(accountNumber: number, customer: Customer) {
    this.accountNumber = accountNumber;
    this.customer = customer;
    this.balance = 0;
  }

  Deposit(amoount: number): boolean {
    this.balance += amoount;
    return true;
  }
}

class Savings extends Account {
  constructor(accountNumber: number, customer: Customer) {
    super(accountNumber, customer);
  }
}

var customer: Customer = new Customer(1001, 'John', 7204011993);
console.log('customer Id:', customer.id);
console.log('customer name:', customer.name);
console.log('customer contact:', customer.contact);

var account: Account = new Account(100123, customer);
var savingsAccount: Savings = new Savings(200123, customer);

savingsAccount.Deposit(10000);

console.log('Balance after deposit ', savingsAccount.balance);

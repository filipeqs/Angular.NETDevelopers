var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(id, name, contact, hasCard) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        if (hasCard) {
            this.hasCard = hasCard;
        }
        else {
            this.hasCard = false;
        }
    }
    Customer.prototype.RequestCard = function () {
        if (this.hasCard == false) {
            this.hasCard = true;
            return true;
        }
        return false;
    };
    return Customer;
}());
var Account = /** @class */ (function () {
    function Account(accountNumber, customer) {
        this.accountNumber = accountNumber;
        this.customer = customer;
        this.balance = 0;
    }
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (balance) {
            this._balance = balance;
        },
        enumerable: false,
        configurable: true
    });
    Account.prototype.Deposit = function (amoount) {
        this.balance += amoount;
        return true;
    };
    return Account;
}());
var Savings = /** @class */ (function (_super) {
    __extends(Savings, _super);
    function Savings(accountNumber, customer) {
        return _super.call(this, accountNumber, customer) || this;
    }
    return Savings;
}(Account));
var customer = new Customer(1001, 'John', 7204011993);
console.log('customer Id:', customer.id);
console.log('customer name:', customer.name);
console.log('customer contact:', customer.contact);
var account = new Account(100123, customer);
var savingsAccount = new Savings(200123, customer);
savingsAccount.Deposit(10000);
console.log('Balance after deposit ', savingsAccount.balance);

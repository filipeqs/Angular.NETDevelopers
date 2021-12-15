function customer_Details(custId, custName) {
    var mailId = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        mailId[_i - 2] = arguments[_i];
    }
    console.log('CustId: ', custId);
    console.log('CustName: ', custName);
    for (var i = 0; i < mailId.length; i++) {
        if (mailId[i] != undefined) {
            console.log('EmailId: ', mailId[i]);
        }
    }
}
customer_Details(110, 'Mary', 'mary@email.com');
customer_Details(111, 'John', 'john@email.com');
customer_Details(112, 'Joe', 'joe@email.com', 'joe@yahoo.com');

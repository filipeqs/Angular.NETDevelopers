function customer_Details(
  custId: number,
  custName: string,
  ...mailId: string[]
) {
  console.log('CustId: ', custId);
  console.log('CustName: ', custName);
  for (let i = 0; i < mailId.length; i++) {
    if (mailId[i] != undefined) {
      console.log('EmailId: ', mailId[i]);
    }
  }
}

customer_Details(110, 'Mary', 'mary@email.com');
customer_Details(111, 'John', 'john@email.com');
customer_Details(112, 'Joe', 'joe@email.com', 'joe@yahoo.com');

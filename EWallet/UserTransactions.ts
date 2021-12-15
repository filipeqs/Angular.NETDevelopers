import { PaymentType } from './PaymentType';
import { Transaction } from './Transaction';

export class UserTransactions {
  private listOfUserTransactions: Transaction[];

  constructor() {
    this.listOfUserTransactions = [
      new Transaction(
        100,
        'john@email.com',
        768,
        new Date(1981, 09, 21),
        PaymentType.cash,
        true
      ),
      new Transaction(
        101,
        'john@email.com',
        2134,
        new Date(1981, 09, 21),
        PaymentType.debitCard,
        true
      ),
      new Transaction(
        102,
        'john@email.com',
        456,
        new Date(1981, 09, 21),
        PaymentType.netBanking,
        true
      ),
    ];
  }

  displayTransaction(emailId: string) {
    const transactions = this.listOfUserTransactions.filter(
      (q) => q.emailId == emailId
    );
    for (let i = 0; i < transactions.length; i++) {
      console.log('TransactionDate: ', transactions[i].transactionDateTime);
      console.log('TransactionAmount: ', transactions[i].amount);
      console.log('---------------------------------------------');
    }
  }
}
